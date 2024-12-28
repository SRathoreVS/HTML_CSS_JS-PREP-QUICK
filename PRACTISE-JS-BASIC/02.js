//create a prototye for a prod obj with props like name,price and quantity.Add a method to prod prototype to cal total value

function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

Product.prototype.calculateTotalPrice = function () {
  return this.price * this.quantity;
};

const product1 = new Product("Iphone 15", 60000, 1);
console.log(product1);
console.log(product1.calculateTotalPrice()); // Output: 60000

//Implement a function that makes multiple API calls and processes the data using callback

const makeAPICall = (url, cb) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => cb(handleData(data)))
    .catch((err) => console.log("error :", err));
};
function handleData(data) {
  console.log("Processing data...", data);
}

const main = () => {
  const apiURL1 = "https://jsonplaceholder.typicode.com/users/1";
  const apiURL2 = "https://jsonplaceholder.typicode.com/users/1";

  makeAPICall(apiURL1, handleData);
  makeAPICall(apiURL2, handleData);
};

main();
