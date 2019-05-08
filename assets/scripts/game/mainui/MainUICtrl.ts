import { MVCS } from "../../core/mvc/mvcs";
import MainUIData from "./MainUIData";
import MainUIView from "./MainUIView";
import UIManager from "../../manager/UIManager";
import { ResPath } from "../../respath/ResPath";
import ResManager from "../../manager/ResManager";

export default class MainUICtrl extends MVCS.Ctrl{
    private static _instance: MainUICtrl = null;
    private _data: MainUIData = new MainUIData();
    constructor(){
        super();
        MainUICtrl._instance = this;
        UIManager.getInstance().open(ResPath.uiPath.UI_MainUI, 1, 1); 
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

    getView(){
        return UIManager.getInstance().getView(ResPath.uiPath.UI_MainUI) as MainUIView;
    }

    getData(){
        return this._data;
    }
}
