window.onload=function(){
	var opcaityvalue="1";/*侧边透明度*/
		var degvalue=60;/*旋转角度*/
		var box = document.all("hdp_box");/*容器对象*/
		var boxH = box.offsetHeight;/*容器高度*/
		var boxW = box.offsetWidth;/*容器长度*/
		var imgs = box.children;/*容器子元素*/
		var L = imgs.length;
		for(var i=0;i<imgs.length;i++)/*循环*/
		{
			imgs[i].className="hdp_img";
			if(i==0)
			{
				imgs[i].style.transform = "scaleY(0.9) rotateY("+degvalue+"deg)";
			}
			if(i==1)
			{
				imgs[i].title="";/*谁在最前面谁就清空标记*/
			}
			if(i==2)
			{
				imgs[i].style.transform = "scaleY(0.9) rotateY("+(-degvalue)+"deg)";
			}
			imgs[i].id =i;/*给ID标记*/
			imgs[i].style.top=(boxH-imgs[i].offsetHeight)/2+"px";/*定位*/
			imgs[i].style.left=(boxW-imgs[i].offsetWidth)/2+"px";
			/*点击事件*/
			imgs[i].onclick=function imgsclick(){
				//alert(this.title)
				if(this.title!="")/*当点击的图片不在最前端时*/
				{
					/*滚动 循环*/
						this.style.zIndex="2";/*放到最上层*/
						this.style.left=(boxW-this.offsetWidth)/2+"px";
						this.style.transform = "scaleY(1) rotateY("+(0)+"deg)";
						if(this.id=="0")
						{
							var left = L-1;
						}
						else
						{
							var left = parseInt(this.id)-1;
						}
						if(this.id==L-1+"")
						{
							var right =0;
						}else
						{
							var right = parseInt(this.id)+1;
						}
						var leftimg = document.getElementById(left);
						var leftleft = document.getElementById(left-1);
						var rightright = document.getElementById(right+1);
						var rightimg = document.getElementById(right);
						if(this.title=="viewr")/*点击的是右面的图片*/
						{
							if(this.id=="1")
							{
								leftleft=document.getElementById(L-1);;
							}
							this.title="";
							leftimg.style.transform = "scaleY(0.9) rotateY("+degvalue+"deg)";
							leftimg.style.left=-(boxW-leftimg.offsetWidth)/2+"px";
							leftimg.title="viewl";
							leftimg.style.zIndex="0";
							leftleft.style.left=-(boxW-leftimg.offsetWidth)*2+"px";
							leftleft.style.transform = "scaleY(0.9) rotateY("+0+"deg)";
							rightimg.style.display="inline";
							rightimg.title="viewr";
							rightimg.style.left=3/2*boxW-3/2*rightimg.offsetWidth+"px";
							rightimg.style.zIndex="0";
							rightimg.style.transform="scaleY(0.9) rotateY("+(-degvalue)+"deg)";
							rightimg.style.opacity=opcaityvalue;
							leftimg.style.opacity=opcaityvalue;

						}
						else if(this.title=="viewl")
						{
							if(this.id==L-2+"")
							{
								rightright=document.getElementById(0);;
							}
							this.title="";
							rightimg.style.transform = "rotateY("+(-degvalue)+"deg)";
							rightimg.style.left=3/2*boxW-3/2*rightimg.offsetWidth+"px";
							rightimg.title="viewr";
							rightimg.style.zIndex="0";
							rightright.style.left=3*boxW-3*rightimg.offsetWidth+"px";
							rightright.style.transform = "scaleY(0.9) rotateY("+0+"deg)";
							leftimg.style.display="inline";
							leftimg.title="viewl";
							leftimg.style.left=-(boxW-leftimg.offsetWidth)/2+"px";
							leftimg.style.zIndex="0";
							leftimg.style.transform="scaleY(0.9) rotateY("+(degvalue)+"deg)";
							rightimg.style.opacity=opcaityvalue;
							leftimg.style.opacity=opcaityvalue;
						}
						this.style.opacity="1";
				}	
				else/*在最前端时*/
				{
					/*调用图片查看器*/
				}
			}
			/*用title标记显示样式*/
		}
		imgs[0].style.left=-(boxW-imgs[0].offsetWidth)/2+"px";/*初始化前三张图片的显示效果*/
		imgs[0].style.opacity=opcaityvalue;
		imgs[0].title="viewl";/*左边的图*/
		imgs[1].style.zIndex = "2";/*将第二张放到顶端*/
		imgs[2].style.left=2*boxW-2*imgs[2].offsetWidth-(boxW-imgs[0].offsetWidth)/2+"px";/*初始化*/
		imgs[2].title="viewr";/*右边的图*/
		imgs[2].style.opacity=opcaityvalue;
		for(var i=3;i<imgs.length;i++)
		{
			imgs[i].style.display="none";
		}
	var pshow = document.all('pshow');
	var videobox = document.all('videobox');
	var videochild = videobox.childNodes;
	var playvideo = document.all('playvideo');
	for(var i=0;i<videochild.length;i++)
	{
		videochild[i].addEventListener("click",function(){
			playvideo.src = this.title;
			playvideo.style.display="inline";
			document.all('protect').style.display="flex";
		});
	}
}
function topmenu_change(x){
	var Return = document.all("return");
	if(x>80)
	{
		Return.style.display="inline";
	}
	else if(x<150){
		Return.style.display="none";
	}
}
function returntop(x){
	var y=x;
	var rt = setInterval(function(){
		x-=60*y/1500;
		window.scrollTo(x,x);
		if(x<=0)
		{
			clearInterval(rt);
		}
	},1)
}



function pexit(){
	playvideo.src="";
	pshow.firstChild.src="";
	playvideo.style.display="none";
	document.all('protect').style.display="none";
}
function change(x){
	if(x==1)
	{
		document.all('1_img').style.opacity="0";
	}
	if(x==2)
	{
		document.all('2_img').style.opacity="0";
	}
	if(x==3)
	{
		document.all('3_img').style.opacity="0";
	}
	if(x==4)
	{
		document.all('1_img').style.opacity="1";
	}
	if(x==5)
	{
		document.all('2_img').style.opacity="1";
	}
	if(x==6)
	{
		document.all('3_img').style.opacity="1";
	}
}