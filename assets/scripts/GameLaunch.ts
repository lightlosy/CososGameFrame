import ModuleManager from "./manager/ModuleManager";
import UIManager from "./manager/UIManager";
import LoadManager from "./manager/LoadManager";
import ConfigManager from "./manager/ConfigManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameLaunch extends cc.Component {
    private _showLog: boolean = true;
    private _managerList = [];
    onLoad(){
        /** 设置打印功能 */
        this.showLog();

        /** 游戏配置管理 */
        this._managerList.push(ConfigManager.getInstance());
        
        /** 资源加载管理 */
        this._managerList.push(LoadManager.getInstance());

        /** 游戏模块管理 */
        this._managerList.push(ModuleManager.getInstance());

        /** 游戏UI管理 */
        this._managerList.push(UIManager.getInstance());
    }

    onDestroy(){
        for(let i = 0; i < this._managerList.length; ++i){
            this._managerList[i].onDestroy();
        }
        this._managerList = [];
    }

    showLog(){
        if(!this._showLog){
            console.log = () => {};
            console.error = () => {};
        }
    }
}
