// 1
let menu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu-item');
    menu.insertBefore(menuItem[2],menuItem[1]);
let li = document.createElement('li');
    li.className = 'menu-item';
    li.innerText = 'Пятый пункт';
    menu.appendChild(li)
// 2
let mbody = document.querySelector('body')
    mbody.style.backgroundImage='url(img/apple_true.jpg)';
// 3
let title = document.querySelector('.title');
    title.innerText = 'Мы продаем только подлинную технику Apple';
// 4
let adv = document.querySelector('.adv');
    adv.remove()
// 5
let divPrompt = document.querySelector('.prompt');
let question =  prompt('Яке ваше ставлення до техніки Apple ?','');
divPrompt.innerHTML = question.toUpperCase();
