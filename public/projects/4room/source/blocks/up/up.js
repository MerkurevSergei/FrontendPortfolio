;(function () {    
    document.addEventListener("DOMContentLoaded", function() {
        var up = document.querySelector(".up");
        if (!up) return;
        
        UpShow = debounce_ms(UpShow, 50);
        UpShow();
        window.addEventListener("scroll", UpShow); 
        
        up.addEventListener("click", function (event) {
            event.preventDefault();
            window.scrollTo(0,0);
        }); 
        
    });
    
    function UpShow() {
        var up = document.querySelector(".up");
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled < 300) {
            up.classList.remove("up-show");
            up.classList.add("up-hide");
        } else {
            up.classList.add("up-show");
            up.classList.remove("up-hide");
        } 
    }
})();