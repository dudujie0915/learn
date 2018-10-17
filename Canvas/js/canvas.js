//基本绘图功能
window.onload=function(){
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
	
	//画直线
	context.beginPath();//定义新的路径绘制的动作的开始
	context.moveTo(100,150);//为指定点创建了一个新的子路径
	context.lineTo(388,50);//以上下文点为起点，到方法参数中指定的点之间画一条直线
	context.lineWidth = 15;//设置直线的宽带
	context.strokeStyle = "#c9c";//设置直线的颜色
	context.lineCap = 'round';//支持3种直线端点样式，包括butt(默认),round,square
	context.stroke();//为所画的线赋予颜色，并使其可见，画直线默认为黑色
	//注意：lineCap使用round和square样式的时候，直线长度会增加，具体增加的长度等于线的宽带，如一条长200px,宽10px的直线，如果用这两种样式，每个端点增加了5px,直线的实际长度为210px.
	
	//画弧线
	var x = canvas.width /2;//弧线的x轴坐标
	var y = canvas.height/2;//弧线的y轴坐标,x和y共同组成圆心
	var radius = 75;//半径
	var startAngle = 1.1*Math.PI;//弧度开始的地方
	var endAngle = 1.9*Math.PI;//弧度结束的地方
	var counterClockwise = true;//是否逆时针，默认为false
	context.beginPath();
	context.arc(x,y,radius,startAngle,endAngle,counterClockwise);
	context.lineWidth = 15;
	context.strokeStyle = 'red';
	context.stroke();
	//一条弧线无非就是一个以中心点为圆心，指定半径的圆的一部分。这个圆的一部分就是圆周上，从 startAngle 到 endAngle 的部分，其中 startAngle 和 endAngle 都用弧度来表示。而最后一个方向参数则是指的从 startAngle 到 endAngle 两点之间画线的方向是否为逆时针，默认情况下这个参数是 false，因此也就是顺时针画线。

    //二次曲线
    context.beginPath();
    context.moveTo(188,150);
    context.quadraticCurveTo(288,0,388,150);
    context.lineWidth = 10;
    context.strokeStyle = 'black';
    context.stroke();
    //控制点通过分别与上下文点和终止点之间的虚拟切线控制曲线的形状。其中上下文点由 moveTo() 方法在调用 quadraticCurveTo() 方法前指定。控制点离上下文点和终止点越远，曲线就越尖锐，反之，曲线则越平缓。

    //贝塞尔曲线
    context.beginPath();
    context.moveTo(188,130);
    context.bezierCurveTo(140,10,388,10,388,170);
    context.lineWidth = 10;
    context.strokeStyle = 'aqua';
    context.stroke();
    //贝塞尔曲线由当前上下文点、两个控制点和终止点确定。贝塞尔曲线的第一部分是由上下文点和第一个控制点确定的虚拟线的切线，第二部分则是由第二个控制点和终止点确定的虚拟线的切线。


   
   var canvas1 = document.getElementById("myCanvas1");
   var context1 = canvas1.getContext("2d");
   //画路径
   context1.beginPath();
   context1.moveTo(100,20);
   //第一条直线
   context1.lineTo(200,160);
   //二次曲线
   context1.quadraticCurveTo(230,200,250,120);
   //贝赛尔曲线
   context1.bezierCurveTo(290,-40,300,200,400,150);
   //第二条直线															
   context1.lineTo(500,90);
   context1.lineWidth = 5;
   context1.strokeStyle = 'blue';
   context1.stroke();

   //线条的连接样式   
   context1.beginPath();
   context1.moveTo(99,150);
   context1.lineTo(149,50);
   context1.lineTo(199,150);
   context1.lineWidth = 25;
   context1.strokeStyle = '#999';
   context1.lineJoin = 'bevel';//支持 3 种线条的连接样式，包括： miter， round， 和 bevel。 缺省情况下，将使用 miter 样式。
   context1.stroke();

   //画圆角
   var rectWidth = 200;
   var rectHeight = 100;
   var rectX = 189;
   var rectY = 50;
   var cornerRadius = 50;
   context1.beginPath();
   context1.moveTo(rectX,rectY);
   context1.lineTo(rectX + rectWidth - cornerRadius, rectY);
   context1.arcTo(rectX + rectWidth, rectY, rectX + rectWidth, rectY + cornerRadius, cornerRadius);
   context1.lineTo(rectX + rectWidth, rectY +rectHeight);
   context1.lineWidth = 5;
   context1.strokeStyle = 'aqua';
   context1.stroke();

   
   //画图形
   var canvas2 = document.getElementById("myCanvas2");
   var context2 = canvas2.getContext("2d");
   //画用户自定义图形及径向渐变
   context2.beginPath();//开始绘图
   context2.moveTo(70,80);
   context2.bezierCurveTo(30,100,30,150,130,150);
   context2.bezierCurveTo(150,180,220,180,240,150);
   context2.bezierCurveTo(320,150,320,120,290,100);
   context2.bezierCurveTo(330,40,270,30,240,50);
   context2.bezierCurveTo(220,5,150,20,150,50);
   context2.bezierCurveTo(100,5,50,20,70,80);
   context2.closePath();//结束绘图，关闭路径
   var grd1 = context2.createRadialGradient(138,100,10,138,50,200);
   grd1.addColorStop(0,"#999");
   grd1.addColorStop(1,"#0f0");
   context2.lineWidth = 5;
   context2.fillStyle = grd1;
   context2.fill();
   context2.strokeStyle = 'blue';
   context2.stroke();
   //注意： fill 方法要在 strok 方法之前执行，否则 fill 会覆盖掉 stroke 的一半区域。

   //画矩形及线性渐变
   context2.beginPath();
   context2.rect(388,50,100,100);//定义矩形
   var grd = context.createLinearGradient(288,0,470,150);//定义线性渐变对象
   grd.addColorStop(0,"#8ed6ff");//添加渐变的起点处颜色
   grd.addColorStop(1,"004cb3");//添加渐变的终点处颜色
   context2.fillStyle = grd;
   context2.fill();
   context2.lineWidth = 5;
   context2.strokeStyle = 'black';
   context2.stroke();
   //context.rect(x, y, width, height);每个矩形需要由左上角坐标 (x, y) 和矩形的宽与高 (width,height)来确定。
   //线性渐变的方向是从 createLinearGradient() 方法的 (startX, startY) 点到 (endX,endY) 点的一条虚拟线段。Color stop 是指的在虚拟线段上的位置点，范围是 0 到 1，其中 0 表示是起始点，1 表示是终止点。
   
   //画圆及图形颜色填充
   context2.beginPath();
   context2.arc(144.5,300,70,0,2*Math.PI,false);
   context2.fillStyle = 'aquamarine';//填充的颜色
   context2.fill();//进行填充
   context2.lineWidth = 5;
   context2.strokeStyle = 'black';
   context2.stroke();
   
   //画半圆
   context2.beginPath();
   context2.arc(432,300,70,0,Math.PI,true);
   context2.closePath();
   context2.lineWidth = 5;
   context2.fillStyle = 'bisque';
   context2.fill();
   context2.strokeStyle = 'black';
   context2.stroke();
   
   //图案填充
   var canvas3 = document.getElementById("myCanvas3");
   var context3 = canvas3.getContext("2d");
   var imageObj = new Image();
   imageObj.onload = function(){
   	   var pattern = context3.createPattern(imageObj,"repeat");//创建图案填充对象
   	   context3.rect(10,10,canvas3.width - 20,canvas3.height - 20);
   	   context3.fillStyle = pattern;
   	   context3.fill();
   }
   imageObj.src = "http://www.html5canvastutorials.com/demos/assets/wood-pattern.png";
   
   //图像
   var canvas4 = document.getElementById("myCanvas4");
   var context4 = canvas4.getContext("2d");
   var imagex = 188;
   var imagey = 130;
   var imagewidth = 200;
   var imageheight = 137;
   var imageObj1 = new Image();
   imageObj1.onload = function(){
   //	context4.drawImage(imageObj1,69,50);//绘制图像
        context4.drawImage(imageObj1,imagex,imagey,imagewidth,imageheight);//定义图像尺寸
        
   }
   imageObj1.src= "http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg";
   //注意：由于 drawImage() 方法需要一个图像对象作为参数，所以我们需要在实际调用 drawImage()之前就加载图像。这一要求可以通过图像对象的 onload 事件来实现。不过要注意的是， onload 应该在用图像对象的 src 属性指定图像来源之前就进行赋值。
   
   
}


