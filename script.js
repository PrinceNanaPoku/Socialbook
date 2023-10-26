var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");
function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("darktheme");
    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark"); 
    }
       
}
if(localStorage.getItem("theme") == "light"){
     darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("darktheme");
}
else if(localStorage.getItem("theme") == "light"){
     darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("darktheme");
}
else{
    localStorage.setItem("theme", "light");
}
