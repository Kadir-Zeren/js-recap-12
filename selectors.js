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

const myList = document.getElementsByTagName("li");
const myListArr = [...myList];
console.log(myListArr);
myListArr.forEach((li) => (li.style.color = "red"));

const myListArr1 = Array.from(myList);
console.log(myListArr1);
myListArr1.map((li) => (li.style.listStyleType = "none"));
