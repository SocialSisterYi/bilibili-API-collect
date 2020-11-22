# coding=utf-8
import requests
import json


def nav_user_info(SESSDATA: str):
    """
    获取导航栏用户信息
    :param SESSDATA: 登录token
    :return: 详见API文档
    """
    try:
        data = requests.get(url="http://api.bilibili.com/nav",
                            cookies={"SESSDATA": SESSDATA})
        return json.loads(data.text)
    except Exception as e:
        print(e)


def user_status(SESSDATA: str):
    """
    获取用户状态数
    :param SESSDATA: 登录token
    :return: 详见API文档
    """
    try:
        data = requests.get(url="http://api.bilibili.com/x/web-interface/nav/stat",
                            cookies={"SESSDATA": SESSDATA})
        return data.text
    except Exception as e:
        print(e)


def user_coins(SESSDATA: str, uid: int):
    """
    获取用户硬币数量
    **未测试硬币为0的情况**
    :param SESSDATA: 登录token
    :param uid: 用户id
    :return: float类型，硬币数量
    """
    try:
        data = requests.get(url="http://account.bilibili.com/site/getCoin",
                            cookies={"SESSDATA": SESSDATA,
                                     "DedeUserID": str(uid)})
        data = json.loads(data.text)["data"]["money"]
        if data == "null":
            return 0
        return float(data)
    except Exception as e:
        print(e)
