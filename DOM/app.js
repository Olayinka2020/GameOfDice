// document.querySelectorAll('.btn').forEach((item)=> {
//     item.addEventListener('click', ()=>[alert('Hello World')
//     ])
//     })

document.body.style.background = 'Green';
document.body.style.color = 'Yellow';
document.getElementById('btn').style.color = 'red'

let btn = document.getElementById('btn');
btn.style.color = 'red';

// Querying the DOM(Document Objet Model- This is the process of reaching and selecting elements.
// getElementById('element')- make sure the id matches
// We can assign to a variable or just go straight using document.getElementById continuously
// lets do basic things, so we understand before going into complex ones.

// Lets select the h1 tag
document.getElementById('title').style.color = 'red';

let title = document.getElementById('title');
title.style.color = 'purple'

// Lets select the btn
// let btn = document.getElementById('btn');
btn.style.color = 'red'
btn.style.backgroundColor = 'yellow'

// getElementByTagName('tagname')
// HTML-Collection = array-like object.
// index, lenght properties, but not all
let Header = document.getElementsByTagName('h2');
Header[0].style.color = 'orange';
console.log(Header);

const list = document.getElementsByTagName('li');
console.log(list);

const listItem = [...list];

listItem.forEach((item) => {
    item.style.color = 'green'
    
});

// getElementsByClassName('classname')- With the class name, we can select multiple elements and get a nodelist.
// Select the element or group of elements you want.
// Select the effect you want for the selection.

let items = document.getElementsByClassName('special');

console.log(items);

items[1].style.color = 'violet'

// Our last 2 methods(Selectors)
// Select the element or group of element you want
// Decide the effect you want to apply to the selection

// querySelector('any cases selector')--selects single Element;
// querySelectorAll(all the css selector)-- selects all, forEach would work here

const anotherItem = document.querySelector('#Result');
anotherItem.style.backgroundColor = 'red'

const singleItems = document.querySelector('.special');
singleItems.style.color = 'orange';

querySelectorAll('any css selector')

const ListItems = document.querySelectorAll('.special');
ListItems.forEach(function(item) {
    item.style.color = 'yellow'
})

// innertext
let para = document.querySelector('p');
para.innerText =+ ' Today'

console.log(para.innerText);

// textContent
let HEADER = document.querySelector('H5')
console.log(HEADER.textContent);
console.log(HEADER.innerText);

// innerHTML
let change = document.querySelector('.html')
change.innerHTML = '<h1>We don finally change am</h1>'

// Changing attribute
const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://facebook.com')

let change1 = document.querySelector('a');
change1.textContent = 'Link to Facebook'

// className
// classlist

const first = document.getElementById('first');
const second = document.getElementById('second');
let third = document.getElementById('third');

const classValue = first.className;
console.log(classValue);

// classList
second.classList.add('colors');
third.classList.add('colors');
second.classList.add('colors');

// lets check if an element has a class using contains
let result = third.classList.contains('colors');

if(result){
    console.log('hello world');
}else {
    console.log('doesnt have the class');
}

let result1 = (third.classList.contains('colors'))? 'hello world':'doesnt have the class'
console.log(result1);

// Events- click, submit
// select elements, addEventListener()
// what to do,

//  const btn = document.querySelector('.btn');
 const heading = document.querySelector('h2');

//  function changeColors(){
//     let hasClass = heading.classList.contains('red')
//     if(hasClass){
//         heading.classList.remove('red')
//     }else{
//         heading.classList.add('red')
//     }
//  }

//  btn.addEventListener('click', changeColors)

























































