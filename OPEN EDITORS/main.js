// console.log(document.all);

// document.title="Document Object Model";
// console.log(document.title);

// console.log(document.getElementById('frmt'));
// var formTitle=document.getElementById('frmt');
// console.log(formTitle);

// formTitle.textContent='Add shopping Items';
// formTitle.innerText='Shopping Items';
// formTitle.innerHTML='<i>Hello</i> Add Items';


// console.log(formTitle.textContent);
// console.log(formTitle.innerText);
// console.log(formTitle.innerHTML);

// var navigation=document.getElementById('navbar');
// navigation.style.backgroundColor = '#148692';
//navigation.style.color='#fbbf';

//--Select elemets using Class name--
var items =document.getElementsByClassName('items');
console.log(items);
items[2].textContent = 'Hand bag';

//--Styling--
items[2].style.fontFamily='times new roman';
items[2].style.backgroundcolor='#ebca14';

for(var i of items){
    i.style.backgroundColor = '#a7520c';
}

//--ID
var hd = document.querySelector('#navbar');
hd.style.border='solid 3px #000'

//--Tag
var input=document.querySelector('input');
input.style.backgroundColor='#ebca14';
input.value='Paint Bucket'; 

//--Class
var item=document.querySelector('.items');
item.style.backgroundColor='#ebca14';

console.log(itemList.previousElementSibling);


//---create an input--
var input=document.createElement('input');

//Add a class
input.className='test';

//Add an ID
input.id='last';

//Add an attribute
input.setAttribute('type','text');
console.log(input);

//create a div
var newDiv=document.createElement('div');

//create text node
var newText=document.createTextNode('How are you!');

//Add text to div
newDiv.appendChild(newText);
console.log(newDiv);

//Insert created element to the document
var form=document.querySelector('.frm form');
var button=document.querySelector('.frm form button');

form.insertBefore(input, button);