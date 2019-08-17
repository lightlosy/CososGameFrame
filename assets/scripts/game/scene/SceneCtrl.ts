import { MVCS } from "../../core/mvc/mvcs";
import SceneData from "./SceneData";
import { ResPath } from "../../respath/ResPath";
import Manager from "../../manager/Manager";

declare let JSEncrypt;
export default class SceneCtrl extends MVCS.Ctrl {
    private static _instance: SceneCtrl = null;
    private _data: SceneData = new SceneData();
    aseKey = "1234123412ABCDEF";
    // iv = CryptoJs.enc.Utf8.parse("1234123412ABCDEF");
    constructor(){
        super();
        SceneCtrl._instance = this;
        this.initScene();
    }    
    public static getInstance(){
        if(this._instance === null){
            this._instance = new SceneCtrl();
        }
        return this._instance;
    }

    initScene(){
        Manager.Scene.enterGameScene(ResPath.scenePath.Scene_MainScene);
    }

    initMonster(){
        this.createMonster();
    }

    createMonster(){
        // cc.log("Encrypt" ,new JSEncrypt());
        // var encrypt = new JSEncrypt();
        // let pubKey = `MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC6IfrDS9yvkZh9j8TlI/1/PwhA
        // axH1KY8qB9WS218cF7nWLzHfAidDAY53ZGzlv3M3r8L6/0TpdEWqq+fNuw5tlhdD
        // zYKIcc97IcC/oQt9FUQ8aSPGYkps+3C1o+F/2dvOHq+/pqWZHMTtkLEfuI858NT0
        // X1UTSZEOlsk/nx7h+wIDAQAB`;
        // let priKey = `MIICXQIBAAKBgQC6IfrDS9yvkZh9j8TlI/1/PwhAaxH1KY8qB9WS218cF7nWLzHf
        // AidDAY53ZGzlv3M3r8L6/0TpdEWqq+fNuw5tlhdDzYKIcc97IcC/oQt9FUQ8aSPG
        // Ykps+3C1o+F/2dvOHq+/pqWZHMTtkLEfuI858NT0X1UTSZEOlsk/nx7h+wIDAQAB
        // AoGBALThoJd5eZUEoHQk6uri9s5ZquMvKdxd7sqhomN83Aio5efHJWfa59yt/oz4
        // Avuh+Y38ODdDKuzUGX+qXzIGvhUG+JZ2fptZvP9EVCz1eoRuPItHNb+Uv8CQ7a06
        // mE3NWnDznC9eGmse8yVGas7yyptqAaRuH5Et7pvzjrZdsoOBAkEA7rEfDhkFD6xQ
        // 8KIEW+PUELFNxzEMEYU/TnOvHrY/z+lsHvM/8ATNFmUwaQvFJDMGWC3R0se1Fa9L
        // 1goqAwcZ0wJBAMehMZT6HWF17qoUd+UjDdvDWqoMKyz7gIJCVKj4JsXm8Rq6NCr/
        // CySj9WQJNg8g4SjzvRhrBwDqDLRrb9smFjkCQFJlJAI60stxQVN/qh+KSuckPWQY
        // Y0EdDRhoyLfCU87SlfctIxIYpi8n6Qkp/ficAIGp93daZwFATN5rDcuTxO8CQFUD
        // Mz8zKDHp7AIoB0rgG7W7wq9p0TUtwXM3ViBC1RgwGfr80tyAkjk/TXAVcB0PLnOn
        // IJ72bRwZj+GBYzgbRxkCQQCMe0xUlKt93E4DEgvsh3WP8WYIEHhKkV/EtmNxSlGK
        // recR/eykucaW/jcy3l/t1vsxdosiLKBxWG6FttK8TNc1`;

        // encrypt.setPublicKey(pubKey);// pubkey是公钥内容
        // let testText = JSON.stringify({name: "1"});
        // // encrypt.sign(testText);
        // // var encrypted = encrypt.encrypt(testText);
        // // cc.log("jiami",encrypted)
        // // encrypt.setPrivateKey(priKey); 
        // // let decr = encrypt.decrypt(`pR7P0kaZLjUuuEmhGa76mxqrRncPVaM28/krhlJMGFZ/ImAd48QrUMUDTiuTifl64ed0PfWJXJWQqm5e5aG5SvWu39FpR6NR7+dHkMU7t1JB/mszafe26+eYVECCuSwL3btYeMn/RKWLaR/txJZeHFaGhLBbvrKM+nFgBrfZ+xY=`);
        // // cc.log("jie", decr)

        // cc.log("------CryptoJs-------" ,CryptoJs.AES)

        // // const key = CryptoJs.enc.Utf8.parse("1234123412ABCDEF");
        // // const iv = CryptoJs.enc.Utf8.parse("ABCDEF1234123412");

        // // let getAesKey = (account: string = "1234ABCD") => {
        // //     let tempKey = account + Date.now();
        // //     let enKey = enc(tempKey);
        // //     let pre16 = "";
        // //     let nex16 = "";
        // //     let rootKey = "";
        // //     for(let i = 0; i < 16; ++i){
        // //         pre16 += enKey[i];
        // //         nex16 += enKey[i + 16];
        // //     }
        // //     nex16 = base64.encode(nex16);
        // //     let t16 = "";
        // //     for(let i = 0; i < 16; ++i){
        // //         t16 += nex16[i];
        // //     }
        // //     nex16 = t16;
        // //     let date = new Date();
        // //     let day = date.getDate();
        // //     cc.log("day", day % 2);
        // //     rootKey = ((day % 2) == 0) ? pre16 + nex16 : nex16 + pre16;
        // //     return rootKey;
        // // }

        // // let tk = this.getAesKey();

        // // let enc = (data) => {
        // //     let srcs = CryptoJs.enc.Utf8.parse(data);
        // //     let encrypted = CryptoJs.AES.encrypt(srcs, k, { iv: k, mode: CryptoJs.mode.CBC, padding: CryptoJs.pad.Pkcs7 });
        // //     return encrypted.ciphertext.toString().toUpperCase();
        // // }

        // // let dec = (data) => {
        // //     let enHexStr = CryptoJs.enc.Hex.parse(data);
        // //     let srcs = CryptoJs.enc.Base64.stringify(enHexStr);
        // //     let dec = CryptoJs.AES.decrypt(srcs, k, {iv: k, mode: CryptoJs.mode.CBC, padding: CryptoJs.pad.Pkcs7 });
        // //     let decryptedStr = dec.toString(CryptoJs.enc.Utf8);
        // //     return decryptedStr.toString();
        // // }

        // //en
        // // let enText = this.enc(testText, CryptoJs.enc.Utf8.parse(tk));

        // // //de
        // // let deText = this.dec(enText, CryptoJs.enc.Utf8.parse(tk));

        // // cc.log("enText", enText)
        // // cc.log("deText", deText)
        // // cc.log("--------deText--------", tk, Date.now())


        // // // let enKey = encrypt.encrypt("1234123412ABCDEF");
        // // // encrypt.setPrivateKey(priKey); 

        // // // let deKey = encrypt.decrypt(enKey);
        // // // cc.log("enKey", enKey)
        // // // cc.log("deKey", deKey)
        // // // cc.log("----------------")

        // // cc.log(enText, deText);
        // // CryptoJs.algo
        // // UIManager.getInstance().getView<SceneView>(ResPath.uiPath.UI_Scene).then((view) => {
        // //     view.op();
        // // });

        // let ecText = this.encrypt(testText);
        // let keyStr = encrypt.decrypt("r/pA/0kjLW6x/P1Y1SSClaNPCjrWwLGtsG/MQ5WYOWppvEG1S62sHZmFIZia15eeyNdUORUIgY1kNtMmKw8XH0tWf21uevEMnU9z7RFijpu68ancq20kupCJqKjrERBVzBCeQmZdnGakaa+KBUjeIKWOofoR/0bWhAZ0TpHlp2g=")
        // this._key = CryptoJs.enc.Utf8.parse("1234ABCD15591953NjMyOTl1bmRlZmlu");     
        // this._iv = this._key;
        // let ent = this.encrypt(testText);
        // let deText = this.decrypt(ent);
        // let rsaTex = encrypt.encrypt(testText);
        // let rsakey = encrypt.encrypt(CryptoJs.enc.Utf8.stringify(this._key));
        // cc.log("=-=-=-=-",this._key, deText, ent)
    }

    enc(data, key){
        // let srcs = CryptoJs.enc.Utf8.parse(data);
        // let encrypted = CryptoJs.AES.encrypt(srcs, key, { iv: this.iv, mode: CryptoJs.mode.CBC, padding: CryptoJs.pad.Pkcs7 });
        // return encrypted.ciphertext.toString().toUpperCase();
    }
    dec = (data, key) => {
        // let enHexStr = CryptoJs.enc.Hex.parse(data);
        // let srcs = CryptoJs.enc.Base64.stringify(enHexStr);
        // let dec = CryptoJs.AES.decrypt(srcs, key, {iv: this.iv, mode: CryptoJs.mode.CBC, padding: CryptoJs.pad.Pkcs7 });
        // let decryptedStr = dec.toString(CryptoJs.enc.Utf8);
        // return decryptedStr.toString();
    }

    private _key = "";
    private _iv  = "";

    public encrypt(data: string): string {
        // if(!this._key)
        //     this.initAesKey();
        // let srcs = CryptoJs.enc.Utf8.parse(data);
        // let encrypted = CryptoJs.AES.encrypt(srcs, this._key, { iv: this._iv, mode: CryptoJs.mode.CBC, padding: CryptoJs.pad.Pkcs7 });
        // return encrypted.ciphertext.toString();
        return;
    }

    public decrypt(enData: string): string {
        // let enHexStr = CryptoJs.enc.Hex.parse(enData);
        // let srcs = CryptoJs.enc.Base64.stringify(enHexStr);
        // // this._key = 
        // let dec = CryptoJs.AES.decrypt(srcs, this._key, {iv: this._iv, mode: CryptoJs.mode.CBC, padding: CryptoJs.pad.Pkcs7 });
        // let decryptedStr = dec.toString(CryptoJs.enc.Utf8);
        // return decryptedStr.toString();
        return;
    }

    public initAesKey(account: string = "1234ABCD"){
        // let tempKey = account + Date.now();
        // let enKey = tempKey;
        // let pre16 = "";
        // let nex16 = "";
        // let rootKey = "";
        // for(let i = 0; i < 16; ++i){
        //     pre16 += enKey[i];
        //     nex16 += enKey[i + 16];
        // }
        // nex16 = base64.encode(nex16);
        // let t16 = "";
        // for(let i = 0; i < 16; ++i){
        //     t16 += nex16[i];
        // }
        // nex16 = t16;
        // let date = new Date();
        // let day = date.getDate();
        // rootKey = ((day % 2) == 0) ? pre16 + nex16 : nex16 + pre16;

        // // this._iv = CryptoJs.enc.Utf8.parse(nex16);
        // this._key = CryptoJs.enc.Utf8.parse(rootKey);
        // this._iv = CryptoJs.enc.Utf8.parse(rootKey);

        // cc.log("=====rootKeyrootKeyrootKey", rootKey)

        // return this._key;
    }
}
