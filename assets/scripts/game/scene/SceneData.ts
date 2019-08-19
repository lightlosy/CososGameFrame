import { MVCS } from "../../core/mvc/mvcs";
import SceneVO from "./SceneVO";

export default class SceneData extends MVCS.Data {
    private _vo: SceneVO = new SceneVO();
    getLevel(){
        return this._vo.level;
    }

    setLevel(value: number){
        this._vo.level = value;
    }

    getObjects(){
        return this._vo.objects;
    }

    setObjects(objs){
        this._vo.objects = objs;
    }
}
