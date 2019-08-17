import Manager from "./manager/Manager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameLaunch extends cc.Component {
    private _showLog: boolean = true;
    private _managerList = [];
    onLoad(){
        /** 设置打印功能 */
        this.showLog();
        /** 管理类初始化 */
        this._managerList.push(new Manager());
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
