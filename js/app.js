'use strict';


// Cart constructor.

const Cart = function(items) { ///////////////////////////
  // this.items is an array of CartItem instances.
  this.items = items;
  

  Cart.allcart.push(this);

  
};

Cart.allcart = []; // array



Cart.prototype.addItem = function(product, quantity, price) { // function to add items 
  
  
  //this.items = new CartItem(product, quantity);

  // console.log(Cart.allcart);
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items

};

Cart.prototype.saveToLocalStorage = function() {


  
  let data = JSON.stringify(CartItem.allItems);
  localStorage.setItem('cart', data);  



  // TODO: Fill in this instance method to save the contents of the cart to localStorage
};

Cart.prototype.removeItem = function(item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
};
function generateprductImage() {
    
    //return Math.floor(Math.random() * product.length);
}


const CartItem = function(product, quantity , price) { //////////////////////
  this.product = product;
  this.quantity = quantity;
  this.price = price;



  CartItem.allItems.push(this);

  // console.log(CartItem.allItems);
};

CartItem.allItems= [];

// Product contructor.
const Product = function(filePath, name) { ///////////////////
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();