export default class SceneVO {
    /** 难度 */
    public level: number = 1;
    /** 当前关卡所有物体坐标 */
    public objects: Array<{id:number, pos: {x: number, y: number}}> = [];
}
