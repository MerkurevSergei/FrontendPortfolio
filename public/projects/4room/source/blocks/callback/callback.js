;(function () {
    document.addEventListener("DOMContentLoaded", function() {
       
        var popup = document.querySelector(".popup-all");
        var open = document.querySelector(".callback-connect-btns__btn--bid");
        var close = document.querySelector(".callback__icon");
        var callback = document.querySelector(".callback");
        if (!callback) return;
        if (!open) return;
        
        open.addEventListener("click", function (event) {
            event.preventDefault();
            popup.classList.add("popup-all--open");
            callback.classList.add("callback--open");
            callback.classList.remove("callback--close");
           
        });
        close.addEventListener("click", function (event) {
            event.preventDefault();
            popup.classList.remove("popup-all--open");
            callback.classList.add("callback--close");
            callback.classList.remove("callback--open");
           
        });
    });
})();