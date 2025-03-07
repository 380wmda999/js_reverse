import base64

import ddddocr
import execjs
import requests
import json

def save_img(img, filename):
    with open(filename, 'wb') as f:
        f.write(base64.b64decode(img))


with open('./main.js',encoding='utf-8') as f:
    js_code = execjs.compile(f.read())



def get_data(p):
    headers = {
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "application/json;charset=UTF-8",
        "Origin": "https://www.ynjzjgcx.com",
        "Pragma": "no-cache",
        "Referer": "https://www.ynjzjgcx.com/dataPub/enterprise",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
        "appId": "84ded2cd478642b2",
        "isToken": "false",
        "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    while True:
        url = "https://www.ynjzjgcx.com/prod-api/mohurd-pub/vcode/genVcode"
        data = {
            "params": js_code.call('get_post_data', {"key": "query"})
        }
        data = json.dumps(data, separators=(',', ':'))
        response = requests.post(url, headers=headers, data=data)
        res_data = json.loads(response.json()['data'])

        bigImage = res_data['bigImage']
        smallImage = res_data['smallImage']
        save_img(bigImage, 'big.png')
        save_img(smallImage, 'small.png')
        slideId = res_data['slideId']
        print(slideId)
        slide = ddddocr.DdddOcr(det=False, ocr=False)

        with open('small.png', 'rb') as f:
            target_bytes = f.read()

        with open('big.png', 'rb') as f:
            background_bytes = f.read()

        res = slide.slide_match(target_bytes, background_bytes, simple_target=True)

        x_pos = res['target'][0]
        print(res, x_pos)
        url = "https://www.ynjzjgcx.com/prod-api/mohurd-pub/dataServ/findBaseEntDpPage"
        data = {
            "params": js_code.call('get_post_data', {
                "pageNum": p,
                "pageSize": 10,
                "certificateType": "01",
                "name": "",
                "slideId": slideId,
                "key": "query",
                "width": x_pos
            })
        }
        data = json.dumps(data, separators=(',', ':'))
        response = requests.post(url, headers=headers, data=data)
        res_json = response.json()

        if res_json['code'] == 200:
            print(res_json)
            return res_json
        else:
            print(res_json)


save_data = {}

for page in range(1, 100):
    print("get_data:", page,len(save_data))
    result_data = get_data(page)['data']['records']
    for result in result_data:
        save_one = {
            'name': result['name'],
            'address': result['address'],
            'creditCode': result['creditCode'],
            'hash_id': hash(result['name']),
        }
        save_data[save_one['hash_id']] = save_one
        print("add hash:", save_one['hash_id'])
    print("save_len:",len(save_data))
    if len(save_data) >= 100:
        break

with open('result.json', 'w', encoding='utf-8') as f:
    f.write(json.dumps(save_data, ensure_ascii=False,indent=4))