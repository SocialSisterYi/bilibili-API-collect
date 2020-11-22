package base

import (
	"log"
	"os"
)

// Init 初始化服务
func (b *BService) Init() {
	b.client = &BClient{}
	b.logger = log.New(os.Stderr, "[BiliBili-Tools] ", log.LstdFlags)
}
