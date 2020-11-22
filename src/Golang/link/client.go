package link

import (
	"crypto/md5"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
	"sort"
	"strings"
)

const (
	userAgent     = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36"
	encryptSecret = "560c52ccd288fed045859ed18bffd973"
)

// GetAndDecode get请求并解析json响应内容
func GetAndDecode(url string, params map[string]string, headers map[string]string, container interface{}) error {
	resp, err := http.Get(url, params, headers)
	if err != nil {
		return fmt.Errorf("<GetAndDecode>: %v", err)
	}
	if err := JSONProc(resp, container); err != nil {
		return fmt.Errorf("<GetAndDecode>: %v", err)
	}
	return nil
}

// PostAndDecode post请求并解析json响应内容
func PostAndDecode(url string, data map[string]string, headers map[string]string, container interface{}) error {
	resp, err := http.Post(url, data, headers)
	if err != nil {
		return fmt.Errorf("<PostAndDecode>: %v", err)
	}
	if err := JSONProc(resp, container); err != nil {
		return fmt.Errorf("<PostAndDecode>: %v", err)
	}
	return nil
}

func request(url, method, query string) (req *http.Request, err error) {
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

// JSONProc 序列化json响应内容
func JSONProc(body *http.Response, container interface{}) error {
	defer body.Body.Close()
	if err := json.NewDecoder(body.Body).Decode(container); err != nil {
		return fmt.Errorf("<JSONProc>: %v", err)
	}
	return nil
}

func encodeSign(params map[string]string, secret string) string {
	if params == nil {
		return ""
	}
	query := httpBuildQuery(params)
	h := md5.New()
	h.Write([]byte(query + secret))
	return query + "&sign=" + hex.EncodeToString(h.Sum(nil))
}

func httpBuildQuery(params map[string]string) string {
	list := make([]string, 0, len(params))
	buffer := make([]string, 0, len(params))
	for key := range params {
		list = append(list, key)
	}
	sort.Strings(list)
	for _, key := range list {
		buffer = append(buffer, key+"="+url.QueryEscape(params[key]))
	}
	return strings.Join(buffer, "&")
}
