'use strict';
let chlothes = [];
let shoes = [];
let machine = [];
let tools = [];



const Cart = function (items) {
  this.items = items;


  Cart.allcart.push(this);


};

Cart.allcart = []; // array



Cart.prototype.addItem = function (product, quantity, price) {


  this.items = new CartItem(product, quantity, price);


};

Cart.prototype.saveToLocalStorage = function () {

  let data = JSON.stringify(CartItem.allItems);
  localStorage.setItem('cart', data);





};

Cart.prototype.removeItem = function (item) {

};
function generateprductImage() {
  let randomIndex = [];
  let clothesRandomVar = Math.floor(Math.random() * chlothes.length);
  let machineRandomVar = Math.floor(Math.random() * machine.length);
  let shoesRandomVar = Math.floor(Math.random() * shoes.length);
  let toolsRandomVar = Math.floor(Math.random() * tools.length);
  randomIndex = [clothesRandomVar, machineRandomVar, shoesRandomVar, toolsRandomVar];

  return randomIndex;

}


const CartItem = function (product, quantity, price) { //////////////////////
  this.product = product;
  this.quantity = quantity;
  this.price = price;


  CartItem.allItems.push(this);



};

CartItem.allItems = [];
let cartItems = JSON.parse(localStorage.getItem('cart'))
if (cartItems !== null) {
  CartItem.allItems = cartItems;
}

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

  new Product("img/clothes/Q2.jpg", "Style Outfit for men", 'clothes', 35);
  new Product("img/clothes/adidas suite.jpg", "Black Short Pants", 'clothes', 40);
  new Product("img/clothes/traning siute.jpg", "Shorts for men", 'clothes', 55);
  new Product("img/clothes/Q4.jpg", "Shorts for Women", 'clothes', 15);
  new Product("img/clothes/Q5.jpg", "black hoodie", 'clothes', 20);
  new Product("img/clothes/Q6.jpg", "Pajamas for men", 'clothes', 30);
  new Product("img/clothes/Q7.jpg", "white hoodie", 'clothes', 20);
  new Product("img/clothes/Q8.jpg", "Shorts for men", 'clothes', 15);
  new Product("img/clothes/Q9.jpg", "Pajamas for men", 'clothes', 35);
  new Product("img/clothes/Q10.jpg", "Blouse and trousers", 'clothes', 50);

  new Product("img/tools/T1.jpg", "Reach Air Bike  ", 'tools', 50);
  new Product("img/tools/T2.jpeg", "sport water glass", 'tools', 15);
  new Product("img/tools/T3.jpg", "ergonomic Sport", 'tools', 150);
  new Product("img/tools/T4.jpg", "Grip Strengthener", 'tools', 20);
  new Product("img/tools/T5.jpg", "Boldfit Rubber ", 'tools', 75);
  new Product("img/tools/T6.jpg", "Leather  Lifting", 'tools', 85);
  new Product("img/tools/T7.jpg", "Ab Roller Wheel ", 'tools', 20);
  new Product("img/tools/T8.jpg", "Wireless Earbuds", 'tools', 45);
  new Product("img/tools/T9.jpg", "Wooden Weight Tree", 'tools', 270);
  new Product("img/tools/T10.jpg", "Grip Handle Tool ", 'tools', 15);

  new Product("img/machine/M1.jpg", "Powertec Fitness", 'machine', 475);
  new Product("img/machine/M2.jpg", "Red Upper Body", 'machine', 235);
  new Product("img/machine/M3.jpg", "Ab Sit-ups Fitness ", 'machine', 250);
  new Product("img/machine/M4.jpg", "Orbit Track Sport Bike", 'machine', 350);
  new Product("img/machine/M5.jpg", "ProForm Sport RL  ", 'machine', 500);
  new Product("img/machine/M6.jpg", "Health & Fitness ", 'machine', 300);
  new Product("img/machine/M7.jpg", "Bike Exercise Cycle", 'machine', 200);
  new Product("img/machine/M8.jpg", "Lifelong LLF72 Fittness", 'machine', 275);
  new Product("img/machine/M9.jpg", "Abdominal Exercise Machine", 'machine', 200);
  new Product("img/machine/M10.png", "PaceMill Treadmill", 'machine', 200);

  new Product("img/shoes/S1.jpg", "Basketball Sneakers ", 'shoes', 35);
  new Product("img/shoes/S2.jpg", "Cycling Shoes", 'shoes', 75);
  new Product("img/shoes/S3.jpg", "Football Shoes", 'shoes', 90);
  new Product("img/shoes/S4.jpg", "White Golf Shoes ", 'shoes', 85);
  new Product("img/shoes/S5.jpg", "Lacrosse Shoes", 'shoes', 90);
  new Product("img/shoes/S6.jpg", "Soccer  shoes", 'shoes', 80);
  new Product("img/shoes/S7.jpg", "swim trace shoes", 'shoes', 70);
  new Product("img/shoes/S8.jpeg", "Tennis Shoes", 'shoes', 55);
  new Product("img/shoes/S9.jpg", "Running Shoes", 'shoes', 65);
  new Product("img/shoes/S10.jpg", "Walking Shoes", 'shoes', 50);


}
function addToCategory() {
  for (let i = 0; i < Product.allProducts.length; i++) {
    if (Product.allProducts[i].category == 'clothes') {
      chlothes[i % 10] = Product.allProducts[i];
    }
    if (Product.allProducts[i].category == 'shoes') { shoes[i % 10] = Product.allProducts[i]; }
    if (Product.allProducts[i].category == 'machine') { machine[i % 10] = Product.allProducts[i]; }
    if (Product.allProducts[i].category == 'tools') { tools[i % 10] = Product.allProducts[i]; }
  }
}
