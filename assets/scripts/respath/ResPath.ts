import { UIPath } from "./uipath/UIPath";
import { AudioPath } from "./audiopath/AudioPath";
import { EntityPath } from "./entitypath/EntityPath";
import { ScenePath } from "./scenepath/ScenePath";
import { ConfigPathList } from "./configpath/ConfigPath";


/** 资源路径读取(root: resources) */
export namespace ResPath {
    export const uiPath = UIPath;
    export const entityPath = EntityPath;
    export const configPathList = ConfigPathList;
    export const audioPath = AudioPath;
    export const scenePath = ScenePath;
}
