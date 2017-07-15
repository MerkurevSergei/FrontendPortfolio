var openMenu = document.querySelector(".menu__sandwich-icon");
var menuList = document.querySelector(".menu__links");
//var closeWriteForm = document.querySelector(".write-form__close");

openMenu.addEventListener("click", function (event) {
    event.preventDefault();
    menuList.classList.toggle("display-off");
});

//closeWriteForm.addEventListener("click", function(event) {
//    event.preventDefault();
//    writeForm.classList.remove("visible_on");
//    writeForm.classList.add("visible_off");
//});