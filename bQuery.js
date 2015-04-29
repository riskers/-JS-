//根据class获取元素
function getByClass(oParent,sClass){
	var aEle = oParent.getElementsByTagName('*');
	var aRes = [] ;
	for(var i=0;i<aEle.length;i++){
	   if(aEle[i].className==sClass){
	        aRes.push(aEle[i]);
	   }
	}
	return aRes ;
}

//注册事件的兼容(包括兼容作用域)
function addEvent(obj,sEvent,fn){
	function handle(){
        	return fn.call(oEle)
    	}
	if(obj.attachEvent){
	    obj.attachEvent('on'+sEvent,handle);
	}else{
    		obj.addEventListener(sEvent,handle,false);
	}
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
