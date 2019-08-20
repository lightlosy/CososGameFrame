import BaseManager from "../base/BaseManager";
import { ResPath } from "../../respath/ResPath";
import Manager from "../Manager";

export default class ConfigManager extends BaseManager {
    private _config = {};
    constructor(){
        super();
        this.loadConfig();
    }

    loadConfig(){
        let list = ResPath.configPathList;
        list.forEach((item: configItem) => {
            Manager.Res.getConfig(item.path).then((resJSON: cc.JsonAsset) => {
                this._config[item.name] = resJSON;
            });
        });
    }

    getSceneConfig(){
        // return this._config[]
    }

    onDestroy(){
        this._config = {};
    }
}


interface configItem {
    name: string,
    path: string,
    preload: boolean
}