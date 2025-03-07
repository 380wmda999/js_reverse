window=global;

var Fo = []
  , oo = []
  , xxe = typeof Uint8Array != "undefined" ? Uint8Array : Array
  , Ku = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Rs = 0, _xe = Ku.length; Rs < _xe; ++Rs)
    Fo[Rs] = Ku[Rs],
    oo[Ku.charCodeAt(Rs)] = Rs;
function Sxe(e) {
    return Fo[e >> 18 & 63] + Fo[e >> 12 & 63] + Fo[e >> 6 & 63] + Fo[e & 63]
}
function Exe(e, t, n) {
    for (var o, r = [], s = t; s < n; s += 3)
        o = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (e[s + 2] & 255),
        r.push(Sxe(o));
    return r.join("")
}
function kxe(e) {
    for (var t, n = e.length, o = n % 3, r = [], s = 16383, a = 0, l = n - o; a < l; a += s)
        r.push(Exe(e, a, a + s > l ? l : a + s));
    return o === 1 ? (t = e[n - 1],
    r.push(Fo[t >> 2] + Fo[t << 4 & 63] + "==")) : o === 2 && (t = (e[n - 2] << 8) + e[n - 1],
    r.push(Fo[t >> 10] + Fo[t >> 4 & 63] + Fo[t << 2 & 63] + "=")),
    r.join("")
}
function Cxe(e) {
    var t, n = v7(e), o = n[0], r = n[1], s = new xxe($xe(e, o, r)), a = 0, l = r > 0 ? o - 4 : o, i;
    for (i = 0; i < l; i += 4)
        t = oo[e.charCodeAt(i)] << 18 | oo[e.charCodeAt(i + 1)] << 12 | oo[e.charCodeAt(i + 2)] << 6 | oo[e.charCodeAt(i + 3)],
        s[a++] = t >> 16 & 255,
        s[a++] = t >> 8 & 255,
        s[a++] = t & 255;
    return r === 2 && (t = oo[e.charCodeAt(i)] << 2 | oo[e.charCodeAt(i + 1)] >> 4,
    s[a++] = t & 255),
    r === 1 && (t = oo[e.charCodeAt(i)] << 10 | oo[e.charCodeAt(i + 1)] << 4 | oo[e.charCodeAt(i + 2)] >> 2,
    s[a++] = t >> 8 & 255,
    s[a++] = t & 255),
    s
}

var qc = {};
qc.toByteArray = Cxe;
qc.fromByteArray = kxe;
class Zwe {
    static stringToArrayBufferInUtf8(t) {
        const n = typeof window == "undefined" ? Cd.TextEncoder : window.TextEncoder;
        return new n().encode(t)
    }
    static utf8ArrayBufferToString(t) {
        const n = typeof window == "undefined" ? Cd.TextDecoder : window.TextDecoder;
        return new n("utf-8").decode(t)
    }
    static arrayBufferToBase64(t) {
        return qc.fromByteArray(t)
    }
    static base64ToArrayBuffer(t) {
        return qc.toByteArray(t)
    }
}
const Er = Zwe
  , to = 16
  , Vi = Uint8Array.from([214, 144, 233, 254, 204, 225, 61, 183, 22, 182, 20, 194, 40, 251, 44, 5, 43, 103, 154, 118, 42, 190, 4, 195, 170, 68, 19, 38, 73, 134, 6, 153, 156, 66, 80, 244, 145, 239, 152, 122, 51, 84, 11, 67, 237, 207, 172, 98, 228, 179, 28, 169, 201, 8, 232, 149, 128, 223, 148, 250, 117, 143, 63, 166, 71, 7, 167, 252, 243, 115, 23, 186, 131, 89, 60, 25, 230, 133, 79, 168, 104, 107, 129, 178, 113, 100, 218, 139, 248, 235, 15, 75, 112, 86, 157, 53, 30, 36, 14, 94, 99, 88, 209, 162, 37, 34, 124, 59, 1, 33, 120, 135, 212, 0, 70, 87, 159, 211, 39, 82, 76, 54, 2, 231, 160, 196, 200, 158, 234, 191, 138, 210, 64, 199, 56, 181, 163, 247, 242, 206, 249, 97, 21, 161, 224, 174, 93, 164, 155, 52, 26, 85, 173, 147, 50, 48, 245, 140, 177, 227, 29, 246, 226, 46, 130, 102, 202, 96, 192, 41, 35, 171, 13, 83, 78, 111, 213, 219, 55, 69, 222, 253, 142, 47, 3, 255, 106, 114, 109, 108, 91, 81, 141, 27, 175, 146, 187, 221, 188, 127, 17, 217, 92, 65, 31, 16, 90, 216, 10, 193, 49, 136, 165, 205, 123, 189, 45, 116, 208, 18, 184, 229, 180, 176, 137, 105, 151, 74, 12, 150, 119, 126, 101, 185, 241, 9, 197, 110, 198, 132, 24, 240, 125, 236, 58, 220, 77, 32, 121, 238, 95, 62, 215, 203, 57, 72])
  , Qwe = Uint32Array.from([462357, 472066609, 943670861, 1415275113, 1886879365, 2358483617, 2830087869, 3301692121, 3773296373, 4228057617, 404694573, 876298825, 1347903077, 1819507329, 2291111581, 2762715833, 3234320085, 3705924337, 4177462797, 337322537, 808926789, 1280531041, 1752135293, 2223739545, 2695343797, 3166948049, 3638552301, 4110090761, 269950501, 741554753, 1213159005, 1684763257])
  , Hi = Uint32Array.from([2746333894, 1453994832, 1736282519, 2993693404]);



class e$e {
    constructor(t) {
        let n = Er.stringToArrayBufferInUtf8(t.key);
        if (n.length !== 16)
            throw new Error("key should be a 16 bytes string");
        this.key = n;
        let o = new Uint8Array(0);
        if (t.iv !== void 0 && t.iv !== null && (o = Er.stringToArrayBufferInUtf8(t.iv),
        o.length !== 16))
            throw new Error("iv should be a 16 bytes string");
        this.iv = o,
        this.mode = "cbc",
        ["cbc", "ecb"].indexOf(t.mode) >= 0 && (this.mode = t.mode),
        this.cipherType = "base64",
        ["base64", "text"].indexOf(t.outType) >= 0 && (this.cipherType = t.outType),
        this.encryptRoundKeys = new Uint32Array(32),
        this.spawnEncryptRoundKeys(),
        this.decryptRoundKeys = Uint32Array.from(this.encryptRoundKeys),
        this.decryptRoundKeys.reverse()
    }
    doBlockCrypt(t, n) {
        let o = new Uint32Array(36);
        o.set(t, 0);
        for (let s = 0; s < 32; s++)
            o[s + 4] = o[s] ^ this.tTransform1(o[s + 1] ^ o[s + 2] ^ o[s + 3] ^ n[s]);
        let r = new Uint32Array(4);
        return r[0] = o[35],
        r[1] = o[34],
        r[2] = o[33],
        r[3] = o[32],
        r
    }
    spawnEncryptRoundKeys() {
        let t = new Uint32Array(4);
        t[0] = this.key[0] << 24 | this.key[1] << 16 | this.key[2] << 8 | this.key[3],
        t[1] = this.key[4] << 24 | this.key[5] << 16 | this.key[6] << 8 | this.key[7],
        t[2] = this.key[8] << 24 | this.key[9] << 16 | this.key[10] << 8 | this.key[11],
        t[3] = this.key[12] << 24 | this.key[13] << 16 | this.key[14] << 8 | this.key[15];
        let n = new Uint32Array(36);
        n[0] = t[0] ^ Hi[0],
        n[1] = t[1] ^ Hi[1],
        n[2] = t[2] ^ Hi[2],
        n[3] = t[3] ^ Hi[3];
        for (let o = 0; o < 32; o++)
            n[o + 4] = n[o] ^ this.tTransform2(n[o + 1] ^ n[o + 2] ^ n[o + 3] ^ Qwe[o]),
            this.encryptRoundKeys[o] = n[o + 4]
    }
    rotateLeft(t, n) {
        return t << n | t >>> 32 - n
    }
    linearTransform1(t) {
        return t ^ this.rotateLeft(t, 2) ^ this.rotateLeft(t, 10) ^ this.rotateLeft(t, 18) ^ this.rotateLeft(t, 24)
    }
    linearTransform2(t) {
        return t ^ this.rotateLeft(t, 13) ^ this.rotateLeft(t, 23)
    }
    tauTransform(t) {
        return Vi[t >>> 24 & 255] << 24 | Vi[t >>> 16 & 255] << 16 | Vi[t >>> 8 & 255] << 8 | Vi[t & 255]
    }
    tTransform1(t) {
        let n = this.tauTransform(t);
        return this.linearTransform1(n)
    }
    tTransform2(t) {
        let n = this.tauTransform(t);
        return this.linearTransform2(n)
    }
    padding(t) {
        if (t === null)
            return null;
        let n = to - t.length % to
          , o = new Uint8Array(t.length + n);
        return o.set(t, 0),
        o.fill(n, t.length),
        o
    }
    dePadding(t) {
        if (t === null)
            return null;
        let n = t[t.length - 1];
        return t.slice(0, t.length - n)
    }
    uint8ToUint32Block(t, n=0) {
        let o = new Uint32Array(4);
        return o[0] = t[n] << 24 | t[n + 1] << 16 | t[n + 2] << 8 | t[n + 3],
        o[1] = t[n + 4] << 24 | t[n + 5] << 16 | t[n + 6] << 8 | t[n + 7],
        o[2] = t[n + 8] << 24 | t[n + 9] << 16 | t[n + 10] << 8 | t[n + 11],
        o[3] = t[n + 12] << 24 | t[n + 13] << 16 | t[n + 14] << 8 | t[n + 15],
        o
    }
    encrypt(t) {
        let n = Er.stringToArrayBufferInUtf8(t)
          , o = this.padding(n)
          , r = o.length / to
          , s = new Uint8Array(o.length);
        if (this.mode === "cbc") {
            if (this.iv === null || this.iv.length !== 16)
                throw new Error("iv error");
            let a = this.uint8ToUint32Block(this.iv);
            for (let l = 0; l < r; l++) {
                let i = l * to
                  , u = this.uint8ToUint32Block(o, i);
                a[0] = a[0] ^ u[0],
                a[1] = a[1] ^ u[1],
                a[2] = a[2] ^ u[2],
                a[3] = a[3] ^ u[3];
                let c = this.doBlockCrypt(a, this.encryptRoundKeys);
                a = c;
                for (let f = 0; f < to; f++)
                    s[i + f] = c[parseInt(f / 4)] >> (3 - f) % 4 * 8 & 255
            }
        } else
            for (let a = 0; a < r; a++) {
                let l = a * to
                  , i = this.uint8ToUint32Block(o, l)
                  , u = this.doBlockCrypt(i, this.encryptRoundKeys);
                for (let c = 0; c < to; c++)
                    s[l + c] = u[parseInt(c / 4)] >> (3 - c) % 4 * 8 & 255
            }
        return this.cipherType === "base64" ? Er.arrayBufferToBase64(s) : Er.utf8ArrayBufferToString(s)
    }
    decrypt(t) {
        let n = new Uint8Array;
        this.cipherType === "base64" ? n = Er.base64ToArrayBuffer(t) : n = Er.stringToArrayBufferInUtf8(t);
        let o = n.length / to
          , r = new Uint8Array(n.length);
        if (this.mode === "cbc") {
            if (this.iv === null || this.iv.length !== 16)
                throw new Error("iv error");
            let a = this.uint8ToUint32Block(this.iv);
            for (let l = 0; l < o; l++) {
                let i = l * to
                  , u = this.uint8ToUint32Block(n, i)
                  , c = this.doBlockCrypt(u, this.decryptRoundKeys)
                  , f = new Uint32Array(4);
                f[0] = a[0] ^ c[0],
                f[1] = a[1] ^ c[1],
                f[2] = a[2] ^ c[2],
                f[3] = a[3] ^ c[3],
                a = u;
                for (let d = 0; d < to; d++)
                    r[i + d] = f[parseInt(d / 4)] >> (3 - d) % 4 * 8 & 255
            }
        } else
            for (let a = 0; a < o; a++) {
                let l = a * to
                  , i = this.uint8ToUint32Block(n, l)
                  , u = this.doBlockCrypt(i, this.decryptRoundKeys);
                for (let c = 0; c < to; c++)
                    r[l + c] = u[parseInt(c / 4)] >> (3 - c) % 4 * 8 & 255
            }
        let s = this.dePadding(r);
        return Er.utf8ArrayBufferToString(s)
    }
}

function Q0() {
    const e = ["BgvUz3rO", "mZiYndeZnK9UC0nYvW", "C200", "yMfZzty0", "y2LWAgvYvhLWzq", "CgfYC2u", "A2v5", "D2fYBG", "Bg9N", "ntC0nZaYweXWBevh", "runc", "y29UC29Szq", "mJD1tNzszMG", "DgfIBgu", "Dg9tDhjPBMC", "ndCWnZi1BenlAuXX", "qJyQndaUmL9dosnLncrfmW", "odKZmZK0Cw9gq290", "zw5J", "ChjVDg90ExbL", "zxHJzxb0Aw9U", "Aw5MBW", "mJmZnZK1mNjTD3PVvW", "nJbmt3HNr0u", "zwnI", "mtyWodi5owfdAeH4sa", "Bw9Kzq", "y29UC3rYDwn0B3i", "vxrMoa", "mJHIwhjyyLy", "DhjHy2u", "CgfK", "otiXmdm5mfnxz09UEa", "ugTJCZC", "yMLUza"];
    return Q0 = function() {
        return e
    }
    ,
    Q0()
}
(function(e, t) {
    const n = Qo
      , o = e();
    for (; []; )
        try {
            if (-parseInt(n(210)) / 1 + -parseInt(n(229)) / 2 + -parseInt(n(202)) / 3 + -parseInt(n(208)) / 4 * (parseInt(n(200)) / 5) + parseInt(n(221)) / 6 + -parseInt(n(214)) / 7 * (-parseInt(n(207)) / 8) + parseInt(n(232)) / 9 * (parseInt(n(217)) / 10) === t)
                break;
            o.push(o.shift())
        } catch {
            o.push(o.shift())
        }
}
)(Q0, 863826);

function Qo(e, t) {
    const n = Q0();
    return Qo = function(o, r) {
        o = o - 198;
        let s = n[o];
        if (Qo.puDsbx === void 0) {
            var a = function(c) {
                const f = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
                let d = ""
                  , p = "";
                for (let h = 0, x, v, b = 0; v = c.charAt(b++); ~v && (x = h % 4 ? x * 64 + v : v,
                h++ % 4) ? d += String.fromCharCode(255 & x >> (-2 * h & 6)) : 0)
                    v = f.indexOf(v);
                for (let h = 0, x = d.length; h < x; h++)
                    p += "%" + ("00" + d.charCodeAt(h).toString(16)).slice(-2);
                return decodeURIComponent(p)
            };
            Qo.KYiqds = a,
            e = arguments,
            Qo.puDsbx = !![]
        }
        const l = n[0]
          , i = o + l
          , u = e[i];
        return u ? s = u : (s = Qo.KYiqds(s),
        e[i] = s),
        s
    }
    ,
    Qo(e, t)
}


function a$e() {
    const e = Qo
      , t = {};
    t[e(226)] = e(201),
    t[e(211)] = e(209),
    t[e(224)] = e(223);
    return new e$e(t)
}
function ec() {
    const e = ["ChvZAa", "mtjKDuXSCM4", "AM9PBG", "y1n4uufNAunZDhHhvw9pCwXxoenjuuret2vYr0Tinu9Tq0O0wJiXDITgmJvxyuHzuhHdrK12D3HWy3C5ouvJDGO", "wwHVDNLSB1jzC00Rsvm5Ac8WqNPSruf1tZbRDe1rswDtufqZyuzbz0PzD0TWCvjzs2XmrfzJzMXArKnlwtD1mWO", "mJrsEwX3sfC", "zw5JCNLWDa", "BgvUz3rO", "mti3odCYt3HrAu5l", "ndG0mZyWuenIuMHd", "A00WshfVvhqYvvP3qtvfmK16uZrfstjNAMzrAhO1wdi4Dxf4qwLfqtn3tKz4zNjdwMXtwKHImgDUmNPeCfDVDWO", "otm4yKH3Cfvp", "tuLjqLzbsujbrefoqMDRCwHRAuC5DZbcqvffrKfbu0nbvdr3z2DfnKfNrufbA0vbCwHiEvPMu3nzB3vYtNHHwqO", "zxjYB3i", "ndeYnJeYv3znqxvM", "mtKYmti1nujTrgPsvq", "Dg9tDhjPBMC", "DgfIBgu", "CMv0DxjUicHMDw5JDgLVBIGPia", "rffjz0LKAerusxfemMPMwwPqvfK4sMOZrurhugjimKHiDwzMDMzSrun0m0vRnJbdsvfdrLjSq2TiCgK3AhrOAaO", "y2vPBa", "yMLUza", "D2fYBG", "zgvJCNLWDa", "C2XPy2u", "mZy1nhPlA2rfzW", "x19WCM90B19F", "uhvim293surbuufcqwTbzM9PthLmk1O0Bgy0txL4AZz4vurNtgfxr3HPBwOYmenvzIS1qKTlBMXYsYTfzdHNqqO", "ChjVDg90ExbL", "Aw5MBW", "nJG5mtu3n3j1yu5Awq", "Bg9N", "y29UC3rYDwn0B3i", "mtaWAMrPBevZ", "zxHJzxb0Aw9U", "C2v0uhjPDMf0zuTLEq", "DhjHy2u", "ntGZmdy4EK5yEhD4", "C2v0uhvIBgLJs2v5", "tuLhzK1bmeDdu3fhu0LIm0rrrujbuvvbqtrhtKfeq0jPuuTcz1fdmJLTAuyXv3a5wgXOq0vdBYTgwxbdsgfKmwLWru1Nwgy0swrNwwPnsvf3y3P6BZLhwgrJwJrLzvyRowXRAdyRyvrXENPvodqZCMrRtxqWDNjtBNvQvsTht3veueXMytvmwJztzMfUqw95C2K2EhHuwdaYwgL6yJnRk1OXvvnjEM05uuf3rsTtuJfbutC4CKDuuKziv0z1n09hugTwtMvgk3zYwdnPBLfuAwf3surbuufc", "y29UC29Szq", "n050k1bYz3j4A2LbntbLzK9szeK1vtvSC1C3ou1TrM51C1vbmZu1B2ftwgnmAhu1EhHcmZHttvn5udjlDNvltGO", "mJb6vhLWvhK"];
    return ec = function() {
        return e
    }
    ,
    ec()
}

const c$e = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC29miF1Wp9XlhCECo+FYpCHad1ipEMgXf4IdgYjMIQwczzo9GXdcZ4eeV+9lkh6+aTqzzU843rdkMt0vrSnujU+GOuDPLfa5LZ6SfanAoysi6xxTX02Xizb3k+Z1USIzm9QAwE+SR1AQ78rGTRFHWFu7OGPkVNeF+vrX3inQTiawIDAQAB";

const JSEncrypt = require('jsencrypt');
function u$e(e) {
    const n = new JSEncrypt;
    n['setPublicKey'](c$e);
    const o = 117
      , r = Math["ceil"](e["length"] / o);
    let s = [];
    for (let a = 0; a < r; a++) {
        const l = e["slice"](a * o, (a + 1) * o)
          , i = n['encrypt'](l);
        s['push'](i)
    }
    return s.join(",")
}

function get_post_data(p) {
    //这个s 好像是个固定值 可以写死 FnQXKsRv5WTfL5JYWvwVsw==
    var s = a$e().encrypt(JSON.stringify(p))
    console.log(s)
    return u$e(s)
}

console.log(get_post_data({"key": "query"}));