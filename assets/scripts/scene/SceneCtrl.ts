import { MVCS } from "../core/mvc/mvcs";
import UIManager from "../manager/UIManager";
import { ResPath } from "../respath/ResPath";
import { CommonConst } from "../game/common/CommonConst";
import SceneData from "./SceneData";
import ResManager from "../manager/ResManager";
import SceneView from "./SceneView";

import CryptoJs = require("../CryptoJS 2");
declare let JSEncrypt;
export default class SceneCtrl extends MVCS.Ctrl {
    private static _instance: SceneCtrl = null;
    private _data: SceneData = new SceneData();
    constructor(){
        super();
        SceneCtrl._instance = this;
        UIManager.getInstance().open(ResPath.uiPath.UI_Scene, CommonConst.Layer.Scene, CommonConst.ShowEffect.None); 
    }    
    public static getInstance(){
        if(this._instance === null){
            this._instance = new SceneCtrl();
        }
        return this._instance;
    }

    initRole(){

    }

    initMonster(){
        this.createMonster();
    }

    createMonster(){
        cc.log("Encrypt" ,new JSEncrypt());
        var encrypt = new JSEncrypt();
        let pubKey = `MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDJK5fw7EXnCt3L+z2Azx1h9MXi
        KqwsnU3c73EcJ8eFU1sLeBHMzQXz0eR85TxwyDASbPDVhrLogNWQ32kHFMlQwtLe
        tK51LeVxusfvFk87mU5YzSZDd1TEGiQtxIhmbZ3rjDc9e3qVhBswx9PdTmXjrFRd
        aD0jw3rqBasehCVZbQIDAQAB`;
        let priKey = `MIICXAIBAAKBgQDJK5fw7EXnCt3L+z2Azx1h9MXiKqwsnU3c73EcJ8eFU1sLeBHM
        zQXz0eR85TxwyDASbPDVhrLogNWQ32kHFMlQwtLetK51LeVxusfvFk87mU5YzSZD
        d1TEGiQtxIhmbZ3rjDc9e3qVhBswx9PdTmXjrFRdaD0jw3rqBasehCVZbQIDAQAB
        AoGBALn5DQvywWSoDQdICkGMNxOZn15IKMdN3O+Eg8KNm8vLlX1y0LHOT9Rpk5tK
        qKdyyc4e3D3pundqswStJIEhXEEjYvSXtjGIlov4+F18EcFfjqkvZBKwUlsgonE7
        +WhvvloudXD6o8xL5u5fW0tBp/9ZDLrIOCcoLvpQfIhP/2uZAkEA49fBV95SxrGa
        PcZQvqUroPfSAR+e41NXRpN+3AGAlZKFVbymKxaLjs4FNIWoZAr4M4aE5pT0egwS
        XORFjgwZDwJBAOIIAJOJfSlRJZE4HaS2o7fgCxGSGPx4S903wYyLtoo569VY1R9w
        wwgs4xMmi2Waz+JSBn3gIbJQtGv2E1zPjcMCQEh8ccR0tL0F795LY5Djl3fEoAk/
        eBs2foOzlR6FU9VCIi1esTbwG0I5hSpqg2Igo0oxN8LsDMNvZ8Ap138Tlj0CQEJs
        LZctsS1CHnMVdYig722qljYco+EVjN2+c89Ug1kNemNgzoiFv5qYbkaDbjV2kB6n
        EidNhTl8g/iyALCmgbcCQEhKImBzKSWNeI3B1UW+nMFWb0PRtnhhy1kG0szbceom
        KhHC4AMGXdKGctg/n7fkzrpRjU10MeeYb55qSJ0a4vI=`;

        encrypt.setPublicKey(pubKey); // pubkey是公钥内容
        let testText = JSON.stringify({name: "1"});
        var encrypted = encrypt.encrypt(testText);
        cc.log("jiami",encrypted)
        encrypt.setPrivateKey(priKey);
        let decr = encrypt.decrypt(encrypted);
        cc.log("jie", decr)

        cc.log("------CryptoJs-------" ,CryptoJs.AES)

        const key = CryptoJs.enc.Utf8.parse("1234123412ABCDEF");
        const iv = CryptoJs.enc.Utf8.parse("ABCDEF1234123412");

        let enc = (data) => {
            let srcs = CryptoJs.enc.Utf8.parse(data);
            let encrypted = CryptoJs.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJs.mode.CBC, padding: CryptoJs.pad.Pkcs7 });
            return encrypted.ciphertext.toString().toUpperCase();
        }

        let dec = (data) => {
            let enHexStr = CryptoJs.enc.Hex.parse(data);
            let srcs = CryptoJs.enc.Base64.stringify(enHexStr);
            let dec = CryptoJs.AES.decrypt(srcs, key, {iv: iv, mode: CryptoJs.mode.CBC, padding: CryptoJs.pad.Pkcs7 });
            let decryptedStr = dec.toString(CryptoJs.enc.Utf8);
            return decryptedStr.toString();
        }

        //en
        let enText = enc(testText);

        //de
        let deText = dec(enText);

        cc.log("enText", enText)
        cc.log("deText", deText)


        // CryptoJs.algo
        // UIManager.getInstance().getView<SceneView>(ResPath.uiPath.UI_Scene).then((view) => {
        //     view.op();
        // });
    }
}
