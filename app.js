'use strict';

// -------------------------------------------------------------------------------
// Helper functions
// -------------------------------------------------------------------------------

// Create new row element and add it to the table element
function createRow(table) {
  let tableRow = document.createElement('tr')
  table.appendChild(tableRow)
  return tableRow
}

// Create new row header element with a tile and add it to the row
function createRowHeader(tableRow, title) {
  let rowHeader = document.createElement('th');
  rowHeader.textContent = title
  rowHeader.style.fontWeight = 600
  tableRow.appendChild(rowHeader)
}

// Create new row cell with content and add it to the row
function createRowCell(tableRow, content) {
  let tableCell = document.createElement('td');
  tableCell.textContent = content
  tableRow.appendChild(tableCell);
}




// -------------------------------------------------------------------------------
// END OF HELPER METHODS
// -------------------------------------------------------------------------------

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let storeHoursTotal = Array(storeHours.length).fill(0)
let allDailyTotal = 0
// let stores = []
let tableElem = document.getElementById('table')


Stores.all = []

function handleFormSubmit() {
  var elements = document.getElementById("newCity").elements;
  var storeCityData ={};
  for(var i = 0 ; i < elements.length ; i++){
      var item = elements.item(i);
      storeCityData[item.name] = item.value;
  }

  console.log(storeCityData)
  let newStore = new Stores(storeCityData.city, storeCityData.mincookies, storeCityData.maxcookies, storeCityData.avgcookies)
  console.log(newStore);
  newStore.render()
}

new Stores('Seattle', 23, 65, 6.3);
new Stores('Tokyo', 3, 24, 1.2);
new Stores('Dubai', 11, 38, 3.7);
new Stores('Paris', 20, 38, 2.3);
new Stores('Lima', 2, 16, 4.6);



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

function makeHeader() {
  let tableRow = createRow(tableElem)
  tableRow.style.fontWeight = 600
  createRowHeader(tableRow, 'Locations')
  for (let i = 0; i < storeHours.length; i++) {
    createRowCell(tableRow, storeHours[i])
  }
  createRowCell(tableRow, 'City Total')
}

function makeFooter() {
  let footerRow = createRow(tableElem)
  createRowHeader(footerRow, 'Totals')
  for (let i = 0; i < storeHoursTotal.length; i++) {
    createRowCell(footerRow, storeHoursTotal[i])
  }
  createRowCell(footerRow, allDailyTotal)
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

Stores.prototype.render = function () {
  this.cookiesPerHour()
  let tableRow = createRow(tableElem)
  createRowHeader(tableRow, this.name)
  for (let i = 0; i < storeHours.length; i++) {
    createRowCell(tableRow, this.cookieNums[i])
    storeHoursTotal[i] += this.cookieNums[i]
  }
  createRowCell(tableRow, this.total)
  allDailyTotal += this.total
};

function renderAll() {
  makeHeader();
  for (let i = 0; i < Stores.all.length; i++) {
    Stores.all[i].render()
  }
  makeFooter();
}

renderAll();