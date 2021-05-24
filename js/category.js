'use strict';

let clothsection = document.getElementById('clothesSection')
let machinesectionEl = document.getElementById('machinesection')
let shosesectionEl = document.getElementById('shoseSection')
let toolsectionEl = document.getElementById('toolsSection')
const cart = new Cart([])
generateCatalog();
  addToCategory();
function renderImageCat()
{
 
  

  
console.log(chlothes)
for( let j=0; j<chlothes.length ; j++)
{
  
  let clothdivEl = document.createElement('div');
  clothsection.appendChild(clothdivEl);
  let clothesimgEl=document.createElement('img');
  clothesimgEl.setAttribute('src',chlothes[j].filePath);
  clothdivEl.appendChild(clothesimgEl);
  let chlthesLabel =document.createElement('label');
  clothdivEl.appendChild(chlthesLabel);
  chlthesLabel.textContent=chlothes[j].name;
  let chlthesLabelp =document.createElement('label');
  clothdivEl.appendChild(chlthesLabelp);
  chlthesLabelp.textContent='$'+chlothes[j].price;
  let quantityLabel = document.createElement('label')
  quantityLabel.textContent = "Quantity"
  clothdivEl.appendChild(quantityLabel)
  let quantityIn = document.createElement('input')
  quantityIn.setAttribute('type', 'number')
  clothdivEl.appendChild(quantityIn)
  let clothBt = document.createElement('button')
  clothdivEl.appendChild(clothBt)
  clothBt.textContent = "Add to Cart"
  clothBt.addEventListener('click',cart.addItem(chlthesLabel.textContent,quantityIn.value,chlthesLabelp.textContent))

}
  
console.log(CartItem.allItems)


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
  machdivEl.appendChild(quantityIn)
  let machinBt = document.createElement('button')
  machdivEl.appendChild(machinBt)
  machinBt.textContent = "Add to Cart"
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
  shodivEl.appendChild(quantityIn)
  let shosBt = document.createElement('button')
  shodivEl.appendChild(shosBt)
  shosBt.textContent = "Add to Cart"
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
  toodivEl.appendChild(quantityIn)
  let toolsBt = document.createElement('button')
  toodivEl.appendChild(toolsBt)
  toolsBt.textContent = "Add to Cart"
}
}
renderImageCat();


