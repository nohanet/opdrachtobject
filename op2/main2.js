const btn11 = document.querySelector(".add-users1");

const text11 = document.querySelector(".voornaam1");
const text21 = document.querySelector(".achternaam1");
const text31 = document.querySelector(".leeftijd1");
const text41 = document.querySelector(".volnaam1");

const btn12 = document.querySelector(".add-users2");

const text12 = document.querySelector(".voornaam2");
const text22 = document.querySelector(".achternaam2");
const text32 = document.querySelector(".leeftijd2");
const text42 = document.querySelector(".volnaam2");

const btn13 = document.querySelector(".add-users3");

const text13 = document.querySelector(".voornaam3");
const text23 = document.querySelector(".achternaam3");
const text33 = document.querySelector(".leeftijd3");
const text43 = document.querySelector(".volnaam3");

const users = document.querySelector(".all-users")

const array1 = [text11, text12, text13]
console.log(btn11);
console.log(array1);


btn11.addEventListener("click", function(){
    const prompt11 = prompt("wat is je voornaam?");
    const prompt21 = prompt("wat is je achternaam?");
    const prompt31 = prompt("hoe oud ben je?");
    console.log("het werkt");

    text11.textContent = prompt11;
    text21.textContent = prompt21;
    text31.textContent = prompt31;
    text41.textContent = prompt11 + " " + prompt21;
});

btn12.addEventListener("click", function(){
    const prompt12 = prompt("wat is je voornaam?");
    const prompt22 = prompt("wat is je achternaam?");
    const prompt32 = prompt("hoe oud ben je?");
    console.log("het werkt");

    text12.textContent = prompt12;
    text22.textContent = prompt22;
    text32.textContent = prompt32;
    text42.textContent = prompt12 + " " + prompt22;
});

btn13.addEventListener("click", function(){
    const prompt13 = prompt("wat is je voornaam?");
    const prompt23 = prompt("wat is je achternaam?");
    const prompt33 = prompt("hoe oud ben je?");
    console.log("het werkt");

    text13.textContent = prompt13;
    text23.textContent = prompt23;
    text33.textContent = prompt33;
    text43.textContent = prompt13 + " " + prompt23;
});


