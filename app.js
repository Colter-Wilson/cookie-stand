// #pragma GLOBAL VARIABLES + WINDOWS INTO DOM
'use strict';

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let stores = []

let tableElem = document.getElementById('table')
console.log(tableElem)

function Stores(name, minCust, maxCust, avgCookieSales) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSales = avgCookieSales;
  this.total = 0;
  this.custsHour = [];
  this.cookieNums = [];
  Stores.all.push(this);

}


// DOM manipulation step 1


// #pragma HELPER FUNCTIONS - UTILITIES

function makeHeader() {
  let tableRow = document.createElement('tr')
  let firstData = document.createElement('td');
  firstData.textContent = "Locations"
  tableRow.appendChild(firstData);
  console.log(tableRow)

  
  for (let i = 0; i < storeHours.length; i++) {
    let tableData = document.createElement('td');
    tableData.textContent = storeHours[i]; // td 6am td
    tableRow.appendChild(tableData);

  }
  let totalsElem =  document.createElement('td');
  totalsElem.textContent = 'city total'
  tableRow.appendChild(totalsElem)
  tableElem.appendChild(tableRow);
}
Stores.all = []

new Stores('Seattle', 23, 65, 6.3);
new Stores('Tokyo', 3, 24, 1.2);
new Stores('Dubai', 11, 38, 3.7);
new Stores('Paris', 20, 38, 2.3);
new Stores('Lima', 2, 16, 4.6);

function makeFooter() {

  let footerRow = document.createElement('tr')
  tableElem.appendChild(footerRow)
  
  
  
  let firstFooterData = document.createElement('td')
  firstFooterData.textContent = "Totals"
  footerRow.appendChild(firstFooterData)
  
  for (let i = 0; i < storeHours.length; i++) {
    let hourTotal = 0;
    console.log('outerloop')
  
  
   for (let j = 0; j < stores.length; j++) {
    console.log('innerloop')

    
  

   }
    }
 }


Stores.prototype.randomCust = function () {

  for (let i = 0; i < storeHours.length; i++) {
    let randomCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    this.custsHour.push(randomCustomers);
  }

}

Stores.prototype.cookiesPerHour = function () {
  this.randomCust()
  for (let i = 0; i < storeHours.length; i++) {
    let oneHour = Math.round(this.custsHour[i] * this.avgCookieSales)

    this.cookieNums.push(oneHour)

    this.total += oneHour;
  }
}

// #pragma CONSTRUCTOR FUNCTION


Stores.prototype.render = function () {
  this.cookiesPerHour()
  let tableRow = document.createElement('tr');

  let dataElement = document.createElement('th');
  dataElement.textContent = this.name;

  // tableElem.appendChild(tableRow);
  tableRow.appendChild(dataElement);

  for (let i = 0; i < storeHours.length; i++) {
    dataElement = document.createElement('td');
    dataElement.textContent = this.cookieNums[i];
    tableRow.appendChild(dataElement);
  }

  let totalRow = document.createElement('td');
  totalRow.textContent = this.total;
  
  tableRow.appendChild(totalRow);
  
  tableElem.appendChild(tableRow);
 
};






function renderAll() {
  makeHeader();
  console.log('renderAll')
  for (let i = 0; i < Stores.all.length; i++) {
    Stores.all[i].render()
  }
  makeFooter();
}

renderAll();