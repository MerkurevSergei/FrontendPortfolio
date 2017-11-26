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
;(function () {
    document.addEventListener("DOMContentLoaded", function() {
        var project = document.querySelector(".project");
        if (!project) return;
        
        // ==================== OPEN/CLOSE DESCRIPTION ===================== //
        var btn = document.querySelector(".btn--theme_project");
        var cross = document.querySelector(".project__gallery-close");
        var popup = document.querySelector(".project__gallery-popup");
        
        btn.addEventListener("click", function (event) {
            event.preventDefault();
            project.classList.toggle("project--description_open"); 
            project.classList.toggle("project--description_close");
            if (scrollEnabled()) 
                disableScroll();
            else 
                enableScroll();
        });      
        
        cross.addEventListener("click", function (event) {
            project.classList.remove("project--description_open"); 
            project.classList.add("project--description_close");
            enableScroll();
        });  
        
        popup.addEventListener("click", function (event) {
            project.classList.remove("project--description_open"); 
            project.classList.add("project--description_close"); 
            enableScroll();
        }); 
             
        // ***************************************************************** // 
        // ============================ GALLERY ============================ //
        // ***************************************************************** //
         
        // ======================= РАБОТА С ГАЛЕРЕЕЙ ======================= //
        var lswiper  = document.querySelector(".project__lswiper");
        var rswiper  = document.querySelector(".project__rswiper");
        
        var gallery = new Gallery(getPicturesData()); 
        var galleryDOM = new GalleryDOM();
        galleryDOM.render(gallery);
        var startData = getPicturesData();
        
        rswiper.addEventListener("click", function (event) {
            event.preventDefault();
            gallery.next();
            galleryDOM.render(gallery);
        }); 
        
        lswiper.addEventListener("click", function (event) {
            event.preventDefault();
            gallery.prev();
            galleryDOM.render(gallery);
        });
        
        window.addEventListener("resize", function() {
            gallery = new Gallery(startData); 
            galleryDOM = new GalleryDOM();
            galleryDOM.render(gallery);
        }, true);
        // ======================== ОБЪЕКТ ГАЛЕРЕЯ ========================= //
        function Gallery(data) {
            this.data = data;
            this.current = 0;
            // Листаем галерею вперед
            this.next = function() {
                if (this.current === this.data.length-1) return;
                this.current++;
            };
            // Листаем галерею назад
            this.prev = function() {
                if (this.current === 0) return;
                this.current--;
            };
            // Отдаём данные для рендеринга
            this.getData = function() {
                return this.data[this.current];
            };
            // Проверка предшествующей фото
            this.havePrev = function() {
                if (this.current === 0)  return false;
                return true;
            };
            // Проверка следующей фото
            this.haveNext = function() {
                if (this.current === this.data.length-1) return false;
                return true;
            };
        }
        // ====================== ОБЪЕКТ ГАЛЕРЕЯ DOM ======================= //
        function GalleryDOM() {
            this.viewport = document.querySelector(".project__gallery-picture");
            this.render = function(gallery) {
                if (gallery.haveNext())
                    rswiperOn();
                else
                    rswiperOff();
                if (gallery.havePrev())
                    lswiperOn();
                else
                    lswiperOff();
                
                var data = gallery.getData();          
                this.viewport.src = data.src;

            };
        }
        // ===================== МАССИВ ДАННЫХ ГАЛЕРЕИ ===================== //
        function getPicturesData() {
            var pictures = document.querySelectorAll(".project__gallery-picture");  
            var picturesData = [];
            for (var i=0; i < pictures.length; ++i) { 
                var picture = {};
                picture.src = pictures[i].src;         
                picturesData.push(picture);
            }
            return picturesData; 
        }    
        
        // ========================= Swiper ON OFF ========================= //
        function lswiperOff() {
            lswiper.classList.add("project__lswiper--off");
        }
        function rswiperOff() {
            rswiper.classList.add("project__rswiper--off");
        }
        function lswiperOn() {
            lswiper.classList.remove("project__lswiper--off");
            
        }
        function rswiperOn() {
            rswiper.classList.remove("project__rswiper--off");
        }
    
    // ********************************************************************* //
    });
    // ********************************************************************* //
    
//    window.onload = function() {
//        // ***************************************************************** // 
//        // ========================== TUNE IMAGE =========================== //
//        // ***************************************************************** //    
//        resizing();
//        window.addEventListener("resize", resizing);
//        // 
//        function resizing() {
//            var pictureRow = document.querySelectorAll(".project__gallery-row");
//            for (var i = 0; i<pictureRow.length; ++i)
//            {
//                if (window.matchMedia("(max-width: 800px)").matches) return;
//                var pictures = pictureRow[i].querySelectorAll(".project__gallery-picture");
//                if (pictures.length === 2) {
//                    var newSizes = calcSize(pictures[0].width, pictures[0].height, 
//                                            pictures[1].width, pictures[1].height);
//                    pictures[0].style.width   = Math.trunc(newSizes[0])+"px";
//                    pictures[0].style.height  = newSizes[1]+"px";
//                    pictures[1].style.width   = 
//                            getComputedStyle(pictures).width-Math.trunc(newSizes[0])+"px";
//                    pictures[1].style.height  = newSizes[3]+"px";
//                }
//            }   
//        }
//        
//        //
//        function calcSize(x1,y1,x2,y2) {
//            var newx1, newy1, newx2, newy2;
//            newy1 = newy2 = (x1+x2)*(y1*y2)/(x1*y2+x2*y1);
//            newx1 = x1*newy1/y1;
//            newx2 = x2*newy1/y2;    
//            return [newx1, newy1, newx2, newy2];
//        }
//    };    
    // ********************************************************************* // 
    // =========================== SCROLL OFF ON =========================== //
    // ********************************************************************* //
      
    // Функции отмены скролла
    var keys = {37: 1, 38: 1, 39: 1, 40: 1};
    
    function preventDefault(e) {
      e = e || window.event;
      if (e.preventDefault)
          e.preventDefault();
      e.returnValue = false;  
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    function disableScroll() {
      if (window.addEventListener) // older FF
          window.addEventListener('DOMMouseScroll', preventDefault, false);
      window.onwheel = preventDefault; // modern standard
      window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
      window.ontouchmove  = preventDefault; // mobile
      document.onkeydown  = preventDefaultForScrollKeys;
    }

    function enableScroll() {
        if (window.removeEventListener)
            window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.onmousewheel = document.onmousewheel = null; 
        window.onwheel = null; 
        window.ontouchmove = null;  
        document.onkeydown = null;  
    }
    function scrollEnabled() {
        return !window.onmousewheel;
    }
})();
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
;(function () {
    document.addEventListener("DOMContentLoaded", function() {
        var projects = document.querySelector(".projects");
        if (!projects) return;
        
        // =================== ПОКАЗЫВАЕМ И УБИРАЕМ ЦИФРЫ ================== //
        var gDOM = document.querySelector(".projects__gallery-pictures");
        gDOM.addEventListener("mouseenter", function() {
            gDOM.classList.add("projects__gallery-pictures--state_hover");
        });
        gDOM.addEventListener("mouseleave", function() {
            gDOM.classList.remove("projects__gallery-pictures--state_hover");
        });
        
       
//        // ============================ ГАЛЕРЕЯ ============================ //
//        var lswiper  = document.querySelector(".projects__lswiper");
//        var rswiper  = document.querySelector(".projects__rswiper");
//        
//        var gallery = new Gallery(getPicturesData(), getVPort().length); 
//        var galleryDOM = new GalleryDOM(getVPort());
//        galleryDOM.render(gallery);
//        var startData = getPicturesData();
//        
//        rswiper.addEventListener("click", function (event) {
//            Duration0(getVPort());
//            gallery.next();
//            galleryDOM.render(gallery);
//            Duration04(getVPort());
//        }); 
//        
//        lswiper.addEventListener("click", function (event) {
//            Duration0(getVPort());
//            gallery.prev();
//            galleryDOM.render(gallery);
//            Duration04(getVPort());
//        }); 
//        
//        window.addEventListener("resize", function() {
//            gallery = new Gallery(startData, getVPort().length); 
//            galleryDOM = new GalleryDOM(getVPort());
//            galleryDOM.render(gallery);
//        }, true);
//        
//        
//        // ***************************************************************** //
//        // ======================== SERVICE FUNCTION ======================= //
//        // ***************************************************************** //
//        
//        // ================== ПОЛУЧАЕМ ДОСТУПНЫЕ VIEWPORTS ================= //
//        function getVPort() {
//            var pictures = document.querySelectorAll(".projects__gallery-picture-wrap");
//            var viewports = [];
//            for (var i=0; i < pictures.length; ++i) {
//                if (getComputedStyle(pictures[i]).display !== "none") {
//                    var viewport = {};
//                    viewport.picture = pictures[i];
//                    viewport.number = pictures[i].querySelector(".projects__gallery-picture-number");
//                    viewport.description =  pictures[i].querySelector(".projects__description");  
//                    viewports.push(viewport);             
//                }
//            }
//            return viewports;
//        }
//        // ===================== МАССИВ ДАННЫХ ГАЛЕРЕИ ===================== //
//        function getPicturesData() {
//            var pictures = document.querySelectorAll(".projects__gallery-picture-wrap");  
//            var picturesData = [];
//            for (var i=0; i < pictures.length; ++i) { 
//                var picture = {};
//                picture.backgroundImage = getComputedStyle(pictures[i]).backgroundImage;
//                picture.backgroundRepeat = getComputedStyle(pictures[i]).backgroundRepeat;
//                picture.backgroundPosition = getComputedStyle(pictures[i]).backgroundPosition;
//                picture.backgroundSize = getComputedStyle(pictures[i]).backgroundSize;
//                picture.number = pictures[i].querySelector(".projects__gallery-picture-number").innerHTML;
//                picture.description = pictures[i].querySelector(".projects__description").innerHTML;                
//                picturesData.push(picture);
//            }
//            return picturesData; 
//        }
//        // ======================== ОБЪЕКТ ГАЛЕРЕЯ ========================= //
//        function Gallery(data, viewcount) {
//            this.data = data;
//            this.viewcount = viewcount;
//            this.start = 0;
//            this.end = this.viewcount-1;
//            
//            for (var i = this.data.length+1; i <= this.viewcount; ++i) {
//                this.data[i].background ="none";
//                this.data[i].number="";
//                this.data[i].description="";
//            }
//            // Листаем галерею вперед
//            this.next = function() {
//                if (this.end === this.data.length-1) return;
//                this.start++; this.end++;
//            };
//            // Листаем галерею назад
//            this.prev = function() {
//                if (this.start === 0) return;
//                this.start--; this.end--;
//            };
//            // Отдаём данные для рендеринга
//            this.getData = function() {
//                return this.data.slice(this.start,this.end+1);
//            };
//            // Проверка предшествующей фото
//            this.havePrev = function() {
//                if (this.start === 0)  return false;
//                return true;
//            };
//            // Проверка следующей фото
//            this.haveNext = function() {
//                if (this.end === this.data.length-1) return false;
//                return true;
//            };
//        }
//        // ====================== ОБЪЕКТ ГАЛЕРЕЯ DOM ======================= //
//        function GalleryDOM(viewports) {
//            this.viewports = viewports;
//            
//            this.render = function(gallery) {
//                if (gallery.haveNext())
//                    rswiperOn();
//                else
//                    rswiperOff();
//                if (gallery.havePrev())
//                    lswiperOn();
//                else
//                    lswiperOff();
//                
//                
//                var data = gallery.getData();
//                for (var i=0; i < this.viewports.length; ++i) {           
//                    viewports[i].number.innerHTML = data[i].number;
//                    viewports[i].description.innerHTML = data[i].description;
//                    viewports[i].picture.style.backgroundImage = data[i].backgroundImage;
//                    viewports[i].picture.style.backgroundRepeat = data[i].backgroundRepeat;
//                    viewports[i].picture.style.backgroundPosition = data[i].backgroundPosition;
//                    viewports[i].picture.style.backgroundSize = data[i].backgroundSize;
//                }
//            };
//        }
//        
//        // =============== Сохраняем и восстанавливаем стили =============== //
//        function Duration0(viewports) {
//            for (var i=0; i < viewports.length; ++i) {
//                viewports[i].picture.style.transitionDuration = "0s";
//            }
//        }
//        function Duration04(viewports) {
//            for (var i=0; i < viewports.length; ++i) {
//                viewports[i].picture.style.transitionDuration = "0.4s";
//            }
//        }
//        // ========================= Swiper ON OFF ========================= //
//        function lswiperOff() {
//            lswiper.classList.add("projects__lswiper--off");
//        }
//        function rswiperOff() {
//            rswiper.classList.add("projects__rswiper--off");
//        }
//        function lswiperOn() {
//            lswiper.classList.remove("projects__lswiper--off");
//            
//        }
//        function rswiperOn() {
//            rswiper.classList.remove("projects__rswiper--off");
//        }
    });
})();