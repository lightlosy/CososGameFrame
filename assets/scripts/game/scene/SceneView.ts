import SceneCtrl from "./SceneCtrl";
import { MVCS } from "../../core/mvc/mvcs";
import Manager from "../../manager/Manager";
import { ResPath } from "../../respath/ResPath";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SceneView extends MVCS.View {
    @property(cc.Light)
    dirLight: cc.Light = null;

    @property(cc.Camera)
    camera: cc.Camera = null;

    @property(cc.Node)
    objectLayer: cc.Node = null;

    private _ctrl: SceneCtrl = null;

    start(){
        this._ctrl = SceneCtrl.getInstance();
    }

    initView(){
        let objects = this._ctrl.getData().getObjects();
        cc.log("***** sceneview scfg", objects);
        objects.forEach(objInfo => {
            Manager.Res.getPrefab(ResPath.entityPath.Entity_Disc).then((objInst: cc.Node) => {
                objInst.parent = this.objectLayer;
                objInst.x = objInfo.pos.x;
                objInst.y = objInfo.pos.y;
            });
        });

       
    }

    update(dt){
    }
}
