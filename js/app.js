'use strict';
let chlothes = [];
let shoes = [];
let machine = [];
let tools = [];


// Cart constructor.

const Cart = function (items) { ///////////////////////////
  // this.items is an array of CartItem instances.
  this.items = items;


  Cart.allcart.push(this);


};

Cart.allcart = []; // array



Cart.prototype.addItem = function (product, quantity, price) { // function to add items 


  //this.items = new CartItem(product, quantity);

  // console.log(Cart.allcart);
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items

};

Cart.prototype.saveToLocalStorage = function () {



  let data = JSON.stringify(CartItem.allItems);
  localStorage.setItem('cart', data);



  // TODO: Fill in this instance method to save the contents of the cart to localStorage
};

Cart.prototype.removeItem = function (item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
};
function generateprductImage() {
  let randomIndex=[];
let clothesRandomVar=Math.floor(Math.random() * chlothes.length);
let machineRandomVar=Math.floor(Math.random() * machine.length);
let shoesRandomVar=Math.floor(Math.random() * shoes.length);
let toolsRandomVar=Math.floor(Math.random() * tools.length);
randomIndex=[clothesRandomVar,machineRandomVar,shoesRandomVar,toolsRandomVar];

  return randomIndex;

}


const CartItem = function (product, quantity, price) { //////////////////////
  this.product = product;
  this.quantity = quantity;
  this.price = price;



  CartItem.allItems.push(this);

  // console.log(CartItem.allItems);
};

CartItem.allItems = [];

// Product contructor.
const Product = function (filePath, name, category, price) { ///////////////////
  this.filePath = filePath;
  this.category = category;
  this.name = name;
  this.price = price;
  Product.allProducts.push(this);
};
Product.allProducts = [];


function generateCatalog() {

  new Product("img/clothes/Girls.jpg", "Girls", 'clothes', 35);
  new Product("img/clothes/Q4 Men's Urban Style Outfit.jpg", "Q4 Mens Urban Style Outfit", 'clothes', 40);
  new Product("img/clothes/Q5.jpg", "Q5", 'clothes', 20);
  new Product("img/clothes/Q7 Gucci Fashion.jpg", "clothes/Q7 Gucci Fashion", 'clothes', 20);
  new Product("img/clothes/Q9.jpg", "clothes/Q9", 'clothes', 35);
  new Product("img/clothes/Q10.jpg", "clothes/Q10", 'clothes', 50);
  new Product("img/clothes/Q11.jpg", "Q11", 'clothes', 30);
  new Product("img/clothes/Q12.jpg", "Q12", 'clothes', 15);
  new Product("img/clothes/Q13.jpg", "Q13", 'clothes',55);
  new Product("img/clothes/Q14.jpg", "Q14", 'clothes', 15);
  new Product("img/tools/T1.jpg", "T1", 'tools', 50);
  new Product("img/tools/T2.jpeg", "T2", 'tools', 15 );
  new Product("img/tools/T3.jpg", "T3", 'tools', 20);
  new Product("img/tools/T4.jpeg", "T4", 'tools', 20);
  new Product("img/tools/T5.jpeg", "T5", 'tools', 75);
  new Product("img/tools/T6.jpeg", "T6", 'tools', 85);
  new Product("img/tools/T7.jpg", "T7", 'tools', 150);
  new Product("img/tools/T8.jpg", "T8", 'tools', 45);
  new Product("img/tools/T9.jpg", "T9", 'tools', 270);
  new Product("img/tools/T10.jpeg", "T10", 'tools', 15);
  new Product("img/machine/M1.jpg", "M1", 'machine', 350);
  new Product("img/machine/M2.jpg", "M2", 'machine', 500);
  new Product("img/machine/M3.jpeg", "M3", 'machine' ,300);
  new Product("img/machine/M4.jpeg", "M4", 'machine', 475);
  new Product("img/machine/M5.jpeg", "M5", 'machine',350 );
  new Product("img/machine/M6.jpeg", "M6", 'machine', 100);
  new Product("img/machine/M7.jpg", "M7", 'machine', 275);
  new Product("img/machine/M8.jpg", "M8", 'machine',250);
  new Product("img/machine/M9.jpg", "M9", 'machine', 235);
  new Product("img/machine/M10.jpg", "M10", 'machine',200);
  new Product("img/shoes/S1.jpg", "S1", 'shoes', 35);
  new Product("img/shoes/S2.jpg", "S2", 'shoes',75);
  new Product("img/shoes/S3.jpg", "S3", 'shoes',90);
  new Product("img/shoes/S4.jpg", "S4", 'shoes',85);
  new Product("img/shoes/S5.jpg", "S5", 'shoes',90);
  new Product("img/shoes/S6.jpg", "S6", 'shoes',80);
  new Product("img/shoes/S7.jpg", "S7", 'shoes',70);
  new Product("img/shoes/S8.jpeg", "S8", 'shoes',55);
  new Product("img/shoes/S9.jpg", "S9", 'shoes',65);
  new Product("img/shoes/S10.jpg", "S10", 'shoes',50);


}
 function addToCategory() {
  for (let i = 0; i < Product.allProducts.length; i++) {
    if (Product.allProducts[i].category == 'clothes') {
      chlothes.push(Product.allProducts[i]);
    }
     if (Product.allProducts[i].category == 'shoes') { shoes.push(Product.allProducts[i]); }
     if (Product.allProducts[i].category == 'machine') { machine.push(Product.allProducts[i]); }
     if (Product.allProducts[i].category == 'tools') { tools.push(Product.allProducts[i]); }
    // else { console.log('Wrong category'); }
  }
}
//let clothessectionEl = document.getElementById('clothesSection')

// renderImageCat();

console.log(chlothes);
console.log(shoes);
console.log(tools);
console.log(machine);
console.log(Product.allProducts);
console.log(generateprductImage());
// let chlothes = [];
// let shoes = [];
// let machine = [];
// // let tools = [];



// Initialize the app by creating the big list of products with images and names
