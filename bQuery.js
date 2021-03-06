//根据class获取元素
function getByClass(oParent,sClass){
	var aEle = document.getElementById(oParent).getElementsByTagName('*') ;
	var res = [] ,
   	    reg = new RegExp("\\b"+sClass+"\\b",'i');
	for(var i=0;i<aEle.length;i++){
		var targetClass = aEle[i].className ;
		if(reg.test(targetClass)){
			res.push(aEle[i])
		}
	}
	return res;
}

//获取样式的兼容
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr] ;
	}else{
		return getComputedStyle(obj,false)[attr] ;
	}
}


//实现insertAfter
function insertAfter(newEle,tarEle){
	var oParent = tarEle.parentNode;
	if(oParent.lastChild==tarEle){
		oParent.append(newEle);
	}else{
		oParent.insertBefore(newEle,tarEle.nextSibling)
	}
}

//cookie的操作
function setCookie(name,val,iDay){
	var oDate = new Date() ;
	oDate.setDate( oDate.getDate()+iDay ) ;
	document.cookie = name + '=' + val + ';expires=' + oDate ;
}

function getCookie(name){
	var arr = document.cookie.split('; ');
	for(var i=0;i<arr.length;i++){
		var arr2 = arr[i].split('=')
		if(arr2[0]==name){
			return arr2[1]
		}
	}
	return '' ;
}

function removeCookie(name){
	setCookie(name,'',-1)
}
