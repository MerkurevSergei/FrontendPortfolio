;(function () {
    document.addEventListener("DOMContentLoaded", function() {
        var sandwich = document.querySelector(".menu__icon");
        var menu = document.querySelector(".menu");
        var popup = document.querySelector(".popup-all");
        
        if (!menu) return;
        
        renderSocialLine();
        sandwich.addEventListener("click", function (event) {
            event.preventDefault();
            menu.classList.toggle("menu--open");
            popup.classList.toggle("popup-all--open_menu");
            renderSocialLine(); 
        });
        window.addEventListener("resize", renderSocialLine, true);
       
    });
    
    function renderSocialLine() {
        if (window.matchMedia("(min-width: 800px)").matches) {
            var height = document.documentElement.clientHeight;
            var textElement = document.querySelector(".menu__social-links");
            var textArea = textElement.offsetWidth;
            var lineHeight = (height-textArea-150)/2;
        }
        else {
            var lineHeight = "1";
        }

        var socialLeftLine = document.querySelector(".menu__social-left-line");
        var socialRightLine = document.querySelector(".menu__social-right-line");
        socialLeftLine.style.height = lineHeight+"px";
        socialRightLine.style.height = lineHeight+"px"; 
    }
})();