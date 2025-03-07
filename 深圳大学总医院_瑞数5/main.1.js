
delete __dirname
delete __filename


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
              // 'if (typeof target[property] == "undefined"){debugger}' +
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
window.name = ''
window.HTMLFormElement = _null
div = {
    getElementsByTagName:function (arg){
        if (arg==="i"){
            return {length:0}
        }
    }
}
script = [
    {},
    {}
]
meta = {
    content:'#meta_content#',
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
            return []
        }
    },
    getElementById: _null,
    addEventListener:_null,
    attachEvent :undefined,
    visibilityState:'visible',
    getAttribute:function (arg){
        vlog("getAttribute",arguments)
        if (arg==="script"){
            return script
        }
        if(arg==="meta"){
            return [meta,meta]
        }
        if (arg==="base"){
            return {}
        }

      return {}
    },
}
window.document = new Document;
window.document.scripts = script
window.document.documentElement = {
    attachEvent : function (arg){
        vlog("documentElement.attachEvent",arguments)
      return {}
    },
addEventListener:function (arg){
        vlog("documentElement.addEventListener",arguments)
      return {}
    }
}
Object.setPrototypeOf(document,Document.prototype)

Location = function (){};
Location.prototype = {
    "ancestorOrigins": {},
    "href": "https://sugh.szu.edu.cn/Html/News/Columns/7/2.html",
    "origin": "https://sugh.szu.edu.cn",
    "protocol": "https:",
    "host": "sugh.szu.edu.cn",
    "hostname": "sugh.szu.edu.cn",
    "port": "",
    "pathname": "/Html/News/Columns/7/2.html",
    "search": "",
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


require('./ts_code')




!'#ts_code#'







function get_cookie(){
    return document.cookie
}

console.log(get_cookie())