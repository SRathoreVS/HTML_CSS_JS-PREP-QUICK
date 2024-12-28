//Hello -world

console.log("hello World");

let hello = "hello world";
console.log(hello);

//loop to print num from 1-5

//for
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//while
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

//do-while
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

//add 2 nums

const addSum = (a, b) => {
  return a + b;
};

console.log(addSum(4, 5));

//arrow -function

const area = (a, b) => {
  let result = 2 * (a + b);
  return result;
};

console.log(area(4, 5));

//reverse the string

let builtinRev = (str) => {
  return str.split("").reverse().join("");
};

const revString = (str) => {
  let result = [];
  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i]);
  }
  return result.join("");
};

console.log(revString("white"));
console.log(builtinRev("white"));

//conditional even or odd

const conditionEorO = (num) => {
  if (num % 2 == 0) {
    console.log(`The number : ${num} is an even number`);
  } else {
    console.log(`The number : ${num} is an odd number`);
  }
};

console.log(conditionEorO(5));

// check the leap year

const leapyear = (year) => {
  if (year % 4 == 0) {
    console.log(`The year : ${year} is an leap year`);
  } else {
    console.log(`The year : ${year} is an non-leap year`);
  }
};
console.log(leapyear(2025));

// sum of all element in the aaray

let arr = [2, 3, 4, 5, 6, 7, 8];

const builtinArr = arr.reduce((acc, current) => {
  return acc + current;
}, 0);

const sumAllElem = (array) => {
  let sum = 0
array.forEach(element => {
  sum += element
});
return sum
}

const forSumEll = (array) => {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i]
  }
  return sum
}

console.log(sumAllElem(arr)); //35
console.log(forSumEll(arr)); // 35
console.log(builtinArr); // 35

// obj-CAR

const carObj = {
  make: "Suzuki",
  model: "Ertiga",
  year : 2018,

  startEngine: function(){
    console.log("start the engine");
  },
}

console.log(carObj.startEngine());

// DOM-text change

const header = document.querySelector(".header")
header.textContent = "Hi this is Priya Satyam"

//add button using JS

const btn = document.querySelector(".btn")
let button = document.createElement("button")
button.textContent = "click Me"
btn.appendChild(button)

//add event listener

button.addEventListener('click',() => {
  confirm("The button is clicked")
  console.log("btn clicked");
})

// calculate the factorial of the number ==>> 5! -->> 5*4*3*2*1

const factorial = (number) => {
  let total = 1
  for (let i = number; i >= 1; i--) {
    total *= i
  }
  return total
}

//recursion
const factorialAlt = (number) => {
  if (number === 0 || number === 1) return 1; 
  return number * factorial(number - 1); 
};

console.log(factorial(5)); //120
console.log(factorialAlt(5)); //120

// random no.

const getRandom = (min,max) => {
  return Math.floor(Math.random() * (max-min + 1)+ min)
}

console.log(getRandom(50,100));

//function takes an array of nums and return a new arr of even nums

const evenArr = (array) => {
const newArr = array.filter((num) => {
    return num % 2 == 0
  })
  return newArr
}

const arrEven = (array) => {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    if(array[i] % 2 == 0){
      newArr.push(array[i])
    }
  }
  return newArr
}

console.log(evenArr([1,2,3,4,5,6,7,8,9]));
console.log(arrEven([1,2,3,4,5,6,7,8,9]));

//double all elems of the array

const doubleArr = (array) => {
  let newArr = array.map((e) => {
    return e*2
  })
  return newArr
}

const double = (array) => {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
      newArr.push(array[i]*2)
  }
  return newArr
}
console.log(doubleArr([1,2,3,4,5,6,7,8,9]));
console.log(double([1,2,3,4,5,6,7,8,9]));

//largest num in array using reduce()

let arrLarge = [23,45,12,67,36,89]

const sortedLarge = (arr) => {
  const sort = arr.sort((a,b) => {
    return b - a
  })
  let largeNum = sort[0]
  return largeNum
}

console.log(sortedLarge(arrLarge)) // 89

const reduceLarge = (arr) => {
  const reduce = arr.reduce((acc,curr) => {
    if(acc > curr){
      return acc
    }
    else return curr
  },arr[0])
  return reduce
}

console.log(reduceLarge(arrLarge));


//display current date or time 

const date = new Date().toLocaleString()
console.log(date);

// const time = date.getTime()
// console.log(time);

//try-catch for API

const fetchData = async () => { // Rename the function to avoid conflict
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Use global fetch
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("The fetch failed due to:", error);
  }
};

fetchData(); 

// recursion function to calc factorial 

const recurFact = (n) => {
  if(n=== 1){
    return 1
  }
  else{
  return n * (recurFact(n-1))
  }
}

console.log(recurFact(5));


//nth fibonacci Number 

const fibonacci = (n) => {
  if(n <= 1){
    return n
  }
  else {
    return fibonacci(n-1) + fibonacci(n-2)
  }
}
console.log(fibonacci(6)) //8

//counter funct using closure that increaments and returns the count on each call

const counter = () => {
  let count = 0
  return function() {
    count += 1
    return count
  }
}
let myCounter = counter()

console.log(myCounter()); // Output: 1
console.log(myCounter()); // Output: 2
console.log(myCounter()); // Output: 3