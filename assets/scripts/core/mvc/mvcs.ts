import EventSystem from "../event/EventSystem";

abstract class BaseView extends EventSystem {}
abstract class BaseCtrl extends EventSystem {}
abstract class BaseData extends EventSystem {}

export namespace MVCS {
    export abstract class View extends BaseView {
        init(data?: any){

        }
        onLoad(){
            console.log("12313");
        }
    }
    
    export abstract class Ctrl extends BaseCtrl {
    
    }
    
    export abstract class Data extends BaseData {
    
    }
}