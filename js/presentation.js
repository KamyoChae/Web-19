function $(a){
	return document.getElementById(a)
}

var noticeLeft = $("notice-left");
var noticeMid = $("notice-mid");
var noticeRight = $("notice-right");

var noticeLeftUl = $("notice-left-ul");
var noticeMidUl = $("notice-mid-ul");
var noticeRightUl = $("notice-right-ul");

noticeLeft.onclick=function(){
	noticeLeftUl.style.display="block"
	noticeMidUl.style.display="none"
	noticeRightUl.style.display="none"
}
noticeMid.onclick=function(){
	noticeLeftUl.style.display="none"
	noticeMidUl.style.display="block"
	noticeRightUl.style.display="none"
}
noticeRight.onclick=function(){
	noticeLeftUl.style.display="none"
	noticeMidUl.style.display="none"
	noticeRightUl.style.display="block"
}