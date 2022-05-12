### CSS的引入
## 第一种:内联样式表
###### 直接写在标签的内部
- CSS 基础语法
    - 属性名 ：属性 ；
    - width  ：300px；
        - px ：像素（单位）
- width -> 宽度
- height -> 高度
- background-color -> 背景颜色
## 第二种：内部样式表
#### 需要写在head标签内部
#####  CSS 选择器
- 1： 标签名选择器
```
<style>
    div{
	width: 300px;
	height: 300px;
	background-color: red;
	}
</style>
```
- 2：类(class)选择器
```
<style>
     .a{
	width: 300px;
	height: 300px;
	background-color: red;
        }
</style>
```
- 3: ID 选择器
```
<style>
#div_1{
	width: 300px;
	height: 300px;
	background-color: red;
       }
</style>
```
**注意：**

1. 标签名选择器的作用范围
    - 所有的"同标签"
2. 类选择器的作用范围： 
    - 所有同类名的标签
    - 类选择器可以被多个标签同时使用
3. ID 选择器的作用范围（身份证号）
    - 具有之个 ID 名称的唯一的标签
    - ID 选择器只允许作用在一个标签之上
4. 多用 class      少用 id
### 选择器优先级
- 谁控制得越精确，谁的优先级就越高
- 标签名 ：整个标签
- CLASS ：相同的类名
- ID ： 一个 ID 名称
- 内联样式表 > ID 选择器 > 类选择器 > 标签名选择器
## 第三种：外部样式表
- 需要写在 head 标签的内部
- <link> 
    - rel （relationship） 关系
    - stylesheet  样式表
    - type  类型
    - href  链接的路径
        - /  链接下一级 
        - .. 链接上一级
### 引入方式的优先级
- 当选择器的优先级相同的时候，谁后加载谁生效
- 当选择器的优先级不同的时候，谁的优先级高谁生效