[代码实例](https://jshare.com.cn/course-html/tpVwsA/1/)

### HTML5以前的标签
#### `<abbr>`
行内元素，表示简称或缩写，如果使用title属性，在不同浏览器上表现不一致

#### `<address>`
块级元素，倾斜，联系信息，位于body内（文档的）和位于article内（文章的）不同

#### `<i><b><small>`字体样式元素
行内元素，i倾斜，b加粗，small变小(不同浏览器不一样)

#### `<bdo>`
行内元素，修改默认文本方向

#### `<blockquote><q>`
块级元素，blockquote，块引用，一般包含p标签，cite属性无浏览器支持（搜索引擎可能用到）；行内元素，q，短标记，cite属性无浏览器支持（搜索引擎可能用到）

#### `<em><strong><dfn><code><samp><var><cite><kbd>短语元素`
行内元素，em斜体、强调，strong加粗、强调、重要文本使用，dfn斜体、定义项目，code等宽字体、显示计算机源码，samp从上下文中提取文本，var斜体、定义变量，cite斜体、作品标题，kbd等宽字体、显示键盘文本

#### `<ins><del>`
行内元素，cite和datetime属性无浏览器支持，ins定义新插入部分的文本，del定义已删除部分的文本

#### `<pre>`
块级元素，预格式化文本，等宽字体，保留空格和换行符，内容可包含文本或行内元素，可用链接、图片、水平分割线、符号实体

#### `<sub><sup>`
行内元素，sub下标注，sup上标注

####  `<u>`
行内元素，下划线

#### `<s>`
行内元素，删除线

### HTML5新增的标签
#### `<bdi>(新)`
HTML5新增，IE9+支持，行内元素，文本脱离父元素文本设置方向

#### `<mark>(新)`
HTML5新增，IE9+支持，行内元素，带有标记的文本，yellow背景

#### `<meter>(新)`
HTML5新增，IE不支持，行内元素，度量衡

#### `<progress>(新)`
HTML5新增，IE10+支持，行内元素，任务进度（与JavaScript一起使用）

#### `<wbr>(新)`
HTML5新增，IE不支持，行内元素，规定文本何处添加换行符

#### `<ruby><rt><rp>(新)`
HTML5新增，IE9+支持，行内元素，ruby注释，与rt一起使用，rp可选，定义不支持ruby时的显示    
`<rb><rtc>`研究（应该只有Firefox支持）

#### `<time>(新-暂无支持)`
HTML5新增，IE9+支持，行内元素，定义时间（24小时制）或日期

### HTML5以废除的标签
- `<acronyn>`定义首字母缩写
- `<big>`定义大号字体
- `<center>`定义居中文本
- `<font>`定义文本的字体、尺寸和颜色
- `<strike>`定义加删除线的文本
- `<tt>`定义打印机文本

---
### 代码实例
<iframe width="100%" height="450" src="https://code.hcharts.cn/course-html/tpVwsA/1/share/result,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>