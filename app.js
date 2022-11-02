


// #pragma GLOBAL VARIABLES + WINDOWS INTO DOM
let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// DOM manipulation step 1

let shopSection = document.getElementById('shopSales');

console.dir(sales);

// #pragma HELPER FUNCTIONS - UTILITIES

// grabbed from MDN docs

function randomCust(min, max) {
  let customers = [];
  for (let i = 0; i < shopHours.length; i++) {
    let randomCustomers = Math.floor(Math.random() * (max - min + 1) + min);
    customers.push(randomCustomers);
  }
  return customers;
}

// #pragma OBJECT LITERALS
function stores(name, mincust, maxcust, avgCookieSales, cookieNums, customers) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSales = avgCookieSales;
  this.total = 0;
  this.customers = [];
}

let Seattle = {
  total: 0,
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  cookieNums [],
  customers [],
  randomCookies: function(min, max) {
    let customers = [];
    for (let i = 0; i < shopHours.length; i++) {
      let randomCustomers = Math.floor(Math.random(max - min + 1) + min);
      customers.push(randomCustomers);
    }
}


let headers = []

render: function () {
  this.cookies = randomCookie(this.customers, this.avgCookieSale);

  // ********* DOM MANIPULATION **********
  // ** STEP 2: CREATE THE ELEMENT

  let articleElem = document.createElement('article');
  // ** STEP 3: GIVE CONTEXT IF NECESSARY
  // skip for articleElem

  // ** STEP 4: ADD IT TO THE DOM ---> parent.appendChild(child)
  /*e
    <div></div>
  */
  shopSection.appendChild(articleElem);
  /*
    <div>
      <artcile></article>
    </div>
  */

  //create h2 element

  let h2Elem = document.createElement('h2'); // <h2></h2>
  h2Elem.textContent = this.location; // <h2>Seattle</h2>
  articleElem.appendChild(h2Elem); 
  /*
   <div>
    <article>
      <h2>Seattle</h2>
    </article>
   </div> 
   */

  //create unordered list

  let ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);
  /*
   <div>
    <article>
      <h2>Seattle</h2>
      <ul></ul>
    </article>
   </div> 
   */

  for (let i = 0; i < storeHours.length; i++) {
    let liElem = document.createElement('li'); // <li></li>
    liElem.textContent = `${storeHours[i]}: ${this.cookies[i]} cookies`;
    // <li>6am: 55 cookies</li>
    ulElem.appendChild(liElem);
    /*
   <div>
    <article>
      <h2>Seattle</h2>
      <ul>
        <li>6am: 55 cookies</li>
        <li>7am: 120 cookies</li>
      </ul>
    </article>
   </div> 
   */
  }
}
;
seattleShop.cust = randomCust(seattleShop.minCust, seattleShop.maxCust);
seattleShop.render();

let Tokyo = {
  total: 0,
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
}

let Dubai = {
  total: 0,
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
}

let Paris = {
  total: 0,
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3;
}

let Lima = {
  total: 0,
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  acvCookieSale: 4.6;
}

class shops {
  constructor(minCust, maxCust, avgCookieSales) {
    this.minimumCustomers = minCust
    this.maximumCustomers = maxCust
    this.averageCookieSales = avgCookieSales

    total: 0,
    name: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookieSale: 6.3,
    cookieNums [],
    customers [],
  }
}

var shopsOne = new shopsOne();

// #pragma EXECUTABLE CODE


