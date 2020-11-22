# coding=utf-8
import requests


def exit_login(SESSDATA: str):
    """
    退出登录
    :param SESSDATA: 登录token
    :return: 空
    """
    try:
        data = requests.get(url="http://passport.bilibili.com/login/exit/v2",
                            cookies={"SESSDATA": SESSDATA})
    except Exception as e:
        print(e)
