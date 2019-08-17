import BaseManager from "../base/BaseManager";
import Manager from "../Manager";

export default class SceneManager extends BaseManager {
    private _sceneMap = {};
    private _root: cc.Node = new cc.Node(`sceneRoot`);
    constructor(){
        super();
        this._root.parent = cc.director.getScene().children[0];
        this._root.zIndex = 1;
    }

    enterGameScene(scenePrefabPath: string): Promise<any>{
        return new Promise((resolve, reject) => {
            Manager.Res.getPrefab(scenePrefabPath).then((sceneNode: cc.Node) => {
                sceneNode.parent = this._root;
                this._sceneMap[scenePrefabPath] = sceneNode;
                resolve();
            });
        });
    }

    onDestroy(){
        this._sceneMap = {};
    }
}
