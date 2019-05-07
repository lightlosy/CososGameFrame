export default class ConfigManager {
    /** 配置列表 */
    private static _configList = {};

    /** 获取auto路径下的配置 */
    static getAutoConfig(jsonName: string){
        return this.getConfig("config/auto/" + jsonName);
    }
    
    /** 获取配置 */
    static getConfig(path: string): Promise<any>{
        return new Promise((suc: Function, fai: Function) => {
            let config = this._configList[path];
            if(!config){
                cc.loader.loadRes(path, (err, jsonAsset) => {
                    if(err){
                        cc.error(err);
                        fai && fai(err);
                        return;
                    }
                    config = {json: jsonAsset.json, time: Date.now()}
                    this._configList[path] = config;
                    suc && suc(config);
                })
            }else{
                suc && suc(config);
            }}
        );
    }
}
