const {ccclass, property} = cc._decorator;

@ccclass
export default class TouchEvent extends cc.Component {
    
    click: boolean = true;

    onLoad(){
        this.node.on(cc.Node.EventType.TOUCH_END, () => {
            
        }, this);
    }
}
