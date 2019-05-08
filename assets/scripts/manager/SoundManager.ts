import BaseManager from "./base/BaseManager";
import ResManager from "./ResManager";

export default class SoundManager extends BaseManager {
    private static _instance: SoundManager = null;
    static getInstance(){
        if(!this._instance){
            this._instance = new SoundManager();
        }
        return this._instance;
    }
    static get instance(){
        return this.getInstance();
    }

    private _current: number = 0;
    private _loadList: Object = {};

    play(path: string, loop: boolean = false, volume: number = 1){
        ResManager.getInstance().getAudio(path).then((audio: cc.AudioClip) => {
            this._current = cc.audioEngine.play(audio, loop, volume);
            this._loadList[path] = audio;
        });
    }

    onDestroy(){

    }
}
