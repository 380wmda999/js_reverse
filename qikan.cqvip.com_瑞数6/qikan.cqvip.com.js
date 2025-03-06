
function get_enviroment(proxy_array) {
      for(var i=0; i<proxy_array.length; i++){
          handler = '{\n' +
              '    get: function(target, property, receiver) {\n' +
              '        console.log("方法:", "get  ", "对象:", ' +
              '"' + proxy_array[i] + '" ,' +
              '"  属性:", property, ' +
              '"  属性类型:", ' + 'typeof property, ' +
              // '"  属性值:", ' + 'target[property], ' +
              '"  属性值类型:", typeof target[property]);\n' +
              'if (typeof target[property] == "undefined"){debugger}' +
              '        return target[property];\n' +
              '    },\n' +
              '    set: function(target, property, value, receiver) {\n' +
              '        console.log("方法:", "set  ", "对象:", ' +
              '"' + proxy_array[i] + '" ,' +
              '"  属性:", property, ' +
              '"  属性类型:", ' + 'typeof property, ' +
              // '"  属性值:", ' + 'target[property], ' +
              '"  属性值类型:", typeof target[property]);\n' +
              '        return Reflect.set(...arguments);\n' +
              '    }\n' +
              '}'
          eval('try{\n' + proxy_array[i] + ';\n'
          + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}catch (e) {\n' + proxy_array[i] + '={};\n'
          + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}')
      }
  }
 proxy_array = ['window', 'document', 'location', 'navigator', 'history','screen']

let log_flag = true
function vlog(){
    if (log_flag){
        console.log(...arguments)
    }
}
_null = function (){
    vlog(arguments)
}
vlog("补环境开始")

window = global;
window.top = window;
window.HTMLFormElement = _null
div = {
    getElementsByTagName:function (arg){
        if (arg==="i"){
            return {length:0}
        }
    }
}
script = {
    0:{},
    1:{}
}
meta = {
    getAttribute:function (arg){
           vlog("meta.getAttribute",arguments)
        if (arg==="r"){
            return "m"
        }
    },
    parentNode:{
        removeChild:_null
    }
}

Document = function Document(){}
Document.prototype = {
    createElement:function (arg){
        vlog("createElement",arguments)
        if(arg==="div"){
            return div
        }
        if(arg==="form"){
            return {}
        }
    },
    appendChild:_null,
    removeChild:_null,
    getElementsByTagName:function (arg){
        vlog("getElementsByTagName",arguments)
        if (arg==="script"){
            return script
        }
        if(arg==="meta"){
            return [meta,meta]
        }
        if (arg==="base"){
            return {}
        }
    },
    getElementById: _null,
    addEventListener:_null,
    attachEvent :undefined,
    visibilityState:'visible',
}
window.document = new Document;
Object.setPrototypeOf(document,Document.prototype)

Location = function (){};
Location.prototype = {
    "ancestorOrigins": {},
    "href": "https://qikan.cqvip.com/Qikan/Journal/JournalGuid?from=index",
    "origin": "https://qikan.cqvip.com",
    "protocol": "https:",
    "host": "qikan.cqvip.com",
    "hostname": "qikan.cqvip.com",
    "port": "",
    "pathname": "/Qikan/Journal/JournalGuid",
    "search": "?from=index",
    "hash": ""
}
window.location = new Location;

window.addEventListener = _null
window.attachEvent = undefined

Navigator = function Navigator(){}
Navigator.prototype = {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
    appCodeName: "Mozilla",
    appName: "Netscape",
    appVersion: '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
    webdriver:false,
    connection:{}
}
window.navigator = {}
window.navigator.__proto__ = Navigator.prototype


setTimeout = _null
setInterval = _null

window.XMLHttpRequest = {}
window.localStorage = {}
window.sessionStorage = {}
window.HTMLAnchorElement = _null

vlog("补环境结束")
get_enviroment(proxy_array)


'ts_code'


$_ts = window['$_ts'];
if (!$_ts)
    $_ts = {};
$_ts.nsd = 54399;
$_ts.cd = "qxxErrAlxSEqoAlElGqwqA9Pqs7UqPEolAV0qO7UqnEqlAG1qcEDEGQ4tnEmrqGlDSEqEG3Pru7elf3Pr1Eciu01qcEqEGl4H1EArq9lDSEqEGEPqu7elGqPmnEDiu01qcElEGV4H1EcrralxnEqlAVPru7UrrEqEGV0qO7eEGl4maE1qcEoEGA4HpEwEGEwqpVbrcKQqsVSqGVnHRau0bqSgd46YFnvwa7C4LShQsUzwvgWcuwd4JrhVaCEsu3Sm3.O1wicVPIXr8HZ8L.zqaAuraAxv1akX22ZxOdXJYJOQVevIHfnpCQ7MoWa5sQSFoW2H2hoWnZvEc7CYWlBEVJqFYgg_VeBAoqNYKt9AvrWR2TLsz7fiYyRJnG.BPZnKmZ.xboNAYN6i6lepeg0RV2oMCN9ub20Y0W2H2hoWnZvEc70YWm5hCz6FCG2STGutKSnFDKaMURNMPzjIHrBhCz6FCfV7mGutKSnFDKaMURNMPzjIHrBhCz6FCfV7mGutKSnFDKaMURNMPzjIHrBhCz6FCfVaYgxrcNl1T57purQwsS8MwVaQKWC3uey5DmmF6zzYOh4YCT7FCpAsFwuQDwoV9xu0OGTsYf2s0o3FVNq3Kqdp_z4RvTAUCeI5lT1HvJu1bUuYVwDJDJVKjwFJbN1V0yhe6NhRb9NRC.eiuq03c2X8jwqY2JvVkJm0srSWDgNRC.eiuq03c2X8jwRJlWnsVgy5TzFsVANRC.eiuq03c2X8jwo8byVVoSjZor.VYLNMvjv1DNpVTw.V8NjVOxhHmpZnbwfQoJBpK4T3Oft8oVCKJfxsYRmYmQnekpMWK00wmBNF0rIhDpvFtAaWbQ7MUQn5l2tWom51OBCp2RuhDpvFtAaWbQ7MUQn7brGRkL0JKXnFUq5pDYBIXRHssrF1oayNCrPJ2AdQ6ObQuxoRGQlcR0uqaAurSRf_owuHulTHsDLiOQZWsE5WFakrKRfROa_.AWqWuVurqizWuASJsg0HFauqaE_Jk04juW6rph9j3Zq_TmYNQlcn06HdFWNrS1nRDO1F96WdaqqqqqqqqqqcMnRo56xibkhqA.VvS5xNJKjY_gLA.nP5D1Zfvu3Cql2fqWtJk70Hsc7WOE6qG30cR3nJkluJOa5.s3urAEorqbwJaWlWGQmHN60JoZXRbYj7DxXwnybwC1a3vY7hbY23.rf3vlXRK2y7DmjFny9tD.e31ebQUALFXeThCRzFPfj4oWB3KJutD6aMnefMKALMIJ6hCmzRoa25UzbtKwLQcU_MCENRDzvxIN7M129Foq25bSzQ1yG3DXaRDNOhbr5xIz.Mc2jF6A2eoJutKNuRnUT3DaNFC2zxIYzR12.FUQ2eUr7tKf0tDHeQ1eBQbqL35SbRc2LwDzv7D2PQCW.FDk5hCejR1zN3HGBMvVCtC2yd1eXWKW.FUbBhCyTR1zN3XLBMbNbtC2b_PeXMDZ.FUv7hCyCFnzN8I29hCNGM1fbd67BFbYGtDMa31ejMbELRXf2h6Y4t6padneuRol.wD4Sh6JTMnz088ZBQ6YCt6pz5PeuwURdtovnRceTFCAL8Irjh6YS3nfgeKVBwoRdtoBeh6mLhvY2RhrSMvJGt6R75neS3ol.wv6_h6m9Qcz6R.ra3K9XwDxS7or0Rcy0QC5aQoYPhvpe8.r63vQXQCYu7owj3nyuMKd_h6wjQoYfR5GBw6TCt6re5PeTwb3.Qv.Bh6YCw1znQIGBwDN931f5ZCY2JnyaFU5awDy9hvr2I4r0Q63XICR97ozuFcydFoja8CeC8PzZ8BqB8CfXt6g2ybNutKJ6MnU7MCNCwPzz8I0kqaVDKcrK5aWoKPRfUAb3UcwN1AQqY.Gv8aVqJOWxvOASrAWCrqPzqaWmqGQlcRakrOWnJuAyvq3CWsl5HAvlKcmu36V93I2PRCrawmwe4bNz32mnRP5_xUmGQUw.R5ebhKTvRbr74vqz3CTTAKOdFn7zwDRLIH9BECyvIP0BXPY.3DJO3UBBVow6FC2OtMQ5ECyvIPRV2G";
if ($_ts.lcd)
    $_ts.lcd();


require('./ts_code')
function get_cookie(){
    return document.cookie
}

console.log(get_cookie())