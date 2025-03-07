import execjs
import requests
import json


with open("auth.js","r",encoding="utf-8") as f:
    js_code = execjs.compile(f.read())

auth_data = js_code.call("get_auth")

auth_data = json.loads(str(auth_data))

auth_headers = auth_data['headers']

print(auth_headers)


headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "Origin": "https://www.yijiupi.com",
    "Pragma": "no-cache",
    "Referer": "https://www.yijiupi.com/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "UUID": auth_headers['UUID'],
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    "appCode": "ShoppingMallPC",
    "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "token;": "",
    "x-sign": auth_headers['x-sign'],
    "x-sign-nonce": auth_headers['x-sign-nonce'],
    "x-sign-timestamp": auth_headers['x-sign-timestamp'],
    "x-sign-version": "1.0"
}
url = "https://www.yijiupi.com/v58/ProductCategory/CategoryTree"
data = {
    "data": {
        "type": 1
    },
    "cityId": 402,
    "countyRegionId": "320116",
    "userClassId": 1,
    "userDisplayClass": 0,
    "addressId": "",
    "deviceType": 3
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, data=data)

print(response.text)
with open("result.json","w",encoding="utf-8") as f:
    f.write(response.text)