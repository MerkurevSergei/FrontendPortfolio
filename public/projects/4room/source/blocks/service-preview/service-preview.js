;(function () {
    document.addEventListener("DOMContentLoaded", function() {
        var servicePreview = document.querySelector(".service-preview");
        if (!servicePreview) return;
                
        var servicePreviewLinks = document.querySelectorAll(".service-preview__link");
        for(var i=0; i<servicePreviewLinks.length; ++i) {
            var servicePreviewLink = servicePreviewLinks[i];
            servicePreviewLink.addEventListener("mouseenter", servicePreviewLinksSetGrey);
            servicePreviewLink.addEventListener("mouseleave", servicePreviewLinksUnsetGrey);
        }
    });
    
    function servicePreviewLinksSetGrey(event) {
        if (window.matchMedia("(min-width: 800px)").matches) return;
        var servicePreviewLinks = document.querySelectorAll(".service-preview__link");
        for(var i=0; i<servicePreviewLinks.length; ++i) {
            var servicePreviewLink = servicePreviewLinks[i];
            if (event.target === servicePreviewLink) continue;
            servicePreviewLink.classList.add("service-preview__link--color_grey");
        }
    }
    
    function servicePreviewLinksUnsetGrey(event) {
        if (window.matchMedia("(min-width: 800px)").matches) return;
        var servicePreviewLinks = document.querySelectorAll(".service-preview__link");
        for(var i=0; i<servicePreviewLinks.length; ++i) {
            var servicePreviewLink = servicePreviewLinks[i];
            servicePreviewLink.classList.remove("service-preview__link--color_grey");
        }
    }
    
})();