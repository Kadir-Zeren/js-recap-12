document.title = "DOM DOM";

const myHeader = document.getElementById("header");
console.log(myHeader);
myHeader.style.backgroundColor = "red";
myHeader.style.color = "white";

const addButon = document.getElementById("btn");
console.log(addButon);

addButon.style.backgroundColor = "#bebe";
addButon.style.border = "none";
addButon.style.borderRadius = "10px";
addButon.style.padding = "0.6rem";
addButon.value = "SAVE";

const h1 = document.getElementById("heading1");
console.log(h1);
h1.textContent = "DOM Introduction";
console.log(h1.textContent);
console.log(h1.innerText);
console.log(h1.innerHTML);

const myInputs = document.getElementsByTagName("li");
console.log(myInputs);

console.log("Size:", myInputs.length);

console.log(myInputs[0]);
console.log(myInputs[1]);

console.log(document.getElementsByTagName("h3")[0]);

console.log(myInputs.item(1));

const myList = document.getElementsByTagName("li");
const myListArr = [...myList];
console.log(myListArr);
myListArr.forEach((li) => (li.style.color = "red"));

const myListArr1 = Array.from(myList);
console.log(myListArr1);
myListArr1.map((li) => (li.style.listStyleType = "none"));

const lists = document.getElementsByClassName("list");
console.log(lists);

const listsArr = [...lists];
listsArr.forEach((li) => console.log(li));

lists[2].innerHTML = "<h1>javascript language</h1>";
lists[3].innerText = "<h1>React</h1>";
lists[4].textContent = "<h1>VUE</h1>";

const header = document.querySelector("#header");
console.log(header);

const itemList = document.querySelector(".list");
console.log(itemList);

const h2 = document.querySelector("h2");
console.log(h2);

const otherH2 = document.querySelector("section h2");
const buton = document.querySelector("section.add-item #btn");
console.log(buton);

const react = document.querySelector("section.item-list ul li:nth-child(4)");
console.log(react);

const listeler = document.querySelectorAll("ul li");
console.log(listeler);
listeler.forEach((li) => console.log(li));

for (const liste of listeler.values()) {
  console.log(liste);
}
