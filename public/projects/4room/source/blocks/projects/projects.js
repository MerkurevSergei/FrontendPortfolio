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