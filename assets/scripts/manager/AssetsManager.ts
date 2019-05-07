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

    private _resList: any = {}

    /** ------------加载---------------- */
    /** 加载预制体 */
    async loadPrefab(path: string): Promise<any> {
        return this.loadAssetsAsync(path, cc.Prefab);
    }

    async loadSprite(path: string): Promise<any> {
        return this.loadAssetsAsync(path, cc.SpriteFrame);
    }

    async loadSpriteAtlas(path: string): Promise<any> {
        return this.loadAssetsAsync(path, cc.SpriteAtlas);
    }

    async loadAssetsAsync(resPath: string, type: typeof cc.Asset): Promise<any> {
        return new Promise((resolve: Function, reject: Function) => {
            let _self = this;
            if(_self._resList[resPath]){
                resolve(_self._resList[resPath]);
            }else{
                cc.loader.loadRes(resPath, type, function (err, res) {
                    if(err){
                        reject();
                        return;
                    }
                    resolve(res);
                    _self._resList[resPath] = res;
                });
            }
        });
    }

    /** ------------获取---------------- */
    async getSpriteFrameFromAtlas(path: string, name: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.loadSpriteAtlas(path).then((res: cc.SpriteAtlas) => {
                let spFrame = res.getSpriteFrame(name);
                if(spFrame){
                    resolve(spFrame);
                }else{
                    reject();
                }
            }).catch(() => {
                reject();
            });
        });
    }

    async getSprite(path: string): Promise<any> {
        return this.loadSprite(path);
    }

    releaseRes(resPath: string){
        cc.loader.releaseRes(resPath);
    }
    
    onDestroy(){
        AssetsManager._instance = null;
        for(let path in this._resList){
            this.releaseRes(path);
        }
        this._resList = {};
    }
}
