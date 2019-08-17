import { MVCS } from "../../core/mvc/mvcs";
import MainUIData from "./MainUIData";
import MainUIView from "./MainUIView";
import Manager from "../../manager/Manager";
import { ResPath } from "../../respath/ResPath";
import { CommonConst } from "../common/CommonConst";


export default class MainUICtrl extends MVCS.Ctrl{
    private static _instance: MainUICtrl = null;
    private _data: MainUIData = new MainUIData();
    private _view: MainUIView = null;
    constructor(){
        super();
        MainUICtrl._instance = this;
        this.initMainUI();
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

    initMainUI(){
        Manager.UI.open(ResPath.uiPath.UI_MainUI, CommonConst.eUILayer.MainUI).then((view: MVCS.View) => {
            this._view = view as MainUIView;
        });
    }
}
