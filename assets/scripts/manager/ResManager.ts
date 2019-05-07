import BaseManager from "./base/BaseManager";
import AssetsManager from "./AssetsManager";

export default class ResManager extends BaseManager {
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

    async getDraw(name: string): Promise<any> {
        let path = "textures/draw/";
        let atlasName = "0-draw";
        return this._getRes(name, path, atlasName);
    }

    /** 获取图片散图资源，如果获取失败，则从图集里获取 */
    private async _getRes(name: string, path: string, atlasName?: string): Promise<any> {
        return new Promise((resolve, reject) => {
            /** 获取散图 */
            this._assetMgr.getSprite(path + name).then((spFrame: cc.SpriteFrame) => {
                resolve(spFrame);
            }).catch(() => {
                /** 没散图则从图集获取 */
                this._assetMgr.getSpriteFrameFromAtlas(path + atlasName, name).then((spFrame: cc.SpriteFrame) => {
                    resolve(spFrame);
                }).catch(() => {
                    cc.error("不存在资源----->", path + name);
                });
            });
        });   
    }

    onDestroy(){

    }
}
