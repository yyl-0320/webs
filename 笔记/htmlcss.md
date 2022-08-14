# html/css

## 一.文本属性

文字整体为上边距，下边距和文本。

## 二.元素显示模式

###### 行内元素，块元素，行内块元素

行内元素：`<h1><p><div><ul><ol><li>`

块元素:`<a><strong><b><em><del><s><ins><u><span>`

行内块元素：`<img/><input/><td>`

## 三.盒子模型

外边距，边框，内边距

![image-20220724224745320](C:\Users\15461\AppData\Roaming\Typora\typora-user-images\image-20220724224745320.png)

## 四.布局方式

普通流，浮动，定位

### 1.普通流

### 2.浮动

###### 特性：脱标，一行显示，行内块元素特性，搭配标准流的父元素。

###### 浮动的元素会压住后面的标准流，但不会影响前面的标准流。

###### 清除浮动：`clear：both`  可以让父元素检测到高度

1.额外标签法：在最后一个浮动元素后加`<div style="clear:both"></div>`

2.父元素添加`overflow：`

3.after伪元素

4.双伪元素

### 3.定位

#### 1.定位模式

![image-20220724224538160](C:\Users\15461\AppData\Roaming\Typora\typora-user-images\image-20220724224538160.png)

![image-20220724224506465](C:\Users\15461\AppData\Roaming\Typora\typora-user-images\image-20220724224506465.png)

##### 1.静态定位

![image-20220725173118099](C:\Users\15461\AppData\Roaming\Typora\typora-user-images\image-20220725173118099.png)

##### 2.相对定位

![image-20220725173251854](C:\Users\15461\AppData\Roaming\Typora\typora-user-images\image-20220725173251854.png)

##### 3.绝对定位

![image-20220725173538177](C:\Users\15461\AppData\Roaming\Typora\typora-user-images\image-20220725173538177.png)

##### 4.子绝父相

![image-20220725174011240](C:\Users\15461\AppData\Roaming\Typora\typora-user-images\image-20220725174011240.png)

##### 5.固定定位

![image-20220725174932655](C:\Users\15461\AppData\Roaming\Typora\typora-user-images\image-20220725174932655.png)
