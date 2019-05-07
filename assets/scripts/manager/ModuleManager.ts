import MainUICtrl from "../game/mainui/MainUICtrl";
import BaseManager from "./base/BaseManager";

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
        this.registerModule(new MainUICtrl());
    }

    registerModule(inst){
        this.moduleTable.push(inst);
        // cc.log(this.moduleTable)
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
