import BaseManager from "./base/BaseManager";

export default class AssetsManager extends BaseManager {
    private static _instance: AssetsManager = null;
    static getInstance(){
        if(!this._instance){
            this._instance = new AssetsManager();
        }
        return this._instance;
    }
    static get instance(){
        return this.getInstance();
    }

    private _resList: any = {};

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
            if(_self._resList[path]){
                resolve(_self._resList[path]);
            }else{
                cc.loader.loadRes(path, type, function (err, res) {
                    if(err){
                        reject();
                        return;
                    }
                    _self._resList[path] = res;
                    resolve(res);
                });
            }
        });
    }

    releaseRes(resPath: string){
        cc.loader.releaseRes(resPath);
        this._resList[resPath] = null;
    }
    
    onDestroy(){
        AssetsManager._instance = null;
        for(let path in this._resList){
            this.releaseRes(path);
        }
        this._resList = {};
    }
}
