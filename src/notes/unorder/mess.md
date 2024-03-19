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

### ResNet
#### 解决的问题
##### 梯度消失和梯度爆炸
在反向传播过程中，参数每传播一层就会乘一个参数，如果参数的值太小，就会导致梯度消失，如果参数的值太大，就会导致梯度爆炸。

解决方法
- 权重初始化
- 数据标准化
- bn
  - 可以加速网络收敛速度并提升准确率
  - 让输入的数据`feature map`满足某一分布规律（均值为0方差为1）
  - 让`feature map`满足某一分布规律，理论上是指整个训练样本集所对应`feature map`的数据要满足分布规律
  - 建议将bn层放在卷积层（Conv）和激活层（例如Relu）之间
##### 退化问题
当网络堆叠到一定深度时，反而会出现深层网络比浅层网络效果差的情况。
ResNet论文提出了 residual结构（残差结构）来减轻退化问题，
隔层相连，弱化每层之间的强联系。这种神经网络被称为 残差网络 (ResNets)。
#### 迁移学习
比如一个大网络里面参数特别多，我只有很少的数据，不足以训练整个网络，这样就会造成过拟合的现象。
### 复试自我介绍
#### 中文
尊敬的各位老师，下午好。非常有幸有机会能进入到本次复试环节，向各位老师请教和学习。
我叫李亚军，来自江苏徐州，本科就读于苏州理工学院，软件工程专业，将于今年六月份毕业。
下面我将从学习经历，校内实践，实习经历以及未来规划这四个方面来进行自我介绍。
首先，在本科期间我潜心学习，在许多学科上都取得了不错的成绩，在校连续三年都获得了人民奖学金。在英语方面我在大一的时候就顺利的通过了英语四级和六级。竞赛方面我参加过很多的计算机相关竞赛，并取得了优异的成绩。
在校期间我积极参加各种实践项目，在实践过程中我学到了许多知识，并提高了自己的实践能力。
其次，我在校内曾经担任过校ACM协会会长和网络协会软件组组长等职位。在这些职务中，我积累了丰富的组织管理经验和团队合作能力。作为校ACM协会会长，我负责组织和策划各类技术活动和比赛，提升了自己的领导能力和解决问题的能力。同时，担任网络协会软件组组长的经历让我深入了解了软件开发流程和团队协作的重要性。这些经历不仅锻炼了我的组织能力和沟通技巧，也加深了我对技术领域的热爱和探索欲望。
之后，我曾经在江苏科技大学产业技术研究院实习过一段时间，实习期间我以全栈工程师的身份参与了瑞创国际物流信息化改造的项目，为瑞创物流公司研发一套具有国内先进水平的水路运输管理系统，涉及货物运输相关方信息共享，提高物流流转的工作效率。这段实习经历不仅加深了我的技术实践经验，还锻炼了我的解决问题的能力和团队合作精神。
最后，如果有幸被贵校录取，在未来研究生期间，我会严格要求自己，研一期间致力于学习学业，多阅读专业文献，结合自己所学夯实专业基础；研二期间将理论知识运用于实践中，积极参加各种实验项目；研三期间沉淀学识，深度思考，完成毕业论文以及答辩，如果有机会的话，愿意为更深入的研究做进一步打算。
谢谢老师，以上就是我的自我介绍，真诚希望能够成为林大的一份子。
#### 英文
Good morning , dear professors, it’s my great honor to have the
opportunity to introduce myself here. My name is Liyajun, 21 years old. I come
from Xuzhou, a beautiful and historical city of JiangSu Province. I am currently
studying Software Engineering at Suzhou Institute of Technology. I will introduce myself from three aspects: my
academic performance, my working experience, and my future plan.

Firstly, during my college years, I worked hard and learnt a lot from the teachers
and my fellow students. I have great interests in my major and I have acquired a
lot of professional knowledge as well as practical skills.I have also earned scholarship for my academic performance and got prizes in many competitions. Additionally, I successfully passed both the CET-4 and CET-6 exams within the first year of my college education.

Secondly, I have gained some working experiences. Last summer, I completed a
two-month internship. During the internship, I have strengthened my theoretical
knowledge in practice. I have also improved my communicative skills and sense
of team-work. Besides, I’m a good learner and I’m an adaptable person. I think
these qualities will be beneficial for my postgraduate study.

Thirdly, concerning my future plans, after four years of study, I have discovered a deep fascination with Big Data technology. I aspire to delve into this field extensively. 