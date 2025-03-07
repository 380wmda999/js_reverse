
var CryptoJS = require('crypto-js')


function js_md5(str) {
    return CryptoJS.MD5(str).toString()
}

function _0x15b0d8(_0x218136) {
    for (var _0x4d841f = '', _0xdc4048 = 0x0; _0xdc4048 < _0x218136["length"]; _0xdc4048++) {
        var _0x5e6045 = _0x218136[_0xdc4048];
        _0x4d841f += _0x5e6045['x'] + '' + _0x5e6045['y'] + _0x5e6045['time'];
    }
    return _0x4d841f;
}


enc = require('./all')

function H5uuid() {
    for (var _0x225469 = [], _0x4eda34 = '0123456789abcdef', _0x213e30 = 0x0; _0x213e30 < 0x24; _0x213e30++)
        _0x225469[_0x213e30] = _0x4eda34['substr'](Math['floor'](0x10 * Math['random']()), 0x1);
    return _0x225469[0xe] = '4',
    _0x225469[0x13] = _0x4eda34['substr'](0x3 & _0x225469[0x13] | 0x8, 0x1),
    _0x225469[0x8] = _0x225469[0xd] = _0x225469[0x12] = _0x225469[0x17] = '-',
    _0x225469['join']('');
}

function get_post_data(img_data,track) {
    img_data = JSON.parse(img_data)
    track = JSON.parse(track)
    var _0x1266f7 = img_data['clientIp'] + img_data['checkId']  + img_data['h5uuid'] + _0x15b0d8(track)
    var _0x2f155e = js_md5(_0x1266f7)
    return enc.encrypt({
            'data': {
                'sign': _0x2f155e,
                'track': track
            },
            'aesKey': img_data['key']
        })
}

//
// img_data = {'h5uuid':'979ff652-fc3e-4777-9569-eea573cabb71',"checkId":"ACCAB20E02C046E98AD91436E4A6B417","clientIp":"125.82.22.115","key":"D55ULVVHFGquvzbg","pointX":0,"pointY":73,"shadeImageUrl":"https://consumerapp-1251779293.file.myqcloud.com/captcha/slide/online/20253/b4bd322c65464a84991e21c1dfa246ae.png","slideImageUrl":"https://consumerapp-1251779293.file.myqcloud.com/captcha/slide/online/20253/ec96d000cd254f85bd9d1308d4937b42.png"}
// track =[
//     {
//         "x": 0,
//         "y": 73,
//         "time": 1741276947616
//     },
//     {
//         "x": 1,
//         "y": 73,
//         "time": 1741276947632
//     },
//     {
//         "x": 2,
//         "y": 73,
//         "time": 1741276947648
//     },
//     {
//         "x": 3,
//         "y": 73,
//         "time": 1741276947656
//     },
//     {
//         "x": 6,
//         "y": 73,
//         "time": 1741276947664
//     },
//     {
//         "x": 9,
//         "y": 73,
//         "time": 1741276947673
//     },
//     {
//         "x": 12,
//         "y": 73,
//         "time": 1741276947680
//     },
//     {
//         "x": 16,
//         "y": 73,
//         "time": 1741276947689
//     },
//     {
//         "x": 22,
//         "y": 73,
//         "time": 1741276947696
//     },
//     {
//         "x": 27,
//         "y": 73,
//         "time": 1741276947705
//     },
//     {
//         "x": 32,
//         "y": 73,
//         "time": 1741276947712
//     },
//     {
//         "x": 38,
//         "y": 73,
//         "time": 1741276947720
//     },
//     {
//         "x": 43,
//         "y": 73,
//         "time": 1741276947729
//     },
//     {
//         "x": 48,
//         "y": 73,
//         "time": 1741276947737
//     },
//     {
//         "x": 50,
//         "y": 73,
//         "time": 1741276947745
//     },
//     {
//         "x": 54,
//         "y": 73,
//         "time": 1741276947753
//     },
//     {
//         "x": 56,
//         "y": 73,
//         "time": 1741276947761
//     },
//     {
//         "x": 57,
//         "y": 73,
//         "time": 1741276947769
//     },
//     {
//         "x": 58,
//         "y": 73,
//         "time": 1741276947777
//     },
//     {
//         "x": 58,
//         "y": 73,
//         "time": 1741276947792
//     },
//     {
//         "x": 59,
//         "y": 73,
//         "time": 1741276947800
//     },
//     {
//         "x": 60,
//         "y": 73,
//         "time": 1741276947816
//     },
//     {
//         "x": 61,
//         "y": 73,
//         "time": 1741276947825
//     },
//     {
//         "x": 62,
//         "y": 73,
//         "time": 1741276947841
//     },
//     {
//         "x": 63,
//         "y": 73,
//         "time": 1741276947848
//     },
//     {
//         "x": 64,
//         "y": 73,
//         "time": 1741276947864
//     },
//     {
//         "x": 64,
//         "y": 73,
//         "time": 1741276947873
//     }
// ]
// console.log(get_post_data(JSON.stringify(img_data),JSON.stringify(track)))
const JSEncrypt = require("jsencrypt");

function get_password(passwd, pk) {
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey(pk);
    return encrypt.encrypt(passwd);
}