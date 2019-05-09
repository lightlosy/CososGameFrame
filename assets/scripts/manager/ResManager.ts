import BaseManager from "./base/BaseManager";
import AssetsManager from "./AssetsManager";

export default class ResManager extends BaseManager {
    //------------------------------------------------------------
    /** 获取预制体, 并生成实例 */
    async getPrefab(path: string): Promise<cc.Node> {
        return this._getPrefab(path);
    }

    /** 获取音频 */
    async getAudio(path: string): Promise<cc.AudioClip> {
        return this._getAudio(path);
    }

    /** 获取resources/textures/draw/目录下的资源 */
    async getDraw(name: string): Promise<cc.SpriteFrame> {
        let path = "textures/draw/";
        let atlasName = "0-draw"; //没有图集则为空
        return this._getRes(path, name, atlasName);
    }

    /** 获取配置 */
    async getMonsterConfig(name: string): Promise<cc.JsonAsset> {
        let path = "config/auto/";
        return this._getConfig(path + name);
    }

    //------------------------------------------------------------
    private _assetMgr: AssetsManager = AssetsManager.instance;

    /** 单例 */
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

    /** 获取图片散图资源，如果获取失败，则从图集里获取 */
    private async _getRes(path: string, name: string, atlasName?: string): Promise<cc.SpriteFrame> {
        return new Promise((resolve, reject) => {
            /** 获取散图 */
            this._assetMgr.loadSprite(path + name).then((spFrame: cc.SpriteFrame) => {
                resolve(spFrame);
            }).catch(() => {
                /** 没散图则从图集获取 */
                this._getSpriteFrameFromAtlas(path + atlasName, name).then((spFrame: cc.SpriteFrame) => {
                    resolve(spFrame);
                }).catch(() => {
                    cc.error("[ResManager.ts]----->asset is not exist:", path + name, "--->atlas are not:", atlasName);
                    this._assetMgr.releaseRes(path + atlasName);
                    reject();
                });
            });
        });   
    }

    private async _getSpriteFrameFromAtlas(path: string, name: string): Promise<cc.SpriteFrame> {
        return new Promise((resolve, reject) => {
            this._assetMgr.loadSpriteAtlas(path).then((res: cc.SpriteAtlas) => {
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

    /** 获取预制体 */
    private async _getPrefab(path: string): Promise<cc.Node> {
        return new Promise((resolve, reject) => {
            this._assetMgr.loadPrefab(path).then((res) => {
                if(res){
                    resolve(cc.instantiate(res));
                }else{
                    reject();
                }
            }).catch(() => {
                reject();
            });
        });
    }

    private async _getConfig(path: string): Promise<cc.JsonAsset> {
        return new Promise((resolve, reject) => {
            this._assetMgr.loadConfig(path).then((res) => {
                if(res){
                    resolve(res.json);
                }else{
                    reject();
                }
            }).catch(() => {
                reject();
            });
        });
    }

    private async _getAudio(path: string): Promise<cc.AudioClip> {
        return new Promise((resolve, reject) => {
            this._assetMgr.loadAudioClip(path).then((audio: cc.AudioClip) => {
                if(audio){
                    resolve(audio);
                }else{
                    reject();
                }
            }).catch(() => {
                reject();
            });
        });
    }

    onDestroy(){

    }
}
