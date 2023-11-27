const addItem = document.querySelector(".add-item");
console.log(addItem);

console.log(addItem.parentElement);
console.log(addItem.parentNode.parentNode);

const list = document.querySelector(".list");
console.log(list.textContent);

console.log(list.closest("section"));
console.log(list.closest("body").querySelector("header h1").innerText);

console.log(addItem.children);
console.log(addItem.children[2]);
console.log(addItem.firstElementChild);
console.log(addItem.lastElementChild);
console.log(addItem.firstChild);

console.log(document.querySelector("h1").firstChild);

const ul = document.querySelector("ul");

const lists = ul.children;
console.log(lists);

const js = lists[2];
console.log(js.innerText);

const css = js.previousElementSibling;
console.log(css.innerText);

const django = js.nextElementSibling.nextElementSibling;
console.log(django.innerHTML);
