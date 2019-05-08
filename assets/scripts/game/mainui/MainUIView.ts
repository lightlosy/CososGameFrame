import { MVCS } from "../../core/mvc/mvcs";
import ResManager from "../../manager/ResManager";
import SoundManager from "../../manager/SoundManager";
import { ResPath } from "../../respath/ResPath";

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
        ResManager.instance.getDraw("1").then((spFrame) => {
            this.img.spriteFrame = spFrame;
        });
    }

    onClick(){
        SoundManager.instance.play(ResPath.audioPath.btnClick);
    }
}
