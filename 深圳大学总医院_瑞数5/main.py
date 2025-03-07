import execjs
import requests
from lxml import etree

headers = {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=0, i",
    "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36"
}
url = "https://sugh.szu.edu.cn/Html/News/Columns/7/2.html"

session = requests.Session()
# 第一次请求 获取meta 和 js
res = session.get(url, headers=headers)
res.encoding = "utf-8"
html = etree.HTML(res.text)
meta_content = html.xpath('//meta[2]/@content')[0]
ts_code = html.xpath('//script[2]/text()')[0]


with open("main.1.js",encoding='utf-8') as f1:
    js_Code = f1.read().replace("'#ts_code#'",ts_code).replace("#meta_content#",meta_content)


with open("main.2.js",'w',encoding='utf-8') as f1:
    f1.write(js_Code)

cookie = execjs.compile(js_Code).call("get_cookie")
print(cookie)
keydata = cookie.split(';')[0].split('=')
cookies = {
keydata[0] : keydata[1]
}
print(cookies)

url = "https://sugh.szu.edu.cn/Html/News/Columns/7/2.html"

res = session.get(url, headers=headers,cookies=cookies)

print(res)