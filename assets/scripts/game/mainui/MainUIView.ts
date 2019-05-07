import { MVCS } from "../../core/mvc/mvcs";
import ResManager from "../../manager/ResManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MainUIView extends MVCS.View {
    @property(cc.Sprite)
    img: cc.Sprite = null;

    init(data?: any){

    }
    onLoad(){
        
    }

    start(){
        ResManager.instance.getDraw("btn_lq").then((spFrame) => {
            this.img.spriteFrame = spFrame;
        });
    }
}
