import ModuleManager from "./manager/ModuleManager";
import UIManager from "./manager/UIManager";
import ResManager from "./manager/ResManager";
import SoundManager from "./manager/SoundManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameLaunch extends cc.Component {
    private _showLog: boolean = true;
    private _managerList = [];
    onLoad(){
        /** 设置打印功能 */
        this.showLog();

        /** 资源获取管理 */
        this._managerList.push(ResManager.getInstance());

        /** 游戏模块管理 */
        this._managerList.push(ModuleManager.getInstance());

        /** 游戏UI管理 */
        this._managerList.push(UIManager.getInstance());

        /** 音频管理 */
        this._managerList.push(SoundManager.getInstance());
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
