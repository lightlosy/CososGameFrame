import { MVCS } from "../../core/mvc/mvcs";
import MainUIData from "./MainUIData";
import MainUIView from "./MainUIView";
import UIManager from "../../manager/UIManager";
import { ResPath } from "../../respath/ResPath";

export default class MainUICtrl extends MVCS.Ctrl{
    private static _instance: MainUICtrl = null;
    private _data: MainUIData = new MainUIData();
    constructor(){
        super();
        MainUICtrl._instance = this;
        UIManager.getInstance().open(ResPath.UIPath.UI_MainUI, 1, 1); 
    }    
    public static getInstance(){
        if(this._instance === null){
            this._instance = new MainUICtrl();
        }
        return this._instance;
    }

    getView(){
        return UIManager.getInstance().getView(ResPath.UIPath.UI_MainUI) as MainUIView;
    }

    getData(){
        return this._data;
    }
}
