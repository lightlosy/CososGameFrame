import SceneCtrl from "./SceneCtrl";
import { MVCS } from "../../core/mvc/mvcs";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SceneView extends MVCS.View {
    @property(cc.Node)
    box: cc.Node = null;

    private _ctrl: SceneCtrl = null;

    start(){
        this._ctrl = SceneCtrl.getInstance();
        this._ctrl.createMonster();
    }

    update(dt){
        // this.box.setRotation(new cc.Quat(0,0,0, 1), 1,0,0);
        // this.box.rotationY += 1;
    }
}
