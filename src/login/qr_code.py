# coding=utf-8
import requests
import json


def get_qr_code():
    """获取登录二维码和密钥
    :return:二维码地址，密钥
    """
    try:
        data = requests.get(url="http://passport.bilibili.com/qrcode/getLoginUrl")
        data = json.loads(data.text)["data"]
        return data["url"], data["oauthKey"]
    except Exception as e:
        print(e)
