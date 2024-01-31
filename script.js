let icon = document.getElementById("icon")
let menuCard = document.getElementById("flyIn")

icon.addEventListener("click", function(){
    if(menuCard.classList.contains("fly-in-menu")){
        menuCard.classList.remove("fly-in-menu")
        menuCard.classList.add("fly-in-menu-new")
    }else if(menuCard.classList.contains("fly-in-menu-new")){
        menuCard.classList.remove("fly-in-menu-new")
        menuCard.classList.add("fly-in-menu")
    }
})