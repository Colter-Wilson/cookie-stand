// #pragma GLOBAL VARIABLES + WINDOWS INTO DOM
'use strict';

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let stores = []

let tableElem = document.getElementById('table')

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
  tableElem.appendChild(tableRow);

  let firstData = document.createElement('td');
  tableRow.appendChild(firstData);


for (let i=0; i < hours.length; i++) {
  let tableData = documennt.createElement('td');
  tableData.textContent = hours[i]; // td 6am td
  tableRow.appendChild(tableData);

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

    this.Total += oneHour;
  }
}

// #pragma CONSTRUCTOR FUNCTION


Stores.prototype.render = function () {
  this.cookiesPerHour()
  let tableRow = document.createElement('tr');
  let city = document.createElement('th');
  city.textContent = this.name;
  tableElem.appendChild(tableRow);
  tableRow.appendChild(city);

  for (let i = 0; i < storeHours.length; i++){
    let tableData = document.createElement('td');
    tableData.textContent = this.cookieNums[i];
    tableRow.appendChild(tableData);
  }

  let totalRow = document.createElement('td');
  totalRow.textContent = this.total;
  tableRow.appendChild(totalRow);
};

Stores.all = []

new Stores('Seattle', 23, 65, 6.3);

function renderAll(){
 for (let i =0; i < Stores.all.length; i++){
   Stores.all[i].render()

 }
}

renderAll();
   

  
 


