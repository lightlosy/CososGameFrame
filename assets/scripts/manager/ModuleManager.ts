import MainUICtrl from "../game/mainui/MainUICtrl";
import BaseManager from "./base/BaseManager";
import SceneCtrl from "../scene/SceneCtrl";

export default class ModuleManager extends BaseManager{
    private static _instance: ModuleManager = null;
    static getInstance(){
        if(!this._instance){
            this._instance = new ModuleManager();
        }
        return this._instance;
    }

    moduleTable = [];
    constructor(){
        super();
        this.moduleTable = this.initModule();
    }

    initModule(){
        return [
            SceneCtrl.getInstance(),
            MainUICtrl.getInstance(),
        ];
    }

    onDestroy(){
        for(let i in this.moduleTable){
            let m = this.moduleTable[i];
            m.offTarget(m);
        }
        this.moduleTable = [];
        ModuleManager._instance = null;
    }
}
