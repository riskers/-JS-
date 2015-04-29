var EventUtil = {
    addHandler : function(ele,type,handler){
        if(ele.addEventListener){
            ele.addEventListener(type,handler,false)
        }else{
            ele.attachEvent('on'+type,handler) ;
        }
    } ,
    getEvent : function(event){
        return event ? event : window.event ;
    } ,
    getTarget : function(event){
        return event.target || event.srcElement
    } ,
    preventDefault : function(event){
        if(event.preventDefault){
            event.preventDefault() ;
        }else{
            event.returnValue = false ;
        }
    } ,
    stopPropagation : function(event){
        if(event.stopPropagation){
            event.stopPropagation() 
        }else{
            event.cancelBubble = true ;
        }
    } ,
    getWheelDelta : function(event){
        var bDown = true ;

        if(event.wheelDelta){
            //IE
            if(event.wheelDelta<0){
                bDown = true ;
            }else{
                bDown = false ;
            }
        }else{
            //FF
            if(event.detail>0){
                bDown = true ;
            }else{
                bDown = false ;
            }
        }

        return bDown ;
    }
}
