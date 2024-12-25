//destruct

const arr = ["aalu", "piyaaz", "bhanta"];

const [veg1,veg2] = arr
console.log(veg1,veg2);


//OBJECT

const obj = {
  name: "Satyam",
  age: 26,
  marks: [88, 67, 98, 77],
  "last name": "Rathore",
  func: function () {
    console.log("Hello there");
  },
};

console.log(obj.marks); // [88, 67, 98, 77]
console.log(obj["last name"]); // Rathore
obj.func(); // Logs: Hello there

obj.veggies = ["carrot", "broccoli"];
console.log(obj); // Logs updated obj with 'veggies'

for (const key in obj) {
  console.log(obj[key]); // Iterates through and logs all values in obj
}

let arr2 = [
  { user: 1, name: "tate" },
  { user: 2, name: "andu" },
  { user: 3, name: "chad" },
];

for (let i in arr2) {
  console.log(arr2[i]); // Logs each object in arr2
}

//destruct

let [i1,i2] = arr2
console.log(i1,i2);
