window.onload=function(){
	alert(1)
	var imgbox=document.getElementById('imgbox');
	var imgchild =  imgbox.childNodes;
	var pshow = document.all('pshow');
	var videobox = document.all('videobox');
	var videochild = videobox.childNodes;
	for(var i=0;i<imgchild.length;i++)
	{
		imgchild[i].addEventListener("click",function(){
			pshow.firstChild.src="images/"+this.name;
			document.body.style.overflow="hidden";
			document.all('protect').style.display="inline";
		});	
	}
	for(var i=0;i<videochild.length;i++)
	{
		videochild[i].addEventListener("click",function(){
			alert(1)
			pshow.lastChild.src = this.name;
			document.body.style.overflow="hidden";
			document.all('protect').style.display="inline";
		});
	}
}
function pexit(){
	document.body.style.overflow="scroll";
	document.all('protect').style.display="none";
}