(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{729:function(e,r,v){"use strict";v.r(r);var s=v(14),_=Object(s.a)({},(function(){var e=this,r=e.$createElement,v=e._self._c||r;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"_048-redis-的-lru-缓存清除算法讲解以及相关配置使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_048-redis-的-lru-缓存清除算法讲解以及相关配置使用"}},[e._v("#")]),e._v(" 048. redis 的 LRU 缓存清除算法讲解以及相关配置使用")]),e._v(" "),v("p",[e._v("多级缓存架构，缓存数据生产服务监听各个数据源服务的数据变更的消息，\n得到消息之后，然后调用接口拉去数据，将拉取到的数据，写入本地 ehcache 缓存一份，\n上一章节 spring boot 整合并演示过")]),e._v(" "),v("p",[e._v("数据还会写入 redis 分布式缓存中一份，你不断的将数据写入 redis，然而 redis 的内存是有限的，\n每个 redis 实例最大一般也就是设置 10G，当数据写入的量超过了 redis 能承受的范围之后，\n该怎么玩儿呢？")]),e._v(" "),v("p",[e._v("redis 是会在数据达到一定程度之后，超过了一个最大的限度之后，就会将数据进行一定的清理，\n从内存中清理掉一些数据，只有清理掉一些数据之后，才能将新的数据写入内存中")]),e._v(" "),v("h2",{attrs:{id:"lru-算法概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#lru-算法概述"}},[e._v("#")]),e._v(" LRU 算法概述")]),e._v(" "),v("p",[e._v("LRU：Least Recently Used 最近最少使用算法")]),e._v(" "),v("p",[e._v("redis 默认情况下就是使用 LRU 策略的，因为内存是有限的，但是如果你不断地往 redis 里面写入数据，\n那肯定是没法存放下所有的数据在内存的（这个默认貌似不太对，在配置文件中的默认配置不是 LRU）")]),e._v(" "),v("p",[e._v("将最近一段时间内，最少使用的一些数据给干掉。比如说有一个 key，在最近 1 个小时内，\n只被访问了一次; 还有一个 key 在最近 1 个小时内，被访问了 1 万次，\n当内存满的时候，那么 1 小时内只被访问了 1 次的那条数据将会被清理掉")]),e._v(" "),v("h2",{attrs:{id:"缓存清理设置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缓存清理设置"}},[e._v("#")]),e._v(" 缓存清理设置")]),e._v(" "),v("p",[e._v("配置文件：redis.conf")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("maxmemory：设置 redis 用来存放数据的最大的内存大小")]),e._v(" "),v("p",[e._v("一旦超出这个内存大小之后，就会立即使用 LRU 算法清理掉部分数据")]),e._v(" "),v("p",[e._v("如果用 LRU，那么就是将最近最少使用的数据从缓存中清除出去")]),e._v(" "),v("p",[e._v("对于 64 bit 的机器，如果 maxmemory 设置为 0，那么就默认不限制内存的使用，直到耗尽机器中所有的内存为止;\n但是对于 32 bit 的机器，有一个隐式的限制就是 3GB")])]),e._v(" "),v("li",[v("p",[e._v("maxmemory-policy 可以设置内存达到最大限制后，采取什么策略来处理")]),e._v(" "),v("ol",[v("li",[e._v("noeviction: 如果内存使用达到了 maxmemory，client 还要继续写入数据，那么就直接报错给客户端")]),e._v(" "),v("li",[e._v("allkeys-lru: 就是我们常说的 LRU 算法，移除掉最近最少使用的那些 keys 对应的数据")]),e._v(" "),v("li",[e._v("volatile-lru: 也是采取 LRU 算法，但是仅仅针对那些设置了指定存活时间（TTL）的 key 才会清理掉")]),e._v(" "),v("li",[e._v("allkeys-random: 随机选择一些 key 来删除掉")]),e._v(" "),v("li",[e._v("volatile-random: 随机选择一些设置了 TTL 的 key 来删除掉")]),e._v(" "),v("li",[e._v("volatile-ttl: 移除掉部分 keys，选择那些 TTL 时间比较短的 keys")])])])]),e._v(" "),v("p",[e._v("对于以上的解释在配置文件中有英文的说明，和上面的基本上一致。")]),e._v(" "),v("p",[e._v("TTL：也就是开发中常说的过期时间，redis 中支持给 key 配置 ttl")]),e._v(" "),v("p",[e._v("这边拓展一下思路，对技术的研究，一旦将一些技术研究的比较透彻之后，就喜欢横向对比底层的一些原理，\n玩儿大数据的人知道实时计算领域中 storm 比较流行，storm 有很多的流分组的一些策略，\n按 shuffle 分组、global 全局分组、direct 直接分组、fields 按字段值 hash 后分组，\n分组策略也很多，但是真正公司里 99% 的场景下，使用的也就是 shuffle 和 fields 两种策略")]),e._v(" "),v("p",[e._v("redis 也一样，给了这么多种乱七八糟的缓存清理的算法，其实真正常用的可能也就那么一两种，allkeys-lru 是最常用的")]),e._v(" "),v("h2",{attrs:{id:"缓存清理的流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缓存清理的流程"}},[e._v("#")]),e._v(" 缓存清理的流程")]),e._v(" "),v("ol",[v("li",[e._v("客户端执行数据写入操作")]),e._v(" "),v("li",[e._v("redis server 接收到写入操作之后，检查 maxmemory 的限制，如果超过了限制，那么就根据对应的 policy 清理掉部分数据")]),e._v(" "),v("li",[e._v("写入操作完成执行")])]),e._v(" "),v("h2",{attrs:{id:"redis-的-lru-近似算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-的-lru-近似算法"}},[e._v("#")]),e._v(" redis 的 LRU 近似算法")]),e._v(" "),v("p",[e._v("科普一个相对来说稍微高级一丢丢的知识点")]),e._v(" "),v("p",[e._v("redis 采取的是 LRU 近似算法，也就是对 keys 进行采样，然后在采样结果中进行数据清理")]),e._v(" "),v("p",[e._v("redis 3.0 开始，在 LRU 近似算法中引入了 pool 机制，表现可以跟真正的 LRU 算法相当，\n但是还是有所差距的，不过这样可以减少内存的消耗")]),e._v(" "),v("p",[e._v("redis LRU 算法，是采样之后再做 LRU 清理的，跟真正的、传统、全量的 LRU 算法是不太一样的")]),e._v(" "),v("p",[e._v("maxmemory-samples：比如 5，可以设置采样的大小，如果设置为 10，那么效果会更好，不过也会耗费更多的 CPU 资源")]),e._v(" "),v("p",[e._v("maxmemory-samples 在配置文件中也有一部分解释，根据机翻来看，设置 5 会检查 5 个键来进行对比检查，\n所以说是近似的，但是具体的思路没有提及到")])])}),[],!1,null,null,null);r.default=_.exports}}]);