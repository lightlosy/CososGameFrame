import ModuleManager from "./modulemanager/ModuleManager";
import SoundManager from "./soundmanager/SoundManager";
import UIManager from "./uimanager/UIManager";
import ResManager from "./resmanager/ResManager";
import AssetsManager from "./resmanager/AssetsManager";
import SceneManager from "./scenemanager/SceneManager";
import BaseManager from "./base/BaseManager";
import ConfigManager from "./configmanager/ConfigManager";

export default class Manager {
    private _manager: Array<BaseManager> = [];
    constructor(){
        this._manager.push(Manager.Module);
        this._manager.push(Manager.UI);
        this._manager.push(Manager.Assets);
        this._manager.push(Manager.Sound);
        this._manager.push(Manager.Res);
        this._manager.push(Manager.Scene);
        this._manager.push(Manager.Config);
    }
    /** 资源加载管理 */
    private static _assetsManager: AssetsManager = null;
    public static get Assets(){
        if(!this._assetsManager){
            console.log("** 实例化AssetsManager **");
            this._assetsManager = new AssetsManager();
        }
        return this._assetsManager;
    }

    /** 玩法模块加载管理 */
    private static _moduleManager: ModuleManager = null;
    public static get Module(){
        if(!this._moduleManager){
            console.log("** 实例化ModuleManager **");
            this._moduleManager = new ModuleManager();
        }
        return this._moduleManager;
    }

    /** 音频加载管理 */
    private static _soundManager: SoundManager = null;
    public static get Sound(){
        if(!this._soundManager){
            console.log("** 实例化SoundManager **");

            this._soundManager = new SoundManager();
        }
        return this._soundManager;
    }

    /** UI管理 */
    private static _uiManager: UIManager = null;
    public static get UI(){
        if(!this._uiManager){
            console.log("** 实例化UIManager **");
            this._uiManager = new UIManager();
        }
        return this._uiManager;
    }

    /** 资源获取管理 */
    private static _resManager: ResManager = null;
    public static get Res(){
        if(!this._resManager){
            console.log("** 实例化ResManager **");
            this._resManager = new ResManager();
        }
        return this._resManager; 
    }

    /** 场景管理 */
    public static _sceneManager: SceneManager = null;
    public static get Scene(){
        if(!this._sceneManager){
            console.log("** 实例化SceneManager **");
            this._sceneManager = new SceneManager();
        }
        return this._sceneManager; 
    }

    /** 配置管理 */
    public static _configManager: ConfigManager = null;
    public static get Config(){
        if(!this._configManager){
            console.log("** 实例化ConfigManager **");
            this._configManager = new ConfigManager();
        }
        return this._configManager; 
    }
}
