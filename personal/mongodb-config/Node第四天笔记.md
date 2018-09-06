# 内容反馈

## 同步&异步

### 案例
	同步和异步的方式去读取一个文件的内容，并且观察其打印顺序
	
### 区别

	执行顺序不一样
		1、同步就是自上而下依次执行
		
		2、先会跳过异步代码的执行，把异步代码放入到事件队列中去，等我们当前所有的同步代码执行完毕之后，再去事件队列中取出加入到它里面的异步代码，执行

	获取结果方式不一样
		1、异步方法一般都会有回调，回调的作用就是为了获取结果
		
		2、同步没有回调函数，只能通过返回值获取结果
		
------------------------

# 内容回顾

## 后台处理GET&POST登录
	获取到通过GET&POST传递过来的路径和参数
	路径：明白浏览器的意图 /login   /register
	
	参数：是为了做事情
	
### HTTP
	请求
		请求行:调试
		请求头:告诉服务器浏览器的一些信息 User-Agent
		请求体:post请求的时候，用来传递参数
	
	响应
		状态行:调试 状态码
		响应头:服务器告诉浏览器一些信息 Content-Type
		响应体:就是服务器返回的数据
		
### GET
	路径:通过 url.parse()
	
	参数:urlObj.query ---> querystring.parse()
	
### POST
	路径: req.url
	
	参数:两个事件 `data`，`end` ---> querystring.parse()
	
## 模块化
	浏览器 requirejs
	
	服务器:CommonJS
		导入别人模块 require，注意点:导入自己的模块，路径写全
		
		导出模块给别人用
			module.exports = {}
			modlue.exports.xxx = xxx
			exports.yyy = yyy
			
			唯一导出一个成员
			module.exports.唯一成员属性 = 唯一成员值
			module.exports = 唯一的成员(可以js中任意数据类型)
			
## 服务端渲染
	就是后台生成好浏览器所需的一切(就是一个完整的网页)
	
### Node里面模版渲染引擎
	xtemplate 在网页中写占位的哪些模版语法
	
	xtpl
		xtpl.renderFile(要替换文件的路径,参数,回调)

------------------------

# 今日内容

## Express
	http   ----> Express
	原生js ----> jQuery
	
### 概念
	英文官网:http://expressjs.com/
	
	中文网址:http://www.expressjs.com.cn/
	
	基于 Node.js 平台，快速、开放、极简的 web 开发框架。
	
### API说明
	express() 创建一个 Express 应用。
	
	Application 通过express()创建出来的应用
		进行请求处理响应
		开启监听
		
	Router 可以对浏览器发送过来的请求，分开处理
	
	Request:请求（获取路径、参数）
	
	Response:响应 返回数据给浏览器靠它
	
### 实现Hello World
	http://www.expressjs.com.cn/starter/hello-world.html

### Express来简化我们`http`的代码
	1、简化获取路径和参数
		GET: req.query
		POST:要是用一个基于Express`中间件`
		
		https://www.npmjs.com/package/body-parser
	
	2、使用路由，对我们的请求分开处理
		2.1、写好路由文件，处理请求，并且导出
			见代码
		
		2.2、在app.js中导入路由文件，根据条件分开处理
			注意:
				2.2.1、在Express中，它认为路由也是Express一个中间件
				
				2.2.2、要集成路由中间件写法
					app.use('一级路径',路由文件对象)
	
	3、简化浏览器请求静态资源的处理
		3.1、在app.js中，集成静态资源这个中间件
		
		3.2、在发送请求的时候，注意一下路径即可
	
### Express中间件的理解
	Express 主板
	
	基于Express中间件 CPU、显卡、硬盘、声卡
	
	中间件不能单独运行，必须集成到Express中才能工作
	中间件是为了让我们的Express功能更加强大
	
### Express中间件之`body-parser`
	作用:就是用来处理浏览器发送过来的POST请求的
	
	步骤:
		1、安装改第三方包
			npm install body-parser --save
		
		2、集成到Express中
			var bodyParser = require('body-parser')
			
			// parse application/x-www-form-urlencoded
			app.use(bodyParser.urlencoded({ extended: false }))
	
### Express之处理GET/POST请求
	见代码
	

### 改造我们的音乐播放器
	见代码

------------------------

## MongoDB

### 数据库
	存储数据
	
	对海量数据存储
	
	客户端
		iOS/Android App应用 sqlite
	
	服务端
		关系型数据库
			mysql 企业版 10万以下 1000/小时
			
			sqlserver 10~30万 3000/小时
			
			oracle 60万起 1万/小时
			
			Google 和  Oracle  83亿/年
			Android		sun 开源免费
			
			乔布斯
				2010 OC  C:解码音视频 通讯 微软&IBM 183亿/美金
					iOS					windowPone
					
				Intel
					CPU
		
		非关系型数据库
			

### 安装及启动
	1、服务端先要安装
	
	2、启动我们数据库的服务端
		前提:
			2.1 创建一个空的存储数据的文件夹
			
			2.2 设置我们mongodb环境变量
			
		启动:(三种方式)
			1.打开终端输入
				安装的MongoDB是64位: mongod --dbpath c:/mongodb_datas
				
				安装的MongoDB是32位: mongod --dbpath c:/mongodb_datas --journal  --storageEngine=mmapv1
				
			2.把上面的指令做成批处理文件

### 使用图形化的客户端体验数据库中数据的操作
	Excel                  Mongodb
  	创建一个空白工作簿	   手工创建一个空白数据库
  	新建一个表单			   在数据下面创建集合
  	新建一条数据			   在集合中创建一条文档
	

### Node中如何操作数据库中的数据【掌握】
	mongodb
	
	参考:
		https://www.npmjs.com/package/mongodb

------------------------

# 补充

## 如何解决npm下载慢的问题

	1、安装cnpm 这个全局包，以后下载包就用cnpm
		cnpm i xxx --save
		
	2、把npm默认下载的地址，改为淘宝的地址
	
## 通过require去加载第三方包时候的查找规律
	他会首先在自己目录下找node_modules，如果没找到，去上一级，一次类推，直到找到node_modules，去他里面找那个要加载的包，如果都没找到，直接报

-----------------------