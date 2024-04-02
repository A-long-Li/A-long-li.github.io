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
   1. 也是可以解决的，直接使用`%`来转义
2. 确定好渲染参数
@[code html{32}](./template1.html)


 [英语问答1](https://blog.csdn.net/weixin_48785707/article/details/129667807)

 [英语问答2](https://www.sohu.com/a/378250304_120149035)

 [英语问答3](https://zhuanlan.zhihu.com/p/597709349?utm_id=0)