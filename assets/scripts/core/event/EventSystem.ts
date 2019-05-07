export default class EventSystem extends cc.Component {
    on(name: any, callBack: any, target: any){
        cc.systemEvent.on(name, callBack, target);
    }
    
    emit(name, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any){
        cc.systemEvent.emit(name, arg1, arg2, arg3, arg4, arg5);
    }

    off(name: any, callBack: any, target: any){
        cc.systemEvent.off(name, callBack, target);
    }

    offTarget(target: any){
        cc.systemEvent.targetOff(target);
    }
}
