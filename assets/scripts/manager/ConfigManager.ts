import BaseManager from "./base/BaseManager";

export default class ConfigManager extends BaseManager {
    private static _instance: ConfigManager = null;
    static getInstance(){
        if(!this._instance){
            this._instance = new ConfigManager();
        }
        return this._instance;
    }

    static get instance () {
        return this.getInstance();
    }

    configList = {};

    getConfig(path: string): Promise<any>{
        return new Promise((suc: Function, fai: Function) => {
            let config = this.configList[path];
            if(!config){
                cc.loader.loadRes(path, (err, jsonAsset) => {
                    if(err){
                        cc.error(err);
                        fai && fai(err);
                        return;
                    }
                    config = {json: jsonAsset.json, time: Date.now()}
                    this.configList[path] = config;
                    suc && suc(config);
                })
            }else{
                suc && suc(config);
            }}
        );
    }

    getAutoConfig(name: string){
        return this.getConfig("config/auto/" + name);
    }

    onDestroy(){
        ConfigManager._instance = null;
    }
}
