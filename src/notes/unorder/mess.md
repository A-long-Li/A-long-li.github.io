---
title: 未整理
icon: fa-solid fa-boxes-packing
category: note
tag:
  - mess
---
### uniapp
uniapp 写h5转APP不支持在拦截器处设置请求头，但是在HBuilderX的内部浏览器运行起来是正常的

解决方法： 在发送请求的时候加上
### gorm
分页模板
```go {20}
type PageDto struct {
	Page     int `form:"page" json:"page"`
	PageSize int `form:"page_size" json:"page_size"`
}

func Paginate(req *dto.PageDto) func(db *gorm.DB) *gorm.DB {
	return func(db *gorm.DB) *gorm.DB {
		page := req.Page
		if page == 0 {
			page = 1
		}
		pageSize := req.PageSize
		switch {
		case pageSize > 100:
			pageSize = 100
		case pageSize <= 0:
			pageSize = 10
		}
		offset := (page - 1) * pageSize
		return db.Offset(offset).Limit(pageSize)
	}
}
```
### go 发送邮件模板
注意事项
1. 不可以使用带有`%`的样式，尽量替换成vh
2. 确定好渲染参数
@[code html{32}](./template1.html)
### 整理简历上的bitcask数据库
- [KV存储解析](https://mp.weixin.qq.com/s/s8s6VtqwdyjthR6EtuhnUA)
- [Go 语言数据库/存储项目推荐](https://roseduan.github.io/p/go-%E8%AF%AD%E8%A8%80%E6%95%B0%E6%8D%AE%E5%BA%93/%E5%AD%98%E5%82%A8%E9%A1%B9%E7%9B%AE%E6%8E%A8%E8%8D%90/)

### c语言使用宏定义来实现swap函数
> 使用位运算需要注意交换两个相同变量的值时可能会导致变量变为0。

::: code-tabs

@tab:active 位运算 
```c
#define SWAP(a,b) (a^=b^=a^=b)
```
@tab 数学方法
```c
#define SWAP(a,b) (a=a+b,b=a-b,a=a-b)
```
:::