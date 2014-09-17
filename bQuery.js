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

//注册事件的兼容
function addEvent(obj,sEvent,fn){
	  if(obj.attachEvent){
	        obj.attachEvent('on'+sEvent,fn);
	  }else{
       		obj.addEventListener(sEvent,fn,false);
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
