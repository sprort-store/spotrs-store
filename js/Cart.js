/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
// table.addEventListener('click', removeItemFromCart);
let cart;

let cartcountEl = document.getElementById('count')
function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}
//let formEl= document.getElementById("new-user")

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() { }


// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
let tableEl;
let delrowIn;
let deleteItem;
let valueEl = 0;
let billArray = [];

function showCart() {
  tableEl = document.getElementById("ta")

  // TODO: Find the table body
  for (let i = 0; i < cart.items.length; i++) {
    let trEl = document.createElement('tr');
    let delrowIn = i + 1;
    tableEl.appendChild(trEl)
    let td1El = document.createElement('td')
    trEl.appendChild(td1El)
    td1El.textContent = cart.items[i].product;
    trEl.setAttribute('id', '${td1El.textcontent}')
    let td2El = document.createElement('td')
    trEl.appendChild(td2El)
    td2El.textContent = cart.items[i].price;
    let td3El = document.createElement('td')
    trEl.appendChild(td3El)
    td3El.textContent = cart.items[i].quantity;
    let totalpriceEl = td2El.textContent * td3El.textContent;
    let td4El = document.createElement('td')
    trEl.appendChild(td4El)
    td4El.textContent = totalpriceEl;
    let td5El = document.createElement('td')
    trEl.appendChild(td5El)
    let removebtEl = document.createElement('button');
    removebtEl.setAttribute('onclick', "removeItemFromCart(this)")
    removebtEl.textContent = "x"
    td5El.appendChild(removebtEl);


    valueEl = valueEl + totalpriceEl;
    billArray.push(totalpriceEl);

  }


}






function removeItemFromCart(event) {

  tableEl = document.getElementById('ta');
  cart.items.splice((event.parentNode.parentNode.rowIndex) - 1, 1)
  billArray.splice((event.parentNode.parentNode.rowIndex) - 1, 1)
  tableEl.deleteRow(event.parentNode.parentNode.rowIndex);
  localStorage.removeItem('cart');
  let data = JSON.stringify(cart.items);
  localStorage.setItem('cart', data);

  loadCart();
  cartupdateCount();

}

let bbtnEl = document.getElementById('bbtn');
let bbtnspanEl = document.getElementById('bill');

bbtnEl.addEventListener('click', billCalc);
function billCalc() {
  bbtnspanEl.textContent = valueEl;
  let sum = 0;
  document.getElementById('new-user').style.display = 'block';
  document.getElementById('track').style.display = 'block';
  document.getElementById('bill').style.display = 'block';
  for (let i = 0; i < billArray.length; i++) {
    sum = sum + billArray[i];
  }
  bbtnspanEl.textContent = sum;
  // formEl.hidden = false;
}

function cartupdateCount() {
  cartcountEl.textContent = ""
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  let cart = new Cart(cartItems);
  if (cart.items.length !== 0) {
    cartcountEl.textContent = `(${cart.items.length})`;
  }
}

cartupdateCount();
renderCart();

