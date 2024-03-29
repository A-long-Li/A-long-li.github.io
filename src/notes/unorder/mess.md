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
首先，在本科阶段，我专注于学业，在多个学科取得了优异成绩，连续三年获得人民奖学金。在英语方面，我在大一顺利通过了英语四级和六级考试。在竞赛方面，我积极参加了多个计算机相关竞赛，并取得了优异成绩。

其次，我曾担任校ACM协会会长和网络协会软件组组长等职务。在这些职责中，我积累了丰富的组织管理经验和团队合作能力。作为校ACM协会会长，我负责组织和策划各类技术活动和比赛，提升了领导和问题解决能力。担任网络协会软件组组长让我深入了解软件开发流程和团队协作的重要性。这些经历不仅锻炼了我的组织能力和沟通技巧，也加深了我对技术领域的热爱和探索欲望。

之后，我曾经在江苏科技大学产业技术研究院实习过一段时间，实习期间我以全栈工程师的身份参与了瑞创国际物流信息化改造的项目，为瑞创物流公司研发一套具有国内先进水平的水路运输管理系统，涉及货物运输相关方信息共享，提高物流流转的工作效率。这段实习经历不仅加深了我的技术实践经验，还锻炼了我的解决问题的能力和团队合作精神。

最后，如果有幸被贵校录取，在未来研究生期间，我会严格要求自己，研一期间致力于学习学业，多阅读专业文献，结合自己所学夯实专业基础；研二期间将理论知识运用于实践中，积极参加各种实验项目；研三期间沉淀学识，深度思考，完成毕业论文以及答辩，如果有机会的话，愿意为更深入的研究做进一步打算。
谢谢老师，以上就是我的自我介绍，真诚希望能够成为林大的一份子。
::: info 简化版
尊敬的各位老师，下午好。我是李亚军，来自江苏徐州，本科就读于苏州理工学院软件工程专业，将于今年六月毕业。

我将从学习经历、校内实践、实习经历以及未来规划这四个方面来进行自我介绍。

在本科阶段，我专注学业，在多个学科取得优异成绩，连续三年获得人民奖学金。在英语方面，我顺利通过了大一的英语四级和六级考试。在竞赛方面，我积极参加多个计算机相关竞赛，并取得优异成绩。

其次，我曾担任校ACM协会会长和网络协会软件组组长等职务。在这些职责中，我积累了丰富的组织管理经验和团队合作能力。作为校ACM协会会长，我负责组织和策划各类技术活动和比赛，提升了领导和问题解决能力。担任网络协会软件组组长让我深入了解软件开发流程和团队协作的重要性。这些经历不仅锻炼了我的组织能力和沟通技巧，也加深了我对技术领域的热爱和探索欲望。

后来，我在江苏科技大学产业技术研究院实习，以全栈工程师身份参与了瑞创国际物流信息化改造项目。这段实习经历不仅加深了我的技术实践经验，还锻炼了解决问题和团队合作能力。

最后，如果有幸被贵校录取，我将严格要求自己。研一期间致力于学业，多阅读专业文献夯实基础；研二将理论知识运用于实践，积极参与各种实验项目；研三期间深度思考，完成毕业论文和答辩，愿为更深入研究做打算。

感谢各位老师，以上是我的自我介绍，真诚希望能成为贵校的一员。
:::
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
### 英语问答
#### 空闲时间
When I have free time, I like to read code from open source projects, which may sound a bit weird, but reading neat and logical code makes my whole body and mind feel happy.
#### 对当前专业的看法
 Software engineering is an important field of computer science, involving the application of technologies similar to big data and artificial intelligence. Software engineering has penetrated into our daily lives.
 #### 对ai的看法
 At present, artificial intelligence is developing rapidly, and its application is related to all aspects of us. Just like ChatGPT has brought great convenience to our lives. In the future, ai will be used in various fields,such as medicine, education, and finance.
 #### 对未来的规划
 My future plan is to continue my study in the major of computer scinece, and I will focus on the application of artificial intelligence in software development. I hope to become an expert in this field.
 #### 介绍专业
 My major is software engineering. Software engineering is based on computer science and technology which studies the use of engineering methods to construct and maintain effective, practical and high-quality software. It involves programming language, data structure, operating system and so on. Generally speaking, software engineering is a major related to software development.
#### 毕业设计
My graduation project is to use neural networks to classify animals. ResNet network model was used to train the data. This model can accurately classify animals. Finally, I created an app to showcase the model's effects.
                        

 [英语问答1](https://blog.csdn.net/weixin_48785707/article/details/129667807)

 [英语问答2](https://www.sohu.com/a/378250304_120149035)

 [英语问答3](https://zhuanlan.zhihu.com/p/597709349?utm_id=0)