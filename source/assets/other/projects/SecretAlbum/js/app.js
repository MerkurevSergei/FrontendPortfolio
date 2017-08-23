;(function() {
    'use strict';
    // Получаем язык страницы из запроса
    var pageLang = getParams()["lang"];
    if (!pageLang) pageLang="en";
    
    // Определяем контентые элементы страницы
    var standartWidth = parseInt(
            getComputedStyle(document.querySelector(".content")).width, 10
            );
    var content = document.querySelectorAll(".content__text");
    var line0 = content[0];
    var line3 = content[3];
    

    // AJAX запрос
    // При получении результата подстраиваем размеры шрифта,
    // чтобы строки умещались в контентный элемент
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'i18n.json', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
        if (xhr.status == 200) {
            var dataI18N = JSON.parse(xhr.responseText);
            var pageData= dataI18N[pageLang];
            if (!pageData) return;
            
            // Подстраиваем первые три строки
            var fantom = getSpecialElement(line0);
            fantom = getWidestElement(fantom, pageData);
            fantom = tuneElement(fantom, standartWidth);
            for (var i = 0; i < content.length-1; ++i) {
                var baseFontSize = parseInt(getComputedStyle(content[i]).fontSize,10);
                var baseBottom   = parseInt(getComputedStyle(content[i]).bottom,10);
                var fantomFontSize = parseInt(getComputedStyle(fantom).fontSize,10);
                
                content[i].textContent = pageData[i];
                content[i].style.fontSize = fantomFontSize + "px";
               
                content[i].style.bottom = baseBottom + (baseFontSize - fantomFontSize)/2 + "px";
            }
            // Подстраиваем последнюю строку 
            var fantom = getSpecialElement(line3);
            fantom = getWidestElement(fantom, [pageData[3]]);
            fantom = tuneElement(fantom, standartWidth);
            
            var baseFontSize = parseInt(getComputedStyle(content[3]).fontSize,10);
            var baseBottom   = parseInt(getComputedStyle(content[3]).bottom,10);
            var fantomFontSize = parseInt(getComputedStyle(fantom).fontSize,10);
            content[3].textContent = pageData[3];
            content[3].style.fontSize = 
                    parseInt(getComputedStyle(fantom).fontSize,10)+'px';
            content[3].style.bottom = baseBottom + (baseFontSize - fantomFontSize)/2 + "px";
        }

    }
    xhr.send();
    
    // СОБЫТИЕ-КЛИК ДЛЯ СМЕНЫ ЯЗЫКА СТРАНИЦЫ
    //
    //
    var langch = document.querySelector(".langch");
    var langchItemToggle = document.querySelector(".langch__item--toggle");
    var langchWidth = 7*parseInt(getComputedStyle(langchItemToggle).width,10);
    langch.style.left =  -1*langchWidth + "px";
    langchItemToggle.onclick = function(event) {
        event.preventDefault();
        langch.classList.toggle("langch--open");
    };
    
    
    // ========================= SERVICE FUNCTIONS ========================= //
    /**
    * Получаем временный элемент, копию переданного, 
    * в стилях меняем позицию, что скрывает элемент
    * 
    * @function getSpecialElement
    * @param {Element}
    * @returns {Element}
    */
    function getSpecialElement(el) {
        var hiddenStyle = "left:-10000px;top:-10000px;height:auto;width:auto;position:absolute;";
        var tmpel = el.cloneNode(true);
        el.parentNode.insertBefore(tmpel, el.nextSibling);
        !document.all ? tmpel.setAttribute('style', hiddenStyle) 
                      : tmpel.style.setAttribute('cssText', hiddenStyle);
        return tmpel;
    }
    
    /**
    * Подставляем во временный элемент данные построчно и сравниваем ширины.
    * Разные буквы с разными шрифтами могут иметь разные размеры.
    * Лучше сравнить всё в условиях, максимально ссответствующих заданным.
    * 
    * @function getWidestElement
    * @param {Element}
    * @param {Array}
    * @returns {Element}
    */   
    function getWidestElement(el, data) {
        el.textContent = "";
        for (var i=0; i<data.length; ++i) 
        {
            var text = data[i];
            var preText = el.textContent;
            var preWidth = parseInt(getComputedStyle(el).width, 10);
            
            el.textContent = text;
            if (preWidth < parseInt(getComputedStyle(el).width,10))
                preWidth = parseInt(getComputedStyle(el).width,10);
            else
                el.textContent = preText;
        }
        return el;
    }
    
    /**
    * Подстраиваем временный элемент под заданный размер.
    * 
    * @function tuneElement
    * @param {Element}
    * @param {Number}
    * @returns {Element}
    */ 
    function tuneElement(el, size) {
        var elSize = parseInt(getComputedStyle(el).width,10);
        var fontSize = parseInt(getComputedStyle(el).fontSize,10);
        while ((elSize >= size) && (fontSize>=0)) {
            --fontSize;
            el.style.fontSize = fontSize+"px";
            elSize = parseInt(getComputedStyle(el).width,10);
        }
        return el;
    }

    /**
     * Получаем параметры страницы из текущего GET запроса
     * 
     * @function getParams
     * @returns {array}
     */
    function getParams() {
        var params = window
        .location
        .search
        .replace('?','')
        .split('&')
        .reduce(
            function(p,e){
                var a = e.split('=');
                p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
                return p;
            },
            {}
        );
        return params;
    }
})();