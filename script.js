taskbar=document.getElementsByClassName("taskbar")[0]
startmenu=document.getElementsByClassName("startmenu")[0]
taskbar.addEventListener("click",()=>{
    
    if(startmenu.style.bottom=="43px")
    {
        startmenu.style.bottom="-550px";
    }
    else{
        startmenu.style.bottom="43px";
    }
})
