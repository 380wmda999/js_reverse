import json
import random
import time

import ddddocr
import execjs
import requests


session = requests.Session()

with open("main.js","r",encoding="utf-8") as f:
    js_code = execjs.compile(f.read())


hid = js_code.call('H5uuid')

img_info = session.post('https://acs.fcbox.com/captcha/querySlideImage/'+hid,"{}")

img_json = json.loads(img_info.text)
img_json = img_json['data']
img_json['h5uuid'] = hid
# 对图片进行识别 生成轨迹
shadeImageUrl = requests.get(img_json['shadeImageUrl']).content
slideImageUrl = requests.get(img_json['slideImageUrl']).content
with open('target.jpg', 'wb') as f:
    f.write(slideImageUrl)
with open('background.jpg', 'wb') as f:
    f.write(shadeImageUrl)

slide = ddddocr.DdddOcr(det=False, ocr=False)

with open('target.jpg', 'rb') as f:
    target_bytes = f.read()

with open('background.jpg', 'rb') as f:
    background_bytes = f.read()

res = slide.slide_match(target_bytes, background_bytes)
print(res)
x_end = res['target'][0] + res['target_x'] - 9
start_time = int(time.time()*1000)
tracks = [{
        "x": 1,
        "y": img_json['pointY'],
        "time": start_time
    }]
tr_len = random.randint(80, 100)
for i in range(tr_len):
    x_pos = random.randint(2, 10)
    x_pos = tracks[-1].get('x') + x_pos
    if x_pos >= x_end:
        break
    start_time = start_time + random.randint(10, 20)
    add_data = {
        "x": x_pos,
        "y": img_json['pointY'],
        "time": start_time
    }
    tracks.append(add_data)
tracks.append({'x':x_end,'y':img_json['pointY'],'time':start_time + random.randint(10, 20)})
print(img_json,tracks)
post_data = js_code.call('get_post_data',json.dumps(img_json),json.dumps(tracks))
print(post_data)
headers = {
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "Origin": "https://www.fcbox.com",
    "Pragma": "no-cache",
    "Referer": "https://www.fcbox.com/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
url = "https://acs.fcbox.com/captcha/checkCode/"+hid


response = session.post(url, headers=headers, data=post_data)
print(response.text)
token = response.json()['data']['token']
print(token)

headers = {
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Length": "0",
    "Origin": "https://www.fcbox.com",
    "Pragma": "no-cache",
    "Referer": "https://www.fcbox.com/pages/user/login.html",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest",
    "fc_version_no": "8066002",
    "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
url = "https://www.fcbox.com/noshiro/getPublicKey"
response = session.post(url, headers=headers)

pk = response.json()['data']
print(pk)
username = '1111'
password = 'test'
url = "https://www.fcbox.com/passport/login"
params = {
    "username": username,
    "password": js_code.call("get_password",password,pk),
    "verifyCode": token,
    "_": int(time.time() * 1000)
}
print(params)
headers = {
        "Accept": "*/*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "Origin": "https://www.fcbox.com",
        "Pragma": "no-cache",
        "Referer": "https://www.fcbox.com/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
        "sec-ch-ua": "\"Chromium\";v=\"130\", \"Google Chrome\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
response = session.get(url, headers=headers, params=params)
print(response.text)
print(response)