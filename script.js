/*
let icon = document.getElementById("icon")
let menuCard = document.getElementById("fly-in-menu")


icon.addEventListener("click", function(){
    if(menuCard.classList.contains("fly-in-menu")){
        menuCard.classList.remove("fly-in-menu")
        menuCard.classList.add("fly-in-menu-new")
    }else if(menuCard.classList.contains("fly-in-menu-new")){
        menuCard.classList.remove("fly-in-menu-new")
        menuCard.classList.add("fly-in-menu")
    }
})
*/

/*
let icons = document.querySelectorAll(".icon-container");


let menuCard = document.getElementById("fly-in-menu");


icons.forEach(function(icon) {
  icon.addEventListener("click", function() {
    if (menuCard.classList.contains("fly-in-menu")) {
      menuCard.classList.remove("fly-in-menu");
      menuCard.classList.add("fly-in-menu-new");
    } else if (menuCard.classList.contains("fly-in-menu-new")) {
      menuCard.classList.remove("fly-in-menu-new");
      menuCard.classList.add("fly-in-menu");
    }
  });
});
*/

const icons = document.querySelectorAll(".icon-container");
const flyInMenus = document.querySelectorAll(".fly-in-menu");

icons.forEach(icon => {
  icon.addEventListener("click", () => {
    const menuId = icon.dataset.menuId;
    const targetMenu = document.getElementById(menuId);

    flyInMenus.forEach(menu => {
      menu.classList.remove("fly-in-menu-new");
    });

    targetMenu.classList.add("fly-in-menu-new");
  });
});
