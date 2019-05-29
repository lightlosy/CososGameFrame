import { MVCS } from "../../core/mvc/mvcs";
import { ResPath } from "../../respath/ResPath";
import Manager from "../../manager/Manager";

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
        Manager.Res.getDraw("1").then((spFrame) => {
            this.img.spriteFrame = spFrame;
        });
    }

    onClick(){
        Manager.Sound.play(ResPath.audioPath.btnClick);
    }
}
