(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{452:function(s,t,a){s.exports=a.p+"assets/img/markdown-img-paste-20190328214951341.586a2733.png"},453:function(s,t,a){s.exports=a.p+"assets/img/markdown-img-paste-20190328215011777.b2c960d5.png"},979:function(s,t,a){"use strict";a.r(t);var e=a(14),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_032-redis-cluster-的核心原理分析：gossip-通信、jedis-smart-定位、主备切换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_032-redis-cluster-的核心原理分析：gossip-通信、jedis-smart-定位、主备切换"}},[s._v("#")]),s._v(" 032. redis cluster 的核心原理分析：gossip 通信、jedis smart 定位、主备切换")]),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#节点间的内部通信机制"}},[s._v("节点间的内部通信机制")]),e("ul",[e("li",[e("a",{attrs:{href:"#基础通信原理"}},[s._v("基础通信原理")])]),e("li",[e("a",{attrs:{href:"#gossip-协议"}},[s._v("gossip 协议")])]),e("li",[e("a",{attrs:{href:"#ping-消息深入"}},[s._v("ping 消息深入")])])])]),e("li",[e("a",{attrs:{href:"#面向集群的-jedis-内部实现原理"}},[s._v("面向集群的 jedis 内部实现原理")]),e("ul",[e("li",[e("a",{attrs:{href:"#基于重定向的客户端"}},[s._v("基于重定向的客户端")])]),e("li",[e("a",{attrs:{href:"#smart-jedis"}},[s._v("smart jedis")])])])]),e("li",[e("a",{attrs:{href:"#高可用性与主备切换原理"}},[s._v("高可用性与主备切换原理")]),e("ul",[e("li",[e("a",{attrs:{href:"#与哨兵比较"}},[s._v("与哨兵比较")])])])])])]),e("p"),s._v(" "),e("h2",{attrs:{id:"节点间的内部通信机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#节点间的内部通信机制"}},[s._v("#")]),s._v(" 节点间的内部通信机制")]),s._v(" "),e("h3",{attrs:{id:"基础通信原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础通信原理"}},[s._v("#")]),s._v(" 基础通信原理")]),s._v(" "),e("h4",{attrs:{id:"redis-cluster-节点间采取-gossip-协议进行通信"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-cluster-节点间采取-gossip-协议进行通信"}},[s._v("#")]),s._v(" redis cluster 节点间采取 gossip 协议进行通信")]),s._v(" "),e("p",[s._v("gossip：互相之间不断通信，保持整个集群所有节点的数据是完整的")]),s._v(" "),e("p",[e("img",{attrs:{src:a(452),alt:""}})]),s._v(" "),e("p",[s._v("而集中式是将集群元数据（节点信息，故障，等等）集中存储在某个节点上；")]),s._v(" "),e("p",[s._v("经典的集中式中间件 zookeeper")]),s._v(" "),e("p",[e("img",{attrs:{src:a(453),alt:""}})]),s._v(" "),e("p",[s._v("他们基本上都用于维护集群的元数据")]),s._v(" "),e("p",[s._v("集中式：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("优点：数据更新及时，时效好")]),s._v(" "),e("p",[s._v("元数据的更新和读取，时效性非常好，一旦元数据出现了变更，立即就更新到集中式的存储中，其他节点读取的时候立即就可以感知到;")])]),s._v(" "),e("li",[e("p",[s._v("缺点：数据更新压力集中")]),s._v(" "),e("p",[s._v("所有的元数据的跟新压力全部集中在一个地方，可能会导致元数据的存储有压力")])])]),s._v(" "),e("p",[s._v("gossip：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("优点：数据更新压力分散")]),s._v(" "),e("p",[s._v("元数据的更新比较分散，不是集中在一个地方，更新请求会陆陆续续，打到所有节点上去更新，有一定的延时，降低了压力;")])]),s._v(" "),e("li",[e("p",[s._v("缺点：数据更新延迟")]),s._v(" "),e("p",[s._v("元数据更新有延时，可能导致集群的一些操作会有一些滞后")])])]),s._v(" "),e("p",[s._v("可见 集中式 与 gossip 的优缺点是相互的。")]),s._v(" "),e("p",[s._v("gossip 的延迟在我们上一章节中迁移 slots 时（reshard），去做另外一个操作，会发现 configuration error，需要等待一会才能达成一致，配置数据才能同步成功")]),s._v(" "),e("h4",{attrs:{id:"_10000-端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10000-端口"}},[s._v("#")]),s._v(" 10000 端口")]),s._v(" "),e("p",[s._v("每个节点都有一个专门用于节点间通信的端口，就是自己提供服务的端口号 + 10000，比如 7001，那么用于节点间通信的就是 17001 端口")]),s._v(" "),e("p",[s._v("每个节点每隔一段时间都会往另外几个节点发送 ping 消息，同时其他几点接收到 ping 之后返回 pong")]),s._v(" "),e("h4",{attrs:{id:"交换的信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#交换的信息"}},[s._v("#")]),s._v(" 交换的信息")]),s._v(" "),e("p",[s._v("交换的信息有：故障信息、节点的增加和移除、hash slot 信息，等等")]),s._v(" "),e("h3",{attrs:{id:"gossip-协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gossip-协议"}},[s._v("#")]),s._v(" gossip 协议")]),s._v(" "),e("p",[s._v("gossip 协议包含多种消息，包括 ping、pong、meet、fail，等等")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("meet:")]),s._v(" "),e("p",[s._v("某个节点发送 meet 给新加入的节点，让新节点加入集群中，然后新节点就会开始与其他节点进行通信")]),s._v(" "),e("p",[s._v("redis-trib.rb add-node")]),s._v(" "),e("p",[s._v("其实内部就是发送了一个 gossip meet 消息，给新加入的节点，通知那个节点去加入我们的集群")])]),s._v(" "),e("li",[e("p",[s._v("ping:")]),s._v(" "),e("p",[s._v("每个节点都会频繁给其他节点发送 ping，其中包含自己的状态还有自己维护的集群元数据，互相通过 ping 交换元数据")]),s._v(" "),e("p",[s._v("每个节点每秒都会频繁发送 ping 给其他的集群，ping，频繁的互相之间交换数据，互相进行元数据的更新")])]),s._v(" "),e("li",[e("p",[s._v("pong:")]),s._v(" "),e("p",[s._v("返回 ping 和 meet，包含自己的状态和其他信息，也可以用于信息广播和更新")])]),s._v(" "),e("li",[e("p",[s._v("fail:")]),s._v(" "),e("p",[s._v("某个节点判断另一个节点 fail 之后，就发送 fail 给其他节点，通知其他节点，指定的节点宕机了")])])]),s._v(" "),e("h3",{attrs:{id:"ping-消息深入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ping-消息深入"}},[s._v("#")]),s._v(" ping 消息深入")]),s._v(" "),e("p",[s._v("ping 很频繁，而且要携带一些元数据，所以可能会加重网络负担")]),s._v(" "),e("p",[s._v("每个节点每秒会执行 10 次 ping，每次会选择 5 个最久没有通信的其他节点")]),s._v(" "),e("p",[s._v("当然如果发现某个节点通信延时达到了 cluster_node_timeout / 2，那么立即发送 ping，避免数据交换延时过长，落后的时间太长了")]),s._v(" "),e("p",[s._v("比如说，两个节点之间都 10 分钟没有交换数据了，那么整个集群处于严重的元数据不一致的情况，就会有问题")]),s._v(" "),e("p",[s._v("所以 cluster_node_timeout 可以调节，如果调节比较大，那么会降低发送的频率")]),s._v(" "),e("p",[s._v("每次 ping，一个是带上自己节点的信息，还有就是带上 1/10 其他节点的信息，发送出去，进行数据交换")]),s._v(" "),e("p",[s._v("至少包含 3 个其他节点的信息，最多包含总节点 -2 个其他节点的信息")]),s._v(" "),e("h2",{attrs:{id:"面向集群的-jedis-内部实现原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面向集群的-jedis-内部实现原理"}},[s._v("#")]),s._v(" 面向集群的 jedis 内部实现原理")]),s._v(" "),e("p",[s._v("后面会使用 jedis，它是 redis 的 java client 客户端，支持 redis cluster")]),s._v(" "),e("p",[s._v("这里会讲解 jedis cluster api 与 redis cluster 集群交互的一些基本原理")]),s._v(" "),e("h3",{attrs:{id:"基于重定向的客户端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于重定向的客户端"}},[s._v("#")]),s._v(" 基于重定向的客户端")]),s._v(" "),e("p",[s._v("redis-cli -c，可以提供自动重定的功能，那么对于 jedis 来说，下面是他的实现原理")]),s._v(" "),e("h4",{attrs:{id:"请求重定向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求重定向"}},[s._v("#")]),s._v(" 请求重定向")]),s._v(" "),e("p",[s._v("客户端可能会挑选任意一个 redis 实例去发送命令，每个 redis 实例接收到命令，都会计算 key 对应的 hash slot")]),s._v(" "),e("p",[s._v("如果在本地就在本地处理，否则返回 moved 给客户端，让客户端进行重定向")]),s._v(" "),e("p",[s._v("cluster keyslot mykey，可以查看一个 key 对应的 hash slot 是什么")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eshop-cache01 ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-cli -h 192.168.99.170 -p 7001")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.170:700"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" cluster keyslot myke1\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("12435")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.170:700"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" cluster keyslot myke2\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("240")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("用 redis-cli 的时候，可以加入 -c 参数，支持自动的请求重定向，redis-cli 接收到 moved 之后，会自动重定向到对应的节点执行命令")]),s._v(" "),e("p",[s._v("但是这样会有一个问题，可能会出现大部分命令都会接受到 moved 响应，也就是说可能一次写入会有两次请求，这个就很浪费性能")]),s._v(" "),e("h4",{attrs:{id:"计算-hash-slot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#计算-hash-slot"}},[s._v("#")]),s._v(" 计算 hash slot")]),s._v(" "),e("p",[s._v("计算 hash slot 的算法，就是根据 key 计算 CRC16 值，然后对 16384 取模，拿到对应的 hash slot")]),s._v(" "),e("p",[s._v("用 hash tag 可以手动指定 key 对应的 slot，同一个 hash tag 下的 key，都会在一个 hash slot 中，比如 set mykey1:{100} 和 set mykey2:{100}")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.170:700"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" mykey1:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nOK\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.170:700"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" mykey2:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nOK\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.170:700"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" mykey1 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nOK\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.170:700"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" mykey2 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" MOVED "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("14119")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.172:7005\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.170:700"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" get mykey2\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" MOVED "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("14119")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.172:7005\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.170:700"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" get mykey2:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[s._v("可以看到，这个 tag 相当于你手动指定这个 key 路由到哪一个 solt 上去，那么只要手动了，以后查询也需要手动指定才行，所以这里需要先计算出 hash slot 的值，相当于在 redis 服务端的工作挪动到客户端来做了，这样减少了大量的 moved 请求")]),s._v(" "),e("h4",{attrs:{id:"hash-slot-查找"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hash-slot-查找"}},[s._v("#")]),s._v(" hash slot 查找")]),s._v(" "),e("p",[s._v("节点间通过 gossip 协议进行数据交换，就知道每个 hash slot 在哪个节点上")]),s._v(" "),e("h3",{attrs:{id:"smart-jedis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#smart-jedis"}},[s._v("#")]),s._v(" smart jedis")]),s._v(" "),e("h4",{attrs:{id:"什么是-smart-jedis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是-smart-jedis"}},[s._v("#")]),s._v(" 什么是 smart jedis")]),s._v(" "),e("p",[s._v("基于重定向的客户端，很消耗网络 IO，因为大部分情况下，可能都会出现一次请求重定向，才能找到正确的节点")]),s._v(" "),e("p",[s._v("所以大部分的客户端，比如 java redis 客户端（jedis），就是 smart 的")]),s._v(" "),e("p",[s._v("本地维护一份 hashslot -> node 的映射表，缓存起来，大部分情况下，直接走本地缓存就可以找到 hashslot -> node，不需要通过节点进行 moved 重定向")]),s._v(" "),e("h4",{attrs:{id:"jediscluster-的工作原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jediscluster-的工作原理"}},[s._v("#")]),s._v(" JedisCluster 的工作原理")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("在 JedisCluster 初始化的时候，就会随机选择一个 node，初始化 hashslot -> node 映射表，同时为每个节点创建一个 JedisPool 连接池")])]),s._v(" "),e("li",[e("p",[s._v("每次基于 JedisCluster 执行操作，首先 JedisCluster 都会在本地计算 key的 hashslot，然后在本地映射表找到对应的节点")])]),s._v(" "),e("li",[e("p",[s._v("如果那个 node 正好还是持有那个 hashslot，那么就 ok; 如果说进行了 reshard 这样的操作，可能 hashslot 已经不在那个 node 上了，就会返回 moved")])]),s._v(" "),e("li",[e("p",[s._v("如果 JedisCluter API 发现对应的节点返回 moved，那么利用该节点的元数据，更新本地的 hashslot -> node 映射表缓存")])])]),s._v(" "),e("p",[s._v("重复上面几个步骤，直到找到对应的节点，如果重试超过 5 次，那么就报错 JedisClusterMaxRedirectionException")]),s._v(" "),e("p",[s._v("jedis 老版本，可能会出现在集群某个节点故障还没完成自动切换恢复时，频繁更新 hash slot，频繁 ping 节点检查活跃，导致大量网络 IO 开销")]),s._v(" "),e("p",[s._v("jedis 最新版本，对于这些过度的 hash slot 更新和 ping，都进行了优化，避免了类似问题")]),s._v(" "),e("h4",{attrs:{id:"hashslot-迁移和-ask-重定向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hashslot-迁移和-ask-重定向"}},[s._v("#")]),s._v(" hashslot 迁移和 ask 重定向")]),s._v(" "),e("p",[s._v("如果 hash slot 正在迁移，那么会返回 ask 重定向给 jedis")]),s._v(" "),e("p",[s._v("jedis 接收到 ask 重定向之后，会重新定位到目标节点去执行，但是因为 ask 发生在 hash slot 迁移过程中，所以 JedisCluster API 收到 ask 是不会更新 hashslot 本地缓存")]),s._v(" "),e("p",[s._v("已经可以确定 hashslot 已经迁移完了，访问会返回 moved， 那么是会更新本地 hashslot->node 映射表缓存的")]),s._v(" "),e("h2",{attrs:{id:"高可用性与主备切换原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高可用性与主备切换原理"}},[s._v("#")]),s._v(" 高可用性与主备切换原理")]),s._v(" "),e("p",[s._v("redis cluster 的高可用的原理，几乎跟哨兵是类似的")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("判断节点宕机")]),s._v(" "),e("p",[s._v("如果一个节点认为另外一个节点宕机，那么就是 pfail，主观宕机")]),s._v(" "),e("p",[s._v("如果多个节点都认为另外一个节点宕机了，那么就是 fail，客观宕机，跟哨兵的原理几乎一样，sdown、odown")]),s._v(" "),e("p",[s._v("在 cluster-node-timeout 内，某个节点一直没有返回 pong，那么就被认为 pfail")]),s._v(" "),e("p",[s._v("如果一个节点认为某个节点 pfail 了，那么会在 gossip ping 消息中，ping 给其他节点，如果超过半数的节点都认为 pfail 了，那么就会变成 fail")])]),s._v(" "),e("li",[e("p",[s._v("从节点过滤")]),s._v(" "),e("p",[s._v("对宕机的 master node，从其所有的 slave node 中，选择一个切换成 master node")]),s._v(" "),e("p",[s._v("检查每个 slave node 与 master node 断开连接的时间，如果超过了 cluster-node-timeout * cluster-slave-validity-factor，那么就没有资格切换成 master")]),s._v(" "),e("p",[s._v("这个也是跟哨兵是一样的，从节点超时过滤的步骤")])]),s._v(" "),e("li",[e("p",[s._v("从节点选举")]),s._v(" "),e("p",[s._v("哨兵：对所有从节点进行排序，slave priority，offset，run id")]),s._v(" "),e("p",[s._v("每个从节点，都根据自己对 master 复制数据的 offset，来设置一个选举时间，offset 越大（复制数据越多）的从节点，选举时间越靠前，优先进行选举")]),s._v(" "),e("p",[s._v("所有的 master node 开始 slave 选举投票，给要进行选举的 slave 进行投票，如果大部分 master node（N/2 + 1）都投票给了某个从节点，那么选举通过，那个从节点可以切换成 master")]),s._v(" "),e("p",[s._v("从节点执行主备切换，从节点切换为主节点")])])]),s._v(" "),e("h3",{attrs:{id:"与哨兵比较"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#与哨兵比较"}},[s._v("#")]),s._v(" 与哨兵比较")]),s._v(" "),e("p",[s._v("整个流程跟哨兵相比，非常类似，所以说，redis cluster 功能强大，直接集成了 replication 和 sentinal 的功能")]),s._v(" "),e("p",[s._v("没有办法去给大家深入讲解 redis 底层的设计的细节，核心原理和设计的细节，那个除非单独开一门课，redis 底层原理深度剖析，redis 源码")]),s._v(" "),e("p",[s._v("对于咱们这个架构课来说，主要关注的是架构，不是底层的细节，对于架构来说，核心的原理的基本思路，是要梳理清晰的")])])}),[],!1,null,null,null);t.default=r.exports}}]);