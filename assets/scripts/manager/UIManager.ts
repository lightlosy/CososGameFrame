import BaseManager from "./base/BaseManager";
import { MVCS } from "../core/mvc/mvcs";
import AssetsManager from "./AssetsManager";
import ResManager from "./ResManager";

let w = 960;
let h = 640;

class viewElement {
    /** 资源路径 */
    path: string;
    /** 层级 */
    zIndex: number;
    /** 打开效果 */
    openEffect: number;
    /** 实例 */
    instance: MVCS.View
}

export default class UIManager extends BaseManager {
    private static _instance: UIManager = null;
    static getInstance(){
        if(!this._instance){
            this._instance = new UIManager();
        }
        return this._instance;
    }

    private _views: {[key: string]: viewElement} = {};
    private _root: cc.Node = new cc.Node("uiRoot");

    constructor(){
        super();
        this._root.parent = cc.director.getScene().children[0];
        this._root.width = w;
        this._root.height = h;
        this._root.x = 0;
        this._root.y = 0;
    }

    open(resPath: string, zIndex: number, openEffect: number){
        let view = this._views[resPath];
        if(!view){
            view = new viewElement();
        }
        if(!view.instance){
            this._createView(resPath).then((viewObj: cc.Node) => {
                let names = resPath.split("/");
                viewObj.zIndex = zIndex;
                viewObj.parent = this._root;
                view.instance = viewObj.getComponent(names[names.length - 1]);
                this._views[resPath] = view;
            });
        }else{
            view.instance.node.active = true;
        }
    }

    getView(resPath: string){
        let view = this._views[resPath];
        if(!view){
            view = new viewElement();
            this._views[resPath] = view;
        }
        return view.instance;
    }

    close(resPath: string, isDelete: boolean = false){
        let view = this._views[resPath];
        if(view && view.instance){
            if(isDelete){
                view.instance.node.destroy();
                this._views[resPath] = null;
            }else{
                view.instance.node.active = false;
            }
        }
    }

    onDestroy(){
        this._views = {};
        UIManager._instance = null;
    }

    private async _createView(resPath: string): Promise<any> {
        return ResManager.instance.getPrefab(resPath);
    }
}
