function _log(args) {
    console.log("=========================================")
    console.log(args)
}

function showStacks() {
    Java.perform(function () {
        console.log(Java.use("android.util.Log").getStackTraceString(
            Java.use("java.lang.Throwable").$new()
        ));
    })
}

function bytesToString(arr) {
    if (typeof arr === 'string') {
        return arr;
    }
    var str = '',
        _arr = arr;
    for (var i = 0; i < _arr.length; i++) {
        var one = _arr[i].toString(2),
            v = one.match(/^1+?(?=0)/);
        if (v && one.length == 8) {
            var bytesLength = v[0].length;
            var store = _arr[i].toString(2).slice(7 - bytesLength);
            for (var st = 1; st < bytesLength; st++) {
                store += _arr[st + i].toString(2).slice(2);
            }
            str += String.fromCharCode(parseInt(store, 2));
            i += bytesLength - 1;
        } else {
            str += String.fromCharCode(_arr[i]);
        }
    }
    return str;
}

function bytesToHex(arr) {
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        var tmp = arr[i];
        if (tmp < 0) {
            tmp = (255 + tmp + 1).toString(16);
        } else {
            tmp = tmp.toString(16);
        }
        if (tmp.length == 1) {
            tmp = "0" + tmp;
        }
        str += tmp;
    }
    return str;
}

function bytesToBase64(e) {
    var base64EncodeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var r, a, c, h, o, t;
    for (c = e.length, a = 0, r = ''; a < c;) {
        if (h = 255 & e[a++], a == c) {
            r += base64EncodeChars.charAt(h >> 2),
                r += base64EncodeChars.charAt((3 & h) << 4),
                r += '==';
            break
        }
        if (o = e[a++], a == c) {
            r += base64EncodeChars.charAt(h >> 2),
                r += base64EncodeChars.charAt((3 & h) << 4 | (240 & o) >> 4),
                r += base64EncodeChars.charAt((15 & o) << 2),
                r += '=';
            break
        }
        t = e[a++],
            r += base64EncodeChars.charAt(h >> 2),
            r += base64EncodeChars.charAt((3 & h) << 4 | (240 & o) >> 4),
            r += base64EncodeChars.charAt((15 & o) << 2 | (192 & t) >> 6),
            r += base64EncodeChars.charAt(63 & t)
    }
    return r
}

function hook_xl() {
    console.log("hook 注入")

    // hash算法
    var messageDigest = Java.use("java.security.MessageDigest");
    messageDigest.getInstance.overload('java.lang.String').implementation = function (algorithm) {
        console.log("算法是--》" + algorithm + "<---")
        return this.getInstance(algorithm)
    }

    messageDigest.update.overload('[B').implementation = function (str) {
        console.log("输入参数-[B->", bytesToString(str))
        return this.update(str)
    }
    messageDigest.update.overload('byte').implementation = function (str) {
        console.log("输入参数-byte->", bytesToString(str))
        return this.update(str)
    }
    messageDigest.update.overload('java.nio.ByteBuffer').implementation = function (str) {
        console.log("输入-java.nio.ByteBuffer-参数-->", bytesToString(str))
        return this.update(str)
    }
    messageDigest.update.overload('[B', 'int', 'int').implementation = function (str, a, b) {
        console.log('[B', 'int', 'int')
        console.log("输入参数-->" + bytesToString(str) + "--|--" + a + "--|--" + b)
        return this.update(str)
    }

    messageDigest.digest.overload().implementation = function () {
        var res = this.digest()
        // 查看密文信息
        console.log("digest密文结果(hex)-->", bytesToHex(res))
        console.log("digest密文结果(b64)-->", bytesToBase64(res))
        return res
    }
    messageDigest.digest.overload('[B').implementation = function (str) {
        _log("输入参数-[B->", bytesToString(str))
        var res = this.digest(str)
        // 查看密文信息
        console.log("digest密文结果(hex)-->", bytesToHex(res))
        console.log("digest密文结果(b64)-->", bytesToBase64(res))
        return res
    }
    messageDigest.digest.overload('[B', 'int', 'int').implementation = function (a, b, c) {
        _log("输入参数-'[B', 'int', 'int'->", bytesToString(a) + "--|--" + b + "--|--" + c)
        var res = this.digest(a, b, c)
        // 查看密文信息
        console.log("digest密文结果(hex)-->", bytesToHex(res))
        console.log("digest密文结果(b64)-->", bytesToBase64(res))
        return res
    }
    // 对称
    var secretKeyFactory = Java.use("javax.crypto.SecretKeyFactory");
    secretKeyFactory.getInstance.overload('java.lang.String').implementation = function (algorithm) {
        console.log("算法是--》" + algorithm + "<---")
        return this.getInstance(algorithm)
    }

    var DESKeySpec = Java.use("javax.crypto.spec.DESKeySpec");
    DESKeySpec.$init.overload('[B').implementation = function (str) {
        console.log("DES key(str)->", bytesToString(str))
        return this.$init(str)
    }

    var IvParameterSpec = Java.use("javax.crypto.spec.IvParameterSpec")
    IvParameterSpec.$init.overload('[B').implementation = function (str) {
        console.log("对称算法Iv(str)->" + bytesToString(str))
        console.log("对称算法Iv(hex)>" + bytesToHex(str))
        return this.$init(str)
    }
    var cipher = Java.use("javax.crypto.Cipher");
    cipher.getInstance.overload('java.lang.String').implementation = function (algorithm) {
        console.log("加密的模式是--》" + algorithm + "<---")
        return this.getInstance(algorithm)
    }

    cipher.update.overload('[B').implementation = function (str) {
        console.log("对称算法update输入参数-[B->", bytesToString(str))
        return this.update(str)
    }
    cipher.update.overload('[B', 'int', 'int').implementation = function (str, a, b) {
        console.log("对称算法update输入'[B', 'int', 'int'->" + bytesToString(str) + "--|--" + a + "--|--" + b)
        return this.update(str)
    }

    cipher.doFinal.overload().implementation = function () {
        var res = this.doFinal()
        // 查看密文信息
        console.log("digest密文结果(hex)-->", bytesToHex(res))
        console.log("digest密文结果(b64)-->", bytesToBase64(res))
        return res
    }

    cipher.doFinal.overload('[B').implementation = function (str) {
        _log("输入参数-[B->" + bytesToString(str))
        var res = this.doFinal(str)
        // 查看密文信息
        console.log("doFinal密文结果(hex)-->", bytesToHex(res))
        console.log("doFinal密文结果(b64)-->", bytesToBase64(res))
        return res
    }

    var SecretKeySpec = Java.use("javax.crypto.spec.SecretKeySpec")
    SecretKeySpec.$init.overload('[B', 'java.lang.String').implementation = function (a, b) {
        console.log("key-->" + bytesToString(a))
        console.log("算法-->" + b)
        return this.$init(a, b)
    }

    var mac = Java.use("javax.crypto.Mac")
    mac.update.overload('[B').implementation = function (str) {
        console.log("hmac输入参数-[B->", bytesToString(str))
        return this.update(str)
    }

    mac.update.overload('[B', 'int', 'int').implementation = function (str, a, b) {
        console.log('[B', 'int', 'int')
        console.log("hmac输入参数-->" + bytesToString(str) + "--|--" + a + "--|--" + b)
        return this.update(str)

    }

    mac.doFinal.overload().implementation = function () {
        var res = this.doFinal()
        // 查看密文信息
        console.log("hmac密文结果(hex)-->", bytesToHex(res))
        console.log("hmac密文结果(b64)-->", bytesToBase64(res))
        return res
    }

    mac.doFinal.overload('[B').implementation = function (str) {
        console.log("hmac输入参数-[B->" + bytesToString(str))
        var res = this.doFinal(str)
        // 查看密文信息
        showStacks()
        console.log("hmac密文结果[B(hex)-->" + bytesToHex(res))
        console.log("hmac密文结果[B(b64)-->" + bytesToBase64(res))
        return res
    }
    // 非对称
    var X509EncodedKeySpec = Java.use("java.security.spec.X509EncodedKeySpec")
    X509EncodedKeySpec.$init.overload('[B').implementation = function (aa){
        console.log("RSA公钥-->" + bytesToBase64(aa))
        return this.$init(aa)
    }
    // hook base64
    var Base64 = Java.use("android.util.Base64")
    Base64.decode.overload('java.lang.String', 'int').implementation = function (str, a) {
        console.log("base64解密参数-->" + str + "--|--" + a)
        return this.decode(str, a)
    }
    Base64.encode.overload('[B', 'int').implementation = function (str, a) {
        console.log("base64编码参数-->" + bytesToString(str) + "--|--" + a)
        return this.encode(str, a)
    }

}

Java.perform(function () {

})
