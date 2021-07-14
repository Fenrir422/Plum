import React from 'react';

 

const Page = (props) => {

    // Получение выделенного текста с помощью анонимной самовызывающейся функции.
        function get_text() {
            // Объявление переменной.
            var text;
        
            if (window.getSelection) {
            // Современный способ.
            text = window.getSelection().toString();
            } else if (document.getSelection) {
            // Старый способ.
            text = document.getSelection();
            } else if (document.selection) {
            // IE.
            text = document.selection.createRange().text;
            }
        
            // Вывод результата, если получен выделенный текст.
            if (text) {
            alert(text);
            }
        }
        
        // Применять эту функцию к тегам, содержащим текстовую информацию.
        var p_arr = document.getElementsByTagName("p");
        
        for (var i = 0; i < p_arr.length; i++) {
            p_arr[i].onmouseup = get_text;
        }
    return (
    <div id="test">
        <p>тут находится текст первый, который нужно выделить, получить в переменную и вывести отдельно</p>
        <p>тут находится текст второй, который нужно выделить, получить в переменную и вывести отдельно</p>
        <p>тут находится текст третий, который нужно выделить, получить в переменную и вывести отдельно</p>
        <p>тут находится текст четвертый, который нужно выделить, получить в переменную и вывести отдельно</p>
        <p>тут находится текст пятый, который нужно выделить, получить в переменную и вывести отдельно</p>
      </div>
    
  );
}
export default Page;