# coding=utf-8
import json
import requests


def send_message_text(SESSDATA, token, sender, receiver, content):
    try:
        data = requests.post(url="http://api.vc.bilibili.com/web_im/v1/web_im/send_msg",
                             cookies={"SESSDATA": SESSDATA},
                             data={
                                 "msg[sender_uid]": sender,
                                 "msg[receiver_id]": receiver,
                                 "msg[receiver_type]": 1,
                                 "msg[msg_type]": 1,
                                 "msg[content]": json.dumps({"content": content}),
                                 "csrf_token": token
                             })
        if json.loads(data.text)["msg"] != "ok":
            print("Some things goes wrong. Check data.")
            print(data.text)
    except Exception as e:
        print(e)


if __name__ == '__main__':
    send_message_text("6ba530d5%2C1620206403%2Cf1ba2*b1",
                      "a5b50cf4773f13debd8e90a4f7961ce2",
                      325272949,
                      37090048,
                      "Hello World!\nby Python")
