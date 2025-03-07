import json

import execjs
import pymongo
import requests


headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://www.chinaindex.net/ranklist/5/1",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    # "UUID": "142095a8-c9d8-5a29-9bad-d0fc517321c9",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    "funcID": "undefined",
    "incognitoMode": "0",
    "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
url = "https://www.chinaindex.net/iIndexMobileServer/teleplay/rank/waiting/fans"
# params = {
#     "sign": "46cf510e48f99667216bfa781d6bebab"
# }
response = requests.get(url, headers=headers)



with open("parse_data.js","r",encoding="utf-8") as f:
    js_code = execjs.compile(f.read())

print(response.text)


result = js_code.call('parse_data',response.text)

result = json.loads(result)

db = pymongo.MongoClient()["test"]
db.insert_many(result['data']['ranklist'])
db.close()
print(result)