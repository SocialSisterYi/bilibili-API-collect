package login

import "bilibili-API-collect/src/Golang/link"

func getLoginUrl() {

	link.Request("http://passport.bilibili.com/qrcode/getLoginUrl", "GET")
}
