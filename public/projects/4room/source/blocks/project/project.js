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