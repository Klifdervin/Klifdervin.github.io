"use strict"






let part = "book";

let book = {
    name: "Js",
    age: 3,
    [part] : "Описание",
    author:{
        name: "Andrew",
        surname: "Brown",
}
};




console.log(bookTwo);















/*
let bookTwo = {
    name: "Andrew",
}

console.log(bookTwo);

let bookThree = bookTwo;

console.log(bookTwo);
*/



















/*
let part = "book";

let book = {
    name: "Js",
    age: 3,
    [part] : "Описание",
    author:{
        name: "Andrew",
        surname: "Brown",
}
};

function createBook(name, age){
    return {
        name: name,
        age: age,
};
}



console.log(createBook("Victor", "30"));
console.log(createBook("Victora", "18"));
*/






















/*
function createMessage(text, name){
    return name + ", " + text + "!";
}

function showMessage(message){
    console.log(message);
}

function initMessage(text, name){
    showMessage(createMessage(text, name));
}

initMessage("У вас одно новое сообщение", "Андрей")

















let getCube = (numberOne, numberTwo) => {
    
    console.log("arrow");
    return numberOne * numberTwo;
};


let count = 0;

let time = setTimeout(function(){
    console.log("Hi");
}, 2000);

let int = setInterval(function(){
    clearTimeout(time);
    console.log("Hi");
    count++;
    if (count === 5){
        clearInterval(int);
    }
},1000);
*/



   












