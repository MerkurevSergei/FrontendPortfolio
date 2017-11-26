;(function () {
    document.addEventListener("DOMContentLoaded", function() {        
        renderArticlePreviewTitlePosition();
        window.addEventListener("resize", renderArticlePreviewTitlePosition, true);
    });
    
    function renderArticlePreviewTitlePosition() {
        var articlesPreview = document.querySelectorAll(".article-preview");
        if (!articlesPreview) return;

        for (var i=0; i<articlesPreview.length; ++i) {
            var articlePreview = articlesPreview[i];
            var articlePreview__titleCase = articlePreview.querySelector(".article-preview__title--case");
            var articlePreview__tagsCase = articlePreview.querySelector(".article-preview__tags--case");
            if (!articlePreview__titleCase) continue;

            var bottom = 0;
            if (articlePreview__tagsCase) {
                bottom = articlePreview__tagsCase.clientHeight + 30;
            }

            articlePreview__titleCase.style.bottom = bottom+"px";   
        }
    }
})();


