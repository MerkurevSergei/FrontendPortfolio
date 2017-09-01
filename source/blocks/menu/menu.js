;(function () {
    var sandwich = document.querySelector(".sandwich");
    var menuLinks = document.querySelectorAll(".menu__link");
    
    //var closeWriteForm = document.querySelector(".write-form__close");

    // Open/Close menu on Sandwich
    sandwich.addEventListener("click", function (event) {
        event.preventDefault();
        for (var i = 0; i < menuLinks.length; i++) {
            menuLinks[i].classList.toggle("display-off");
        }
    });

    // Close menu on Link
    for (var i = 0; i < menuLinks.length; i++) {
        var menuLink = menuLinks[i];
        menuLink.addEventListener("click", function (event) {
            for (var i = 0; i < menuLinks.length; i++) {
                menuLinks[i].classList.add("display-off");
            }
        });
    }
})();