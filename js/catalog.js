/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  let oldData = JSON.parse(localStorage.getItem('cart'));
  if(oldData !== undefined & oldData !== null){
    CartItem.allItems = oldData;

    updateCounter();
    updateCartPreview();
    
  }
  
  
  
  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  let optionEl;
  for (let i in Product.allProducts) {
    optionEl = document.createElement('option');
    optionEl.textContent = Product.allProducts[i].name;

    selectElement.appendChild(optionEl);
  }

}
let a,b;

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {


  event.preventDefault();
  // TODO: Prevent the page from reloading
  a = event.target.items.value ;
  b = event.target.quantity.value; 
  // console.log(event.target.items.value); ///////////////////////////////////////

  // let quantityNumber = event.

  
  // Do all the things ...
  addSelectedItemToCart(a, b);
  cart.saveToLocalStorage();


  updateCounter();
  updateCartPreview();

}


// console.log(cart);
// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(a,b) {

  cart.addItem(a,b);


  
  // console.log(cart);

  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  let name = document.getElementById('itemCount');

  if(CartItem.allItems.length !== 0){
    name.textContent = `(${CartItem.allItems.length})`;
  }
}

let ulEl = document.createElement('ul');

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  let cartContents = document.getElementById('cartContents');
  
  ulEl.textContent='';
  
  cartContents.appendChild(ulEl);
  
  let liEl;
  for(let i=0;i<CartItem.allItems.length;i++){
    liEl = document.createElement('li');
    ulEl.appendChild(liEl);

    liEl.textContent = `${CartItem.allItems[i].quantity} : ${CartItem.allItems[i].product} `;
  }
  

  
  

  


  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}
// fill image item in its category in category page 
function renderImageCat()
{

}
// // fill image item in its category in main page 

// let clothesCatIn;
// let machineCatIn;
// let shoesCatIn;
// let toolsCatIn;


// console.log(clothes)
// function renderImagCatMain()
// {
// clothesCatIn=generateprductImage()[0];
// machineCatIn=generateprductImage()[1];
// shoesCatIn = generateprductImage() [2];
// toolsCatIn= generateprductImage()[3];

// let clothesdivEl =document.getElementById("clothescat")
// let machinedivEl =document.getElementById("machinecat")
// let shoesdivEl =document.getElementById("shoescat")
// let toolsdivEl =document.getElementById("toolscat")
  
// let imgEl=document.createElement('img');
// imgEl.appendChild(clothesdivEl)
// imgEl.setAttribute('src', clothes)





// }
// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();