package link

import (
	"fmt"
	"net/http"
	"strings"
)

const (
	userAgent     = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36"
	encryptSecret = "560c52ccd288fed045859ed18bffd973"
)

//Request 是用来发送GET和POST请求的方法
func Request(url, method, query string) (req *http.Request, err error) {
	switch strings.ToUpper(method) {
	case "GET":
		// get
		req, err = http.NewRequest("GET", url, nil)
		if query != "" {
			req.URL.RawQuery = query
		}
	case "POST":
		// post
		req, err = http.NewRequest("POST", url, strings.NewReader(query))
		req.Header.Set("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8")
	}
	if err != nil {
		return nil, fmt.Errorf("<request>: %v", err)
	}
	req.Header.Set("User-Agent", userAgent)
	return
}
