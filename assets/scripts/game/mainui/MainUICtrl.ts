import { MVCS } from "../../core/mvc/mvcs";
import MainUIData from "./MainUIData";
import MainUIView from "./MainUIView";
import UIManager from "../../manager/UIManager";
import { ResPath } from "../../respath/ResPath";
import ResManager from "../../manager/ResManager";
import { CommonConst } from "../common/CommonConst";

export default class MainUICtrl extends MVCS.Ctrl{
    private static _instance: MainUICtrl = null;
    private _data: MainUIData = new MainUIData();
    constructor(){
        super();
        MainUICtrl._instance = this;
        UIManager.getInstance().open(ResPath.uiPath.UI_MainUI, CommonConst.Layer.MainUI, CommonConst.ShowEffect.None); 
        ResManager.instance.getMonsterConfig("monster1").then((res) => {
            cc.log(res);
        });
    }    
    public static getInstance(){
        if(this._instance === null){
            this._instance = new MainUICtrl();
        }
        return this._instance;
    }

    getData(){
        return this._data;
    }
}
