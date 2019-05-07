import BaseManager from "./base/BaseManager";

export default class LoadManager extends BaseManager {
    private static _instance: LoadManager = null;
    static getInstance(){
        if(!this._instance){
            this._instance = new LoadManager();
        }
        return this._instance;
    }

    loadPrefab(prefabPath: string, callBack: Function) {
        cc.loader.loadRes(prefabPath, function (err, prefab) {
            if(err){
                console.error("[load]加载预制体失败---->", err, prefabPath);
                return;
            }
            callBack && callBack(cc.instantiate(prefab));
        });
    }
    
    onDestroy(){
        LoadManager._instance = null;
    }
}
