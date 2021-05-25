'use strict';

let clothsection = document.getElementById('clothesSection')
let machinesectionEl = document.getElementById('machinesection')
let shosesectionEl = document.getElementById('shoseSection')
let toolsectionEl = document.getElementById('toolsSection')
let countEl = document.getElementById('count')
let cart = new Cart([])
// let count=0;
generateCatalog();
//cart.saveToLocalStorage();
  addToCategory();
 let qu; 
function renderImageCat()
{
 
  

  
console.log(chlothes)
for( let j=0; j<chlothes.length ; j++)
{
  let clothdivEl;
  let clothesimgEl
  let chlthesLabel
  let chlthesLabelp
  let quantityIn 
  let quantityLabel
  let clothBt
  clothdivEl = document.createElement('div');
  clothsection.appendChild(clothdivEl);
   clothesimgEl=document.createElement('img');
  clothesimgEl.setAttribute('src',chlothes[j].filePath);
  clothdivEl.appendChild(clothesimgEl);
   chlthesLabel =document.createElement('label');
  clothdivEl.appendChild(chlthesLabel);
  chlthesLabel.textContent=chlothes[j].name;
   chlthesLabelp =document.createElement('label');
  clothdivEl.appendChild(chlthesLabelp);
  chlthesLabelp.textContent='$'+chlothes[j].price;
   quantityLabel = document.createElement('label')
  quantityLabel.textContent= "Quantity"
  clothdivEl.appendChild(quantityLabel)
   quantityIn = document.createElement('input')
  quantityIn.setAttribute('type', 'number')
  quantityIn.id=`cloth${j}`
  quantityIn.addEventListener('change',function(){qu=quantityIn.value})
  clothdivEl.appendChild(quantityIn)
 clothBt = document.createElement('button')
  clothdivEl.appendChild(clothBt)
  clothBt.textContent = "Add to Cart"
  //clothBt.setAttribute('type', 'submit')
  // clothBt.id = 
  clothBt.setAttribute('onclick',`sendtoItem('${chlthesLabel.textContent}','${chlthesLabelp.textContent}','${quantityIn.id}')`)
  // clothBt.addEventListener('click',)
  
}
  
//document.getElementById('cloth0').addEventListener('click',cart.addItem(chlthesLabel.textContent,quantityIn.value, parseInt(chlthesLabelp.textContent.substr(1))))
//document.getElementById('cloth0').addEventListener('click',sendtoItem)
for( let j=0; j<machine.length ; j++)
{
  
  let machdivEl = document.createElement('div');
  machinesection.appendChild(machdivEl);

  let machimgEl=document.createElement('img');
  machimgEl.setAttribute('src',machine[j].filePath);
  machdivEl.appendChild(machimgEl);
  let machinLabel =document.createElement('label');
  machdivEl.appendChild(machinLabel);
  machinLabel.textContent=machine[j].name;
  let machineLabelp =document.createElement('label');
  machdivEl.appendChild(machineLabelp);
  machineLabelp.textContent='$'+machine[j].price;
  let quantityLabel = document.createElement('label')
  quantityLabel.textContent = "Quantity"
  machdivEl.appendChild(quantityLabel)
  let quantityIn = document.createElement('input')
  quantityIn.setAttribute('type', 'number')
  quantityIn.id=`machine${j}`
  quantityIn.addEventListener('change',function(){qu=quantityIn.value})
  machdivEl.appendChild(quantityIn)
  let machinBt = document.createElement('button')
  machdivEl.appendChild(machinBt)
  machinBt.textContent = "Add to Cart"
  machinBt.setAttribute('onclick',`sendtoItem('${machinLabel.textContent}','${machineLabelp.textContent}','${quantityIn.id}')`)

}
for( let j=0; j<shoes.length ; j++)
{
  
  let shodivEl = document.createElement('div');
  shoseSection.appendChild(shodivEl);
  let shoimgEl=document.createElement('img');
  shoimgEl.setAttribute('src',shoes[j].filePath);
  shodivEl.appendChild(shoimgEl);
  let shoseLabel =document.createElement('label');
  shodivEl.appendChild(shoseLabel);
  shoseLabel.textContent=shoes[j].name;
  let shoseLabelp =document.createElement('label');
  shodivEl.appendChild(shoseLabelp);
  shoseLabelp.textContent='$'+shoes[j].price;
  let quantityLabel = document.createElement('label')
  quantityLabel.textContent = "Quantity"
  shodivEl.appendChild(quantityLabel)
  let quantityIn = document.createElement('input')
  quantityIn.setAttribute('type', 'number')
  quantityIn.id=`shoes${j}`
  quantityIn.addEventListener('change',function(){qu=quantityIn.value})
  shodivEl.appendChild(quantityIn)
  let shosBt = document.createElement('button')
  shodivEl.appendChild(shosBt)
  shosBt.textContent = "Add to Cart"
  shosBt.setAttribute('onclick',`sendtoItem('${shoseLabel.textContent}','${shoseLabelp.textContent}','${quantityIn.id}')`)

}
for( let j=0; j<tools.length ; j++)
{
  
  let toodivEl = document.createElement('div');
  toolsSection.appendChild(toodivEl);
  let tooimgEl=document.createElement('img');
  tooimgEl.setAttribute('src',tools[j].filePath);
  toodivEl.appendChild(tooimgEl);
  let toolsLabel =document.createElement('label');
  toodivEl.appendChild(toolsLabel);
  toolsLabel.textContent=tools[j].name;
  let toolsLabelp =document.createElement('label');
  toodivEl.appendChild(toolsLabelp);
  toolsLabelp.textContent='$'+tools[j].price;
  let quantityLabel = document.createElement('label')
  quantityLabel.textContent = "Quantity"
  toodivEl.appendChild(quantityLabel)
  let quantityIn = document.createElement('input')
  quantityIn.setAttribute('type', 'number')
  quantityIn.id=`tools${j}`
  quantityIn.addEventListener('change',function(){qu=quantityIn.value})
  toodivEl.appendChild(quantityIn)
  let toolsBt = document.createElement('button')
  toodivEl.appendChild(toolsBt)
  toolsBt.textContent = "Add to Cart"
  toolsBt.setAttribute('onclick',`sendtoItem('${toolsLabel.textContent}','${toolsLabelp.textContent}','${quantityIn.id}')`)

}

}
//CloadCart();
shupdateCount();
renderImageCat();

function sendtoItem(a,c,d)
{
  shupdateCount()
  //CloadCart();
  
  if(document.getElementById(`${d}`).value){
    cart.addItem(a,qu, parseInt(c.substr(1)))
    cart.saveToLocalStorage();
    
    
  }
  
  console.log(CartItem.allItems)
  document.getElementById(`${d}`).value = null;
  if(CartItem.allItems.length !== 0){
    countEl.textContent = `(${CartItem.allItems.length})`;}
  

}
function shupdateCount() {
  countEl.textContent=""
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
   cart = new Cart(cartItems);
  if( cart.items.length !== 0 ){
    countEl.textContent = `(${cart.items.length})`;
  }
}

// cart.saveToLocalStorage();
