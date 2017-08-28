;(function () {
    var sandwich = document.querySelector(".sandwich");
    var menuList = document.querySelector(".menu__links");
    var menuLinks = document.querySelectorAll(".menu__link");
    
    //var closeWriteForm = document.querySelector(".write-form__close");

    // Open/Close menu on Sandwich
    sandwich.addEventListener("click", function (event) {
        event.preventDefault();
        menuList.classList.toggle("display-off");
    });

    // Close menu on Link
    for (var i = 0; i < menuLinks.length; i++) {
        var menuLink = menuLinks[i];
        menuLink.addEventListener("click", function (event) {
            menuList.classList.add("display-off");
        });
    }
})();