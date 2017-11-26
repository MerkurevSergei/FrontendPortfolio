;(function () {
    document.addEventListener("DOMContentLoaded", function() {
        var breadcrumbs2 = document.querySelector(".breadcrumbs2");
        if (!breadcrumbs2) return;
        
        var linkone   = document.querySelector(".breadcrumbs2__link--one");
        var linktwo   = document.querySelector(".breadcrumbs2__link--two");
        var separator = document.querySelector(".breadcrumbs2__separator");
        
        linkone.addEventListener("mouseenter", function() {
            separator.classList.add("breadcrumbs2__separator--rotate_left");
        });
        linkone.addEventListener("mouseleave", function() {
            separator.classList.remove("breadcrumbs2__separator--rotate_left");
        });
        
        linktwo.addEventListener("mouseenter", function() {
            separator.classList.add("breadcrumbs2__separator--rotate_right");
        });
        linktwo.addEventListener("mouseleave", function() {
            separator.classList.remove("breadcrumbs2__separator--rotate_right");
        });   
    });   
})();