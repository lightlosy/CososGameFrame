import UIManager from "./manager/UIManager";
import { ResPath } from "./respath/ResPath";
import MainUICtrl from "./game/mainui/MainUICtrl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TouchEvent extends cc.Component {
    click: boolean = true;

    onLoad(){
        this.node.on(cc.Node.EventType.TOUCH_END, () => {
        cc.log(MainUICtrl.getInstance().getView());

            this.click = !this.click;
            if(this.click){
                UIManager.getInstance().open(ResPath.UIPath.UI_MainUI, 1, 1);
            }
            else{
                UIManager.getInstance().close(ResPath.UIPath.UI_MainUI);
            }
        }, this);
    }
}
