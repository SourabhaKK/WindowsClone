let taskbar = document.getElementsByClassName("taskbar")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];

taskbar.addEventListener("click",function(){
    if(startmenu.style.bottom == "60px")
    {
        startmenu.style.bottom = "-1000px";
        startmenu.style.bottom = "-1000px";
    }
    else
    {
        startmenu.style.bottom = "60px";
    }
})