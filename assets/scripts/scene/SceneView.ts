import { MVCS } from "../core/mvc/mvcs";
import SceneCtrl from "./SceneCtrl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SceneView extends MVCS.View {
    private _ctrl: SceneCtrl = SceneCtrl.getInstance();
    start(){
        this._ctrl.createMonster();
    }
    op(){
        cc.log("000")
    }
}
