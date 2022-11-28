document.oncontextmenu=()=>{
    alert("Don't try right click")
    return false;
}
    
    //     if(e.key == "F12"){
    //     alert("Don't try to inspect Element");
    //     return false;
    //     }
    document.onkeypress = function (event) {  
        event = (event || window.event);  
        if (event.keyCode == 123) {  
            
        return false;  
        }  
        }  
        document.onmousedown = function (event) {  
        event = (event || window.event);  
        if (event.keyCode == 123) {  
   
        return false;  
        }  
        }  
        document.onkeydown = function (event) {  
        event = (event || window.event);  
        if (event.keyCode == 123) {  
         
        return false;  
        }  
        
        document.onkeydown = (e) =>{
  if(e.ctrlKey && e.key == "u")
{
 alert("don't try to view source");
return false;
}
 if(e.ctrlKey && e.key == "c")
{
alert("don't try to copy view source");
return false;
}
if(e.ctrlKey && e.key == "v"){
    alert("Don't try to paste view page source");
    return false
    }
  
   }  
   document.onkeypress = function (event) {  
    event = (event || window.event);  
    if (event.keyCode == 123) {  
        
    return false;  
    }  
    }  
    document.onmousedown = function (event) {  
    event = (event || window.event);  
    if (event.keyCode == 123) {  

    return false;  
    }  
    }  
    document.onkeydown = function (event) {  
    event = (event || window.event);  
    if (event.keyCode == 123) {  
     
    return false;  
    }  
     
        }}