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

;(function (d, w, c) {
                (w[c] = w[c] || []).push(function() {
                    try {
                        w.yaCounter45334848 = new Ya.Metrika({
                            id:45334848,
                            clickmap:true,
                            trackLinks:true,
                            accurateTrackBounce:true
                        });
                    } catch(e) { }
                });

                var n = d.getElementsByTagName("script")[0],
                    s = d.createElement("script"),
                    f = function () { n.parentNode.insertBefore(s, n); };
                s.type = "text/javascript";
                s.async = true;
                s.src = "https://mc.yandex.ru/metrika/watch.js";

                if (w.opera == "[object Opera]") {
                    d.addEventListener("DOMContentLoaded", f, false);
                } else { f(); }
})(document, window, "yandex_metrika_callbacks");