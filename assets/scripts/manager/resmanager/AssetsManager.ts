import BaseManager from "../base/BaseManager";

export default class AssetsManager extends BaseManager {
    private _assetsList: any = {};

    /** 加载预制体 */
    async loadPrefab(path: string): Promise<any> {
        return this.loadAssetsAsync(path, cc.Prefab);
    }

    /** 加载帧图片 */
    async loadSprite(path: string): Promise<cc.SpriteFrame> {
        return this.loadAssetsAsync(path, cc.SpriteFrame);
    }

    /** 加载图集 */
    async loadSpriteAtlas(path: string): Promise<cc.SpriteAtlas> {
        return this.loadAssetsAsync(path, cc.SpriteAtlas);
    }

    /** 加载音频 */
    async loadAudioClip(path: string): Promise<cc.AudioClip>{
        return this.loadAssetsAsync(path, cc.AudioClip);
    }

    /** 加载配置 */
    async loadConfig(path: string): Promise<cc.JsonAsset>{
        return this.loadAssetsAsync(path, cc.JsonAsset);
    }

    async loadAssetsAsync(path: string, type: typeof cc.Asset): Promise<any> {
        return new Promise((resolve: Function, reject: Function) => {
            let _self = this;
            if(_self._assetsList[path]){
                resolve(_self._assetsList[path]);
            }else{
                cc.loader.loadRes(path, type, function (err, res) {
                    if(err){
                        reject();
                        console.log(`***** 找不到资源 path: ${path} *****`);
                        return;
                    }
                    _self._assetsList[path] = res;
                    resolve(res);
                });
            }
        });
    }

    releaseRes(resPath: string){
        cc.loader.releaseRes(resPath);
        this._assetsList[resPath] = null;
    }
    
    onDestroy(){
        for(let path in this._assetsList){
            this.releaseRes(path);
        }
        this._assetsList = {};
    }
}
