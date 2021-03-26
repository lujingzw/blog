(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{458:function(v,_,t){"use strict";t.r(_);var s=t(15),r=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"数据链路层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据链路层"}},[v._v("#")]),v._v(" 数据链路层")]),v._v(" "),t("p",[t("strong",[v._v("数据链路（data link）")]),v._v("：除了物理线路外，还必须有通信协议来控制这些数据的传输。若把实现这些协议的硬件和软件加到链路上，就构成了数据链路。")]),v._v(" "),t("h2",{attrs:{id:"数据链路层基本概念及基本问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据链路层基本概念及基本问题"}},[v._v("#")]),v._v(" 数据链路层基本概念及基本问题")]),v._v(" "),t("h3",{attrs:{id:"基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[v._v("#")]),v._v(" 基本概念")]),v._v(" "),t("h4",{attrs:{id:"数据链路层信道类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据链路层信道类型"}},[v._v("#")]),v._v(" 数据链路层信道类型")]),v._v(" "),t("ol",[t("li",[v._v("点到点信道。")]),v._v(" "),t("li",[v._v("广播信道。")])]),v._v(" "),t("h4",{attrs:{id:"链路与数据链路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#链路与数据链路"}},[v._v("#")]),v._v(" 链路与数据链路")]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("链路（link）")]),v._v("：是一条点到点的物理线路段，中间没有任何其它的交换节点。\n"),t("ul",[t("li",[v._v("一条链路只是一条通路的一个组成部分")])])]),v._v(" "),t("li",[t("strong",[v._v("数据链路（data link）")]),v._v("：除了物理线路外，还必须有通信协议来控制这些数据的传输。若把实现这些协议的硬件和软件加到链路上，就构成了数据链路。\n"),t("ul",[t("li",[v._v("现最常用的方法就是使用适配器（即网卡）来实现这些协议的硬件和软件。")]),v._v(" "),t("li",[v._v("一般的适配器都包括了数据链路层和物理层这两层的功能。")])])])]),v._v(" "),t("h4",{attrs:{id:"数据链路层传输的是帧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据链路层传输的是帧"}},[v._v("#")]),v._v(" 数据链路层传输的是"),t("em",[v._v("帧")])]),v._v(" "),t("p",[v._v("常常在两个对等的数据链路层之间画出一个数字管道，而在这条数字管道上传输的数据单位是帧。")]),v._v(" "),t("ol",[t("li",[v._v("将网络层的数据，加上帧头、帧尾、物理层地址、校验值")])]),v._v(" "),t("h3",{attrs:{id:"三个基本问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三个基本问题"}},[v._v("#")]),v._v(" 三个基本问题")]),v._v(" "),t("h5",{attrs:{id:"封装成帧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#封装成帧"}},[v._v("#")]),v._v(" 封装成帧")]),v._v(" "),t("p",[v._v("【"),t("strong",[v._v("概念")]),v._v("】：")]),v._v(" "),t("ol",[t("li",[v._v("封装成帧就是在一段数据的前后分别添加首部和尾部，然后就构成了一个帧。确定帧的界限。")]),v._v(" "),t("li",[v._v("首部和尾部的一个重要作用就是进行帧定界。")])]),v._v(" "),t("img",{attrs:{src:"https://raw.githubusercontent.com/coderlyu/au-blog/master/docs/.vuepress/public/images/blogs/data-1.png",alt:"图片"}}),v._v(" "),t("p",[v._v("【"),t("strong",[v._v("举例")]),v._v("】：用控制字符进行帧定界的方法举例")]),v._v(" "),t("ul",[t("li",[v._v("试想：帧还未发送完，发送端出来问题，只能重发该帧。接收端却收到了前面的“半截子帧”，它会抛弃吗？为什么？")])]),v._v(" "),t("img",{attrs:{src:"https://raw.githubusercontent.com/coderlyu/au-blog/master/docs/.vuepress/public/images/blogs/data-2.png",alt:"图片"}}),v._v(" "),t("p",[v._v("【解答查看透明传输和查错控制】")]),v._v(" "),t("h5",{attrs:{id:"透明传输"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#透明传输"}},[v._v("#")]),v._v(" 透明传输")]),v._v(" "),t("p",[v._v("【"),t("strong",[v._v("上面的举例")]),v._v("】"),t("br"),v._v("\n若传输的数据是 ASCII 码中“可打印字符（共 95 个）”集时，一切正常。"),t("br"),v._v("\n若传输的数据不是仅由“可打印字符”组成时，就会出现问题，如下图：")]),v._v(" "),t("img",{attrs:{src:"https://raw.githubusercontent.com/coderlyu/au-blog/master/docs/.vuepress/public/images/blogs/data-3.png",alt:"图片"}}),v._v(" "),t("p",[v._v("【"),t("strong",[v._v("解决方法")]),v._v("】：")]),v._v(" "),t("ol",[t("li",[v._v("发送端的数据链路层在数据中出现控制字符“"),t("strong",[v._v("SOH")]),v._v("”或“"),t("strong",[v._v("EOT")]),v._v("”的前面插入一个转义字符“"),t("strong",[v._v("ESC")]),v._v("”（其十六进制编码是 1B）")]),v._v(" "),t("li",[t("strong",[v._v("字节填充")]),v._v("或"),t("strong",[v._v("字符填充")]),v._v(" --- 接收端的数据链路层在将数据送往网络层之前删除插入的"),t("strong",[v._v("转义字符")]),v._v("。")]),v._v(" "),t("li",[v._v("如果转义字符也出现数据当中，那么应在转义字符前插入一个转义字符。当接收端收到连续的两个转义字符时，就删除其中前面的一个。")])]),v._v(" "),t("img",{attrs:{src:"https://raw.githubusercontent.com/coderlyu/au-blog/master/docs/.vuepress/public/images/blogs/data-4.png",alt:"图片"}}),v._v(" "),t("h5",{attrs:{id:"查错控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查错控制"}},[v._v("#")]),v._v(" 查错控制")]),v._v(" "),t("p",[v._v("【"),t("strong",[v._v("概念")]),v._v("】：")]),v._v(" "),t("ol",[t("li",[v._v("传输过程中可能会发送"),t("strong",[v._v("比特查错")]),v._v("：1 可能会变成 0 而 0 也可能变成 1。")]),v._v(" "),t("li",[v._v("在一段时间内，传输错误的比特占所传输比特总数的比率称为"),t("strong",[v._v("误码率")]),v._v("BER（Bit Error Rate）。")]),v._v(" "),t("li",[v._v("误码率与信噪比有很大的关系。")]),v._v(" "),t("li",[v._v("为了保证数据传输的可靠性，在计算机网络传输数据时，必须采用各种查错检测措施。")])]),v._v(" "),t("h5",{attrs:{id:"【帧检验】"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#【帧检验】"}},[v._v("#")]),v._v(" 【"),t("strong",[v._v("帧检验")]),v._v("】：")]),v._v(" "),t("ul",[t("li",[v._v("循坏冗余检验（CRC）的计算过程")])]),v._v(" "),t("img",{attrs:{src:"https://raw.githubusercontent.com/coderlyu/au-blog/master/docs/.vuepress/public/images/blogs/data-5.png",alt:"图片"}}),v._v(" "),t("p",[v._v("【"),t("strong",[v._v("分析")]),v._v("】"),t("br"),v._v("\n在该图中，要传输的数据为红色部分（"),t("strong",[v._v("101001")]),v._v("），因为除数为（"),t("strong",[v._v("1101")]),v._v("）四位，所以在被除数（"),t("strong",[v._v("101001")]),v._v("）后面补三个 0，如果除数是五位，则需要在被除数后面补四个 0。余数为"),t("strong",[v._v("001")])]),v._v(" "),t("ul",[t("li",[v._v("最后传送的数据为"),t("strong",[v._v("101001+001")]),v._v("，接收端收到数据后，通过同样的方法，将"),t("strong",[v._v("101001001")]),v._v("与除数"),t("strong",[v._v("1101")]),v._v("计算，最后余数结果如果为 0，则说明数据传输无错，如果不为 0 就说明数据传输出错。")])]),v._v(" "),t("h5",{attrs:{id:"帧检验序列-fcs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#帧检验序列-fcs"}},[v._v("#")]),v._v(" 帧检验序列 FCS")]),v._v(" "),t("ul",[t("li",[v._v("在数据后面添加上的冗余码称为"),t("strong",[v._v("帧检验序列 FCS")])]),v._v(" "),t("li",[t("strong",[v._v("循环冗余检验 CRC")]),v._v("和"),t("strong",[v._v("帧检验序列 FCS")]),v._v("并不等同。")])]),v._v(" "),t("ol",[t("li",[v._v("CRC 是一种常用的"),t("strong",[v._v("检错方法")]),v._v("，而 FCS 是添加在数据后面的"),t("strong",[v._v("冗余码")]),v._v("。")]),v._v(" "),t("li",[v._v("FCS 可以用 CRC 这种方法得出，但 CRC 并非用来获得 FCS 的唯一方法。")])]),v._v(" "),t("h5",{attrs:{id:"接收端对收到的每一帧进行-crc-检验"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接收端对收到的每一帧进行-crc-检验"}},[v._v("#")]),v._v(" 接收端对收到的每一帧进行 CRC 检验")]),v._v(" "),t("p",[v._v("【"),t("strong",[v._v("检验")]),v._v("】：")]),v._v(" "),t("ol",[t("li",[v._v("若得出的余数 R=0，则判定这个帧每一查错，就"),t("strong",[v._v("接受")]),v._v("。")]),v._v(" "),t("li",[v._v("若余数 R≠0，则判定这个帧有差错，就"),t("strong",[v._v("丢弃")]),v._v("。"),t("br"),v._v("\n【"),t("strong",[v._v("特点")]),v._v("】：")]),v._v(" "),t("li",[v._v("但这种检测方法并不能确定究竟是哪一个或哪几个比特出现了查错。")]),v._v(" "),t("li",[v._v("只要经过严格的挑选，并使用位数足够多的除数 p，那么出现检测不到的查错的概率就很小很小。")])]),v._v(" "),t("h4",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[v._v("#")]),v._v(" 小结")]),v._v(" "),t("ul",[t("li",[v._v("仅用循坏冗余检验 CRC 查错检测技术只能做到"),t("strong",[v._v("无差错接受")]),v._v("。\n"),t("ol",[t("li",[v._v("“无差错接受”是指：“凡是接受的帧（即"),t("strong",[v._v("不包括丢弃的帧")]),v._v("），我们都能以非常接近于 1 的概率认为这些帧在传输过程中没有产生查错“。也就是说：“凡是接收端数据链路层接受的帧都没有传输查错”（有查错的帧就丢弃而不接受）。")])])]),v._v(" "),t("li",[v._v("要做到“"),t("strong",[v._v("可靠传输")]),v._v("”（即发送什么就收到什么）就必须再加上"),t("strong",[v._v("确认")]),v._v("和"),t("strong",[v._v("重传")]),v._v("机制。\n"),t("ol",[t("li",[v._v("考虑：帧重复、帧丢失、帧乱序的情况。")])])]),v._v(" "),t("li",[v._v("可以说：“CRC 是一种"),t("strong",[v._v("无比特查错")]),v._v("，而不是"),t("strong",[v._v("无传输查错")]),v._v("的检测机制“\n"),t("ol",[t("li",[v._v("OSI/RM 模型的观点：数据链路层要做成无传输查错的！但这种理念目前不被接受！")])])])]),v._v(" "),t("h3",{attrs:{id:"两种情况下的数据链路层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#两种情况下的数据链路层"}},[v._v("#")]),v._v(" 两种情况下的数据链路层")]),v._v(" "),t("h4",{attrs:{id:"使用点对点信道的数据链路层-广域网"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用点对点信道的数据链路层-广域网"}},[v._v("#")]),v._v(" 使用点对点信道的数据链路层（广域网）")]),v._v(" "),t("p",[v._v("这种信道使用一对一的点对点通信方式")]),v._v(" "),t("h5",{attrs:{id:"ppp-协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ppp-协议"}},[v._v("#")]),v._v(" PPP 协议")]),v._v(" "),t("p",[v._v("现在全世界使用得最多的数据链路层协议是"),t("strong",[v._v("点对点协议 PPP")]),v._v("（Point-to-Point Protocol），用户使用拨号电话线接入因特网时，一般都是使用 PPP 协议。"),t("br"),v._v("\n【"),t("strong",[v._v("PPP 协议应该满足的要求")]),v._v("】：")]),v._v(" "),t("ul",[t("li",[v._v("简单 --- 这是"),t("strong",[v._v("首要的要求")])]),v._v(" "),t("li",[v._v("封装成帧")]),v._v(" "),t("li",[v._v("透明性")]),v._v(" "),t("li",[v._v("多种网络层协议")]),v._v(" "),t("li",[v._v("多种类型链路")]),v._v(" "),t("li",[v._v("差错检测")]),v._v(" "),t("li",[v._v("检测连接状态")]),v._v(" "),t("li",[v._v("最大传送单元")]),v._v(" "),t("li",[v._v("网络层地址协商")]),v._v(" "),t("li",[v._v("数据压缩协商"),t("br"),v._v("\n【"),t("strong",[v._v("PPP 协议不需要满足的要求")]),v._v("】：")]),v._v(" "),t("li",[v._v("纠错")]),v._v(" "),t("li",[v._v("流量控制")]),v._v(" "),t("li",[v._v("序号")]),v._v(" "),t("li",[v._v("多点线路")]),v._v(" "),t("li",[v._v("半双工或单工链路")])]),v._v(" "),t("p",[v._v("【"),t("strong",[v._v("PPP 协议的组成")]),v._v("】：")]),v._v(" "),t("ol",[t("li",[v._v("数据链路层协议可以用于异步串行或同步串行介质。")]),v._v(" "),t("li",[v._v("它使用 LCP（链路控制协议）建立并维护数据链路连接。")]),v._v(" "),t("li",[v._v("网络控制协议（NCP）允许在点到点连接上使用多种网络层协议。如图所示：")])]),v._v(" "),t("img",{attrs:{src:"https://raw.githubusercontent.com/coderlyu/au-blog/master/docs/.vuepress/public/images/blogs/data-6.png",alt:"图片"}}),v._v(" "),t("p",[v._v("【"),t("strong",[v._v("字节填充")]),v._v("】："),t("br"),v._v("\n问题：信息字段中出现了标志字段的值，可能会 被误认为是“标志”，怎么办？")]),v._v(" "),t("ul",[t("li",[v._v("将信息字段中出现的每个"),t("strong",[v._v("0X7E")]),v._v("字节转变成为 2 字节序列（"),t("strong",[v._v("0X7D")]),v._v("，"),t("strong",[v._v("0X5E")]),v._v("）")]),v._v(" "),t("li",[v._v("若信息字段中出现一个"),t("strong",[v._v("0X7D")]),v._v("的字节，则将其转变成为 2 字节序列（"),t("strong",[v._v("0X7D")]),v._v(","),t("strong",[v._v("0X5D")]),v._v(").")])]),v._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[v._v("若信息字段中出现 ASCII 码的控制字符（即数值小于"),t("strong",[v._v("0X20")]),v._v("的字符），则在该字符前面要加入一个 0X7D 字节，同时将该字符的编码加以改变。")])]),v._v(" "),t("h4",{attrs:{id:"使用广播信道的数据链路层-局域网"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用广播信道的数据链路层-局域网"}},[v._v("#")]),v._v(" 使用广播信道的数据链路层（局域网）")]),v._v(" "),t("p",[v._v("这种信道使用一对多的广播通信方式，因此过程比较复杂。广播信道上连接的主机很多，因此必须使用专用的共享信道协议来协调这些主机的数据发送")]),v._v(" "),t("h5",{attrs:{id:"共享通信媒体"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#共享通信媒体"}},[v._v("#")]),v._v(" 共享通信媒体")]),v._v(" "),t("p",[v._v("【"),t("strong",[v._v("静态划分信道")]),v._v("】：")]),v._v(" "),t("ul",[t("li",[v._v("频分复用")]),v._v(" "),t("li",[v._v("时分复用")]),v._v(" "),t("li",[v._v("波分复用")]),v._v(" "),t("li",[v._v("码分复用"),t("br"),v._v("\n【"),t("strong",[v._v("动态媒体接入控制（多点接入）")]),v._v("】：")]),v._v(" "),t("li",[v._v("随机接入（主要被以太网采用）")]),v._v(" "),t("li",[v._v("受控接入，如多点线路探询，或轮询。（目前已不被采用）")])]),v._v(" "),t("h5",{attrs:{id:"csma-cd-协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#csma-cd-协议"}},[v._v("#")]),v._v(" CSMA/CD 协议")]),v._v(" "),t("h4",{attrs:{id:"局域网的特点与优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#局域网的特点与优点"}},[v._v("#")]),v._v(" 局域网的特点与优点：")]),v._v(" "),t("p",[v._v("【"),t("strong",[v._v("特点")]),v._v("】：")]),v._v(" "),t("ol",[t("li",[v._v("网络为一个单位所拥有，且地理范围和站点数目有限。")])]),v._v(" "),t("p",[v._v("【"),t("strong",[v._v("优点")]),v._v("】：")]),v._v(" "),t("ol",[t("li",[v._v("具有"),t("strong",[v._v("广播功能")]),v._v("，从一个站点可很方便地访问全网。局域网上的主机可共享连接在局域网上的各种硬件和软件资源。")]),v._v(" "),t("li",[v._v("便于系统的扩展和逐渐地演变，各设备的位置可灵活调整和改变。")]),v._v(" "),t("li",[v._v("提高了系统的可靠性、可用性和生存性。")])]),v._v(" "),t("h2",{attrs:{id:"以太局域网-以太网"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#以太局域网-以太网"}},[v._v("#")]),v._v(" 以太局域网（以太网）")]),v._v(" "),t("h3",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[v._v("#")]),v._v(" 概述")]),v._v(" "),t("h4",{attrs:{id:"以太网与数据链路层的两个子层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#以太网与数据链路层的两个子层"}},[v._v("#")]),v._v(" 以太网与数据链路层的两个子层")]),v._v(" "),t("p",[v._v("为了使数据链路层能更好地适应多种局域网标准。802 委员会就将局域网的数据链路层拆 成两个子层：")]),v._v(" "),t("ol",[t("li",[v._v("逻辑链路控制 LLC 子层")]),v._v(" "),t("li",[v._v("媒体接入控制 MAC 子层"),t("br"),v._v("\n与接入到传输媒体有关的内容都放在 MAC 子层，而 LLC 子层与传输媒体无关，不管采用何种协议的局域网对 LLC 子层来说都是透明的。")])]),v._v(" "),t("h3",{attrs:{id:"集线器的一些特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集线器的一些特点"}},[v._v("#")]),v._v(" 集线器的一些特点")]),v._v(" "),t("p",[v._v("集线器是使用电子器件来模拟实际电缆线的工作，因此整个系统仍然像一个传统的以太网那样运行。集线器使用了大规模集成电路芯片，因此这样的硬件设备的可靠性已大大提高了。"),t("br"),v._v("\n使用集线器的以太网在逻辑上仍是一个总线网，个工作站使用的还是 CSMA/CD 洗衣，并共享逻辑上的总线。"),t("br"),v._v("\n集线器很像一个多接口的转发器，工作在物理层。")]),v._v(" "),t("h3",{attrs:{id:"信道利用率"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#信道利用率"}},[v._v("#")]),v._v(" 信道利用率")]),v._v(" "),t("p",[v._v("以太网的信道被占用的情况：")]),v._v(" "),t("ol",[t("li",[v._v("争用期长度为 2π，即端到端传播时延的两倍。检测到碰撞后不发送干扰信号。")]),v._v(" "),t("li",[v._v("帧长为 L（bit），数据发送速率为 C（b/s），因此帧的发送时间为 L/C = T。（s）。")])]),v._v(" "),t("h3",{attrs:{id:"mac-层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac-层"}},[v._v("#")]),v._v(" MAC 层")]),v._v(" "),t("h4",{attrs:{id:"mac-层的硬件地址-mac-地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac-层的硬件地址-mac-地址"}},[v._v("#")]),v._v(" MAC 层的硬件地址（MAC 地址）")]),v._v(" "),t("p",[v._v("在局域网中，"),t("strong",[v._v("硬件地址")]),v._v("又称为"),t("strong",[v._v("物理地址")]),v._v("，或"),t("strong",[v._v("MAC 地址")]),v._v("。"),t("br"),v._v("\n802 标准所说的“地址”严格地讲应当是每一个站的“"),t("strong",[v._v("名字")]),v._v("”或“"),t("strong",[v._v("标识符")]),v._v("”。"),t("br"),v._v("\n但鉴于大家早已习惯了将这种 48 位的“名字”称为“地址”，所以本书也采用这种习惯用法，尽管这种说法并不太严格。")]),v._v(" "),t("ul",[t("li",[v._v("IEEE 的"),t("strong",[v._v("注册管理机构")]),v._v("RA 负责向厂家分配地址字段的前三个字节（即高位 24 位）")]),v._v(" "),t("li",[v._v("地址字段中的后三个字节（即低位 24 位）由厂家自行指派，称为"),t("strong",[v._v("扩展标识符")]),v._v("，必须保证生产出的适配器没有重复地址。")]),v._v(" "),t("li",[v._v("一个地址块可以生产 2^24 个不同的地址。这种 48 位地址称为 MAC-48，它的通用名称是 EUI-48.")]),v._v(" "),t("li",[v._v("“MAC 地址”实际上就是适配器地址或适配器标识符 EUI-48。 #####适配器检查 MAC 地址"),t("br"),v._v("\n适配器从网络上每收到一个 MAC 帧就首先用硬件检查 MAC 帧中的 MAC 地址")])]),v._v(" "),t("ol",[t("li",[v._v("如果是发往本站的帧则收下，然后再进行其他的处理。")]),v._v(" "),t("li",[v._v("否则就将此帧丢弃，不再进行其他的处理。"),t("br"),v._v("\n“发往本站的帧”包括以下三种帧：")]),v._v(" "),t("li",[v._v("单播帧（一对一）")]),v._v(" "),t("li",[v._v("广播帧（一对全体）")]),v._v(" "),t("li",[v._v("多播帧（一对多）")])]),v._v(" "),t("h2",{attrs:{id:"扩展以太网"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扩展以太网"}},[v._v("#")]),v._v(" 扩展以太网")]),v._v(" "),t("h3",{attrs:{id:"在数据链路层考虑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在数据链路层考虑"}},[v._v("#")]),v._v(" 在数据链路层考虑")]),v._v(" "),t("p",[v._v("在数据链路层扩展局域网是使用"),t("strong",[v._v("网桥")]),v._v("。"),t("br"),v._v("\n网桥工作咋数据链路层，它根据 MAC 帧的目的地址对收到的帧进行转发。"),t("br"),v._v("\n网桥具有过滤帧的功能。当网桥收到一个帧时，并不是向所有的转口转发此帧，而是先检查此帧的目的 MAC 地址，然后再确定将该帧转发到哪一个接口。")]),v._v(" "),t("h2",{attrs:{id:"高速以太网"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高速以太网"}},[v._v("#")]),v._v(" 高速以太网")])])}),[],!1,null,null,null);_.default=r.exports}}]);