import UIManager from "./manager/UIManager";
import { ResPath } from "./respath/ResPath";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TouchEvent extends cc.Component {
    click: boolean = true;

    onLoad(){
        this.node.on(cc.Node.EventType.TOUCH_END, () => {
            this.click = !this.click;
            if(this.click){
                UIManager.getInstance().open(ResPath.UIPath.UI_MainUI, 1, 1);
                // cc.director.loadScene('1');
            }
            else{
                UIManager.getInstance().close(ResPath.UIPath.UI_MainUI);
                // cc.director.loadScene('Main');
            }
        }, this);
    }
}
