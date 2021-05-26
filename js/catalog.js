/* global Product, Cart */

'use strict';

// (the things in the Product.allProducts array) into the drop down list.



let clothesdivEl = document.getElementById("clothescat")
let machinedivEl = document.getElementById("machinecat")
let shoesdivEl = document.getElementById("shoescat")
let toolsdivEl = document.getElementById("toolscat")





let clothesCatIn;
let machineCatIn;
let shoesCatIn;
let toolsCatIn;


// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  let name = document.getElementById('count');

  if (CartItem.allItems.length !== 0) {
    name.textContent = `(${CartItem.allItems.length})`;
  }
}

let ulEl = document.createElement('ul');

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  let cartContents = document.getElementById('cartContents');

  ulEl.textContent = '';

  cartContents.appendChild(ulEl);

  let liEl;
  for (let i = 0; i < CartItem.allItems.length; i++) {
    liEl = document.createElement('li');
    ulEl.appendChild(liEl);

    liEl.textContent = `${CartItem.allItems[i].quantity} : ${CartItem.allItems[i].product} `;
  }








  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}




let ShOthbuttEl = document.getElementById('ShOthbutt')
if (ShOthbuttEl) {
  ShOthbuttEl.addEventListener('click', showOthers, false);
}

generateCatalog();
addToCategory();
renderImagCatMain();




function showOthers() {

  clothesdivEl.textContent = "";
  machinedivEl.textContent = "";
  shoesdivEl.textContent = "";
  toolsdivEl.textContent = "";

  generateprductImage();
  renderImagCatMain();


}

function renderImagCatMain() {
  clothesCatIn = generateprductImage()[0];
  machineCatIn = generateprductImage()[1];
  shoesCatIn = generateprductImage()[2];
  toolsCatIn = generateprductImage()[3];
  //if(clothesdivEl.textContent !== null || machinedivEl.textContent !== null || shoesdivEl.textContent !==null || toolsdivEl.textContent !==null)


  let aEL = document.createElement('a');
  aEL.textContent = 'Clothes category';
  aEL.href = 'category.html#clothesSection';
  clothesdivEl.appendChild(aEL);
  let aEL1 = document.createElement('a');
  aEL1.textContent = 'Machine category';
  aEL1.href = 'category.html#machinesection';
  machinedivEl.appendChild(aEL1);
  let aEL3 = document.createElement('a');
  aEL3.textContent = 'Shoes category';
  aEL3.href = 'category.html#shoseSection';
  shoesdivEl.appendChild(aEL3);
  let aEL4 = document.createElement('a');
  aEL4.textContent = 'Tools category';
  aEL4.href = 'category.html#toolsSection';
  toolsdivEl.appendChild(aEL4);





  let clothesimgEl = document.createElement('img');
  clothesimgEl.setAttribute('src', chlothes[clothesCatIn].filePath)
  // clothesdivEl.appendChild(clothesimgEl);


  let machineimgEl = document.createElement('img');
  machineimgEl.setAttribute('src', machine[machineCatIn].filePath)
  // machinedivEl.appendChild(machineimgEl);

  let shoesimgEl = document.createElement('img');
  shoesimgEl.setAttribute('src', shoes[shoesCatIn].filePath)
  // shoesdivEl.appendChild(shoesimgEl);

  let toolsimgEl = document.createElement('img');
  toolsimgEl.setAttribute('src', tools[toolsCatIn].filePath)
  // toolsdivEl.appendChild(toolsimgEl);

  // renderImageCat()


}
updateCounter();
