import { MVCS } from "../../core/mvc/mvcs";
import BaseManager from "../base/BaseManager";
import Manager from "../Manager";

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

    open(resPath: string, zIndex: number, openEffect: number): Promise<MVCS.View>{
        return new Promise((resolve) => {
            let view = this._views[resPath];
            if(!view){
                view = new viewElement();
            }
            let openSuc = (viewNode: cc.Node) => {
                viewNode.zIndex = zIndex;
                viewNode.parent = this._root;
            }
            if(!view.instance){
                this._createView(resPath).then((viewObj: MVCS.View) => {
                    openSuc(viewObj.node);
                    resolve(viewObj);
                });
            }else{
                view.instance.node.active = true;
                openSuc(view.instance.node);
                resolve(view.instance);
            }
        });
    }

    getView<T>(resPath: string): Promise<T>{
        return new Promise((resolve) => {
            let view: any = this._views[resPath];
            if(!view){
                this._createView(resPath).then((view: any) => {
                    resolve(view.instance);
                });
            }else{
                resolve(view.instance);
            }
        });
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
    }

    private async _createView(resPath: string): Promise<MVCS.View> {
        return new Promise((resolve) => {
            let view = this._views[resPath];
            if(!view){
                view = new viewElement();
                Manager.Res.getPrefab(resPath).then((viewObj: cc.Node) => {
                    let names = resPath.split("/");
                    viewObj.parent = this._root;
                    view.instance = viewObj.getComponent(names[names.length - 1]);
                    this._views[resPath] = view;
                    resolve(view.instance);
                });
            }else{
                resolve(view.instance);
            }
        });
    }
}
