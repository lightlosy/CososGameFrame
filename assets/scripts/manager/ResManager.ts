import BaseManager from "./base/BaseManager";
import AssetsManager from "./AssetsManager";

export default class ResManager extends BaseManager {
    //------------------------------------------------------------

    /** 获取resources/textures/draw/目录下的资源 */
    async getDraw(name: string): Promise<any> {
        let path = "textures/draw/";
        let atlasName = "0-draw"; //没有图集则为空
        return this._getRes(path, name, atlasName);
    }

    //------------------------------------------------------------
    private static _instance: ResManager = null;
    static getInstance(){
        if(!this._instance){
            this._instance = new ResManager();
        }
        return this._instance;
    }
    static get instance(){
        return this.getInstance();
    }

    private _assetMgr: AssetsManager = AssetsManager.instance;


    /** 获取图片散图资源，如果获取失败，则从图集里获取 */
    private async _getRes(path: string, name: string, atlasName?: string): Promise<any> {
        return new Promise((resolve, reject) => {
            /** 获取散图 */
            this._assetMgr.getSprite(path + name).then((spFrame: cc.SpriteFrame) => {
                resolve(spFrame);
            }).catch(() => {
                /** 没散图则从图集获取 */
                this._assetMgr.getSpriteFrameFromAtlas(path + atlasName, name).then((spFrame: cc.SpriteFrame) => {
                    resolve(spFrame);
                }).catch(() => {
                    this._assetMgr.releaseRes(path + atlasName);
                    cc.error("----->asset is not exist:", path + name, "--->atlas are not:", atlasName);
                });
            });
        });   
    }

    onDestroy(){

    }
}
