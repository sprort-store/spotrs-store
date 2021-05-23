'use strict';

let clothsection = document.getElementById('clothesSection')
let machinesectionEl = document.getElementById('machinesection')
let shosesectionEl = document.getElementById('shoseSection')
let toolsectionEl = document.getElementById('toolsSection')
function renderImageCat()
{
 
  generateCatalog();
  addToCategory();

  
console.log(chlothes)
for( let j=0; j<chlothes.length ; j++)
{
  
  let clothdivEl = document.createElement('div');
  clothsection.appendChild(clothdivEl);
  // let madivEl = document.createElement('div')
  // machinesectionEl.appendChild(madivEl)
  let clothesimgEl=document.createElement('img');
  clothesimgEl.setAttribute('src',chlothes[j].filePath);
  clothdivEl.appendChild(clothesimgEl);
}
// for (let i = 0; i<machine.length;i++)
// {
//   let clothdivEl = document.createElement('div');
//   machinesectionEl.appendChild(clothdivEl);
// }



for( let j=0; j<machine.length ; j++)
{
  
  let machdivEl = document.createElement('div');
  machinesection.appendChild(machdivEl);
  // let madivEl = document.createElement('div')
  // machinesectionEl.appendChild(madivEl)
  let machimgEl=document.createElement('img');
  machimgEl.setAttribute('src',machine[j].filePath);
  machdivEl.appendChild(machimgEl);
}
for( let j=0; j<shoes.length ; j++)
{
  
  let shodivEl = document.createElement('div');
  shoseSection.appendChild(shodivEl);
  let shoimgEl=document.createElement('img');
  shoimgEl.setAttribute('src',shoes[j].filePath);
  shodivEl.appendChild(shoimgEl);
}
for( let j=0; j<tools.length ; j++)
{
  
  let toodivEl = document.createElement('div');
  toolsSection.appendChild(toodivEl);
  let tooimgEl=document.createElement('img');
  tooimgEl.setAttribute('src',tools[j].filePath);
  toodivEl.appendChild(tooimgEl);
}
}
renderImageCat();

