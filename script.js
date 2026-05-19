const items = [
  "Добавлена темная тема сайта",
  "Исправлены ошибки в меню",
  "Сайт теперь загружается быстрее",
  "Обновление базы данных завершено"
];

let i = 0;

const box = document.getElementById('box');
const btn = document.getElementById('btn');

btn.onclick = function() {
  box.innerHTML = "<h3>" + items[i] + "</h3>";
  
  i = i + 1;
  
  if (i >= items.length) {
    i = 0;
  }
};
