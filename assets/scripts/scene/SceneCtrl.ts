import { MVCS } from "../core/mvc/mvcs";
import UIManager from "../manager/UIManager";
import { ResPath } from "../respath/ResPath";
import { CommonConst } from "../game/common/CommonConst";
import SceneData from "./SceneData";
import ResManager from "../manager/ResManager";
import SceneView from "./SceneView";

export default class SceneCtrl extends MVCS.Ctrl {
    private static _instance: SceneCtrl = null;
    private _data: SceneData = new SceneData();
    constructor(){
        super();
        SceneCtrl._instance = this;
        UIManager.getInstance().open(ResPath.uiPath.UI_Scene, CommonConst.Layer.Scene, CommonConst.ShowEffect.None); 
    }    
    public static getInstance(){
        if(this._instance === null){
            this._instance = new SceneCtrl();
        }
        return this._instance;
    }

    initRole(){

    }

    initMonster(){
        this.createMonster();
    }

    createMonster(){
        UIManager.getInstance().getView<SceneView>(ResPath.uiPath.UI_Scene).then((view) => {
            view.op();
        });
    }
}
