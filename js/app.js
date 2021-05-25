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


  this.items = new CartItem(product, quantity,price);
  
   console.log('hello');
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
  

  // console.log(CartItem.allItems);
};

CartItem.allItems = [];
let cartItems = JSON.parse(localStorage.getItem('cart')) 
if(cartItems !== null)
{CartItem.allItems = cartItems;
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

  new Product("img/clothes/Sport suit.jpg", "Style Outfit for men", 'clothes', 35);
  new Product("img/clothes/adidas suite.jpg", "Style Outfit for men", 'clothes', 40);
  new Product("img/clothes/traning siute.jpg", "Shorts for men", 'clothes', 55);
  new Product("img/clothes/Q4.jpg", "Shorts for Women", 'clothes', 15);
  new Product("img/clothes/Q5.jpg", "sweater for men ", 'clothes', 20);
  new Product("img/clothes/Q6.jpg", "Pajamas for men", 'clothes', 30);
  new Product("img/clothes/Q7.jpg", " sweater for men ", 'clothes', 20);
  new Product("img/clothes/Q8.jpg", "Shorts for men", 'clothes', 15);
  new Product("img/clothes/Q9.jpg", "Pajamas for men", 'clothes', 35);
  new Product("img/clothes/Q10.jpg", "Blouse and trousers", 'clothes', 50);

  new Product("img/tools/T1.jpg", "Reach Air Bike  ", 'tools', 50);
  new Product("img/tools/T2.jpeg", "sport water glass", 'tools', 15);
  new Product("img/tools/T3.jpg", "ergonomic Sport", 'tools', 150);
  new Product("img/tools/T4.jpg", " Grip Strengthener", 'tools', 20);
  new Product("img/tools/T5.jpg", "Boldfit Rubber Tummy Trimmer ", 'tools', 75);
  new Product("img/tools/T6.jpg", " Leather Weight Lifting Belt Body ", 'tools', 85);
  new Product("img/tools/T7.jpg", " Ab Roller Wheel for Abs Workouts", 'tools', 20);
  new Product("img/tools/T8.jpg", "Wireless Bluetooth Stereo Earbuds", 'tools', 45);
  new Product("img/tools/T9.jpg", "Wooden Weight Tree", 'tools', 270);
  new Product("img/tools/T10.jpg", " Grip Handle for Chest Press", 'tools', 15);

  new Product("img/machine/M1.jpg", "Powertec Fitness", 'machine', 475);
  new Product("img/machine/M2.jpg", "Upper Body Pure Kraft", 'machine', 235);
  new Product("img/machine/M3.jpg", "Ab Sit-ups Fitness ", 'machine', 250);
  new Product("img/machine/M4.jpg", "Orbit Track Sport Bike", 'machine', 350);
  new Product("img/machine/M5.jpg", "ProForm Sport RL  ", 'machine', 500);
  new Product("img/machine/M6.jpg", "Sunny Health & Fitness ", 'machine', 300);
  new Product("img/machine/M7.jpg", "Reach Air Bike Exercise Cycle With Moving Handles ", 'machine', 200);
  new Product("img/machine/M8.jpg", "Lifelong LLF72 Fit ", 'machine', 275);
  new Product("img/machine/M9.jpg", "Abdominal Exercise ", 'machine', 200);
  new Product("img/machine/M10.png", "PaceMill Treadmill", 'machine', 200);

  new Product("img/shoes/S1.jpg", "Basketball Sneakers Shoes", 'shoes', 35);
  new Product("img/shoes/S2.jpg", "Cycling Shoes", 'shoes', 75);
  new Product("img/shoes/S3.jpg", "Football Cleats ", 'shoes', 90);
  new Product("img/shoes/S4.jpg", "Golf Shoes", 'shoes', 85);
  new Product("img/shoes/S5.jpg", "Lacrosse Shoes", 'shoes', 90);
  new Product("img/shoes/S6.jpg", "Soccer Cleats shoes", 'shoes', 80);
  new Product("img/shoes/S7.jpg", "swim trace shoes", 'shoes', 70);
  new Product("img/shoes/S8.jpeg", "Tennis Shoes", 'shoes', 55);
  new Product("img/shoes/S9.jpg", "Trail Running Shoes", 'shoes', 65);
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
