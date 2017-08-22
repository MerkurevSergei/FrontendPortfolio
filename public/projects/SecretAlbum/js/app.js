;(function() {
    'use strict';
    var pageLang = getParams()["lang"];
    if (!pageLang) pageLang="en";
    
    //
    var content = document.querySelectorAll(".content__text");
    var line0 = content[0];
    var line3 = content[3];
    getComputedStyle(line0);
    getComputedStyle(line3);


    //
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'i18n.json', true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
        if (xhr.status == 200) {
            var dataLangs = JSON.parse(xhr.responseText);
            dataLangs.forEach(function(item){
                if (item.lang == pageLang) {
                    var style = computeStyle(content, item);
                    //setStyle(content, style);
                    content[0].textContent = item.line0;
                    content[1].textContent = item.line1;
                    content[2].textContent = item.line2;
                    content[3].textContent = item.line3;
                    return;
                }
            });
        }

    }
    
    // ========================= SERVICE FUNCTIONS ========================= //
     /**
     * Вычисляем размер шрифта так, чтобы текст помещался в одну строку
     * 
     * @function computeStyle
     * @param {Array}
     * @param {Object}
     * @returns {CSSStyleDeclaration}
     */
    function computeStyle(elements, strings) {
        var pos = 0;
        var maxwidth = 0;
        for (var i=0; i<elements.length; ++i) {
            var hiddenStyle = "left:-1000px;top:-1000px;height:auto;width:auto;position:absolute;";
            var element = elements[i];
            var testElement = element.cloneNode(true);
            testElement.innerHTML = strings['line'+i];
            element.parentNode.insertBefore(testElement, element.nextSibling);
            document.all ? 
                testElement.style.setAttribute('cssText', hiddenStyle) 
                : testElement.setAttribute('style', hiddenStyle);
            
            if (maxwidth < getComputedStyle(testElement).width)
            {
                maxwidth = getComputedStyle(testElement).width;
                pos = i;
            }
        }
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