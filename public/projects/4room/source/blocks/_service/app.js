;(function () {
    // Сетка блога
    document.addEventListener("DOMContentLoaded", function() {
        if (!document.querySelector(".grid-blog__content--masonry")) return;
        var elem = document.querySelector('.grid-blog__content--masonry');
        imagesLoaded(elem, function() {
            var msnry = new Masonry( elem, {
              itemSelector: '.grid-blog__article-preview',
              columnWidth: '.grid-blog__article-preview',
              gutter: '.grid-blog__gutter',
              stamp: '.grid-blog__article-preview--menu',
              transitionDuration: '0.5s',
              percentPosition: true
            });
        });
    });
    
    
})();

function debounce_ms(f, ms) {

  var state = null;

  var COOLDOWN = 1;

  return function() {
    if (state) return;

    f.apply(this, arguments);

    state = COOLDOWN;

    setTimeout(function() { state = null; }, ms);
  };

}