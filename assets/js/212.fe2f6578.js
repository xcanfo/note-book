(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{836:function(s,a,t){"use strict";t.r(a);var n=t(14),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_150-商品详情页动态渲染系统：spring-cloud-之-eureka-注册中心"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_150-商品详情页动态渲染系统：spring-cloud-之-eureka-注册中心"}},[s._v("#")]),s._v(" 150. 商品详情页动态渲染系统：Spring Cloud 之 Eureka 注册中心")]),s._v(" "),t("div",{staticClass:"language-tip 温馨提示 line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("本课程的 spring cloud 教程基本上是官网文档里面的教程，\n所以如果觉得稍显吃力可以参考 [慕课 Spring Cloud 微服务实战笔记](https://github.com/zq99299/essay-note/blob/master/chapter/imooc/spring_cloud/index.md)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"什么是注册中心？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是注册中心？"}},[s._v("#")]),s._v(" 什么是注册中心？")]),s._v(" "),t("ol",[t("li",[s._v("首先有一个 eureka server，服务的注册与发现的中心")]),s._v(" "),t("li",[s._v("可以将你写好的服务注册到 eureka server 上去")]),s._v(" "),t("li",[s._v("别人如果需要调用你的服务，就可以才能够 eureka server 上查找你的服务所在地址，然后调用")])]),s._v(" "),t("h2",{attrs:{id:"eureka-基本原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eureka-基本原理"}},[s._v("#")]),s._v(" eureka 基本原理")]),s._v(" "),t("ol",[t("li",[s._v("服务都会注册到 eureka 的注册表")]),s._v(" "),t("li",[s._v("eureka 有心跳机制，自动检测服务，故障时自动从注册表中摘除")]),s._v(" "),t("li",[s._v("每个服务也会缓存 eureka 的注册表，及时 eureka server 挂掉，每个服务也可以基于本地注册表与其他服务进行通信")]),s._v(" "),t("li",[s._v("如果 eureka server 如果挂掉了，就无法发布新的服务了")])]),s._v(" "),t("h2",{attrs:{id:"搭建项目说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搭建项目说明"}},[s._v("#")]),s._v(" 搭建项目说明")]),s._v(" "),t("p",[s._v("本次练习项目放在 https://github.com/zq99299/cache-eshop.git 上，关于配置请参考该项目")]),s._v(" "),t("p",[s._v("使用工具或相关版本如下：")]),s._v(" "),t("ul",[t("li",[s._v("gradle v4.8.1")]),s._v(" "),t("li",[s._v("spring boot v2.1.6.RELEASE")]),s._v(" "),t("li",[s._v('spring cloud vGreenwich.SR2"')]),s._v(" "),t("li",[s._v("idea 开发")])]),s._v(" "),t("p",[s._v("项目结构：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 由于是微服务，所以暂时把所有的项目放在该仓库下，并上传到 git\n// 如果后续有特殊情况，一定要分仓库才能实现的话，会特殊说明在本地仓库进行试验\n|- cache-eshop : 仓库，只做最基础的通用配置\n  |- cache-eureka-server : 本课要搭建分服务注册中心\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("特别说明：关于 cloud 的使用，请首先"),t("a",{attrs:{href:"https://cloud.spring.io/spring-cloud-static/Greenwich.SR2/single/spring-cloud.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考官网资料"),t("OutboundLink")],1),s._v("，\n大部分的课程讲解都很基础，在官网上就已经有相关教程了")]),s._v(" "),t("h2",{attrs:{id:"eureka-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eureka-server"}},[s._v("#")]),s._v(" eureka-server")]),s._v(" "),t("p",[s._v("eshop-eureka-server/build.gradle")]),s._v(" "),t("div",{staticClass:"language-groovy line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[s._v("plugins "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    id "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.boot'")]),s._v(" version "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2.1.6.RELEASE'")]),s._v("\n    id "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'java'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\napply plugin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'io.spring.dependency-management'")]),s._v("\next "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'springCloudVersion'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"Greenwich.SR2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\ndependencies "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    implementation "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.cloud:spring-cloud-starter-netflix-eureka-server'")]),s._v("\n    testImplementation "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.boot:spring-boot-starter-test'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\ndependencyManagement "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    imports "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        mavenBom "),t("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"org.springframework.cloud:spring-cloud-dependencies:'),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("springCloudVersion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v('"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("p",[s._v("application.yml")]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8761")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("eureka")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("instance")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hostname")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" localhost\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("client")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("registerWithEureka")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("fetchRegistry")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("serviceUrl")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("defaultZone")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("eureka.instance.hostname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("server.port"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/eureka/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("EshopEurekaServerApplication")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mrcode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("eshop"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("eshopeurekaserver")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("boot")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringApplication")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("boot"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("autoconfigure")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringBootApplication")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cloud"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("netflix"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("eureka"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("server")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EnableEurekaServer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@SpringBootApplication")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@EnableEurekaServer")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EshopEurekaServerApplication")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringApplication")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EshopEurekaServerApplication")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("启动之后，访问地址：http://localhost:8761/ 能看到管理界面就算可以了。")]),s._v(" "),t("h2",{attrs:{id:"eureka-client"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eureka-client"}},[s._v("#")]),s._v(" eureka-client")]),s._v(" "),t("p",[s._v("eshop-eurela-client/build.gradle")]),s._v(" "),t("div",{staticClass:"language-groovy line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[s._v("plugins "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    id "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.boot'")]),s._v(" version "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2.1.6.RELEASE'")]),s._v("\n    id "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'java'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\napply plugin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'io.spring.dependency-management'")]),s._v("\n\next "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'springCloudVersion'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"Greenwich.SR2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\ndependencies "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    implementation "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.cloud:spring-cloud-starter-netflix-eureka-client'")]),s._v("\n    implementation "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.boot:spring-boot-starter-web'")]),s._v("\n    testImplementation "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.boot:spring-boot-starter-test'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\ndependencyManagement "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    imports "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        mavenBom "),t("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"org.springframework.cloud:spring-cloud-dependencies:'),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("springCloudVersion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v('"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("p",[s._v("application.yml")]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("eureka")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("client")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("serviceUrl")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("defaultZone")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//localhost"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("8761/eureka/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("EshopEurelaClientApplication")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("cn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mrcode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("eshop"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("eshopeurelaclient")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("beans"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("factory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("boot")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringApplication")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("boot"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("autoconfigure")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringBootApplication")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("web"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bind"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RequestMapping")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("web"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bind"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RestController")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@SpringBootApplication")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RestController")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EshopEurelaClientApplication")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringApplication")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EshopEurelaClientApplication")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${server.port}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" port"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequestMapping")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("home")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello world port "')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" port"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("p",[s._v("启动之后访问地址：http://localhost:9000/ 能看到 "),t("code",[s._v("Hello world port 9000")]),s._v(" 输出就成功了。")]),s._v(" "),t("p",[s._v("而这个时候在服务注册中的界面的 「Instances currently registered with Eureka」一栏中，\n就出现了刚刚启动的 eshop-eurela-client 项目")])])}),[],!1,null,null,null);a.default=e.exports}}]);