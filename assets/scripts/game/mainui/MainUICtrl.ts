import { MVCS } from "../../core/mvc/mvcs";
import MainUIData from "./MainUIData";
import MainUIView from "./MainUIView";
import { ResPath } from "../../respath/ResPath";
import { CommonConst } from "../common/CommonConst";
import Manager from "../../manager/Manager";

export default class MainUICtrl extends MVCS.Ctrl{
    private static _instance: MainUICtrl = null;
    private _data: MainUIData = new MainUIData();
    constructor(){
        super();
        MainUICtrl._instance = this;
        Manager.UI.open(ResPath.uiPath.UI_MainUI, CommonConst.Layer.MainUI, CommonConst.ShowEffect.None); 
        Manager.Res.getMonsterConfig("monster1").then((res) => {
            // cc.log(res); 
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
