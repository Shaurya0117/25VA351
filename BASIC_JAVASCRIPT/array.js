let arr = [1, 22, 2, 3, 4];

console.log(arr);


// length
let n = arr.length;
console.log(n);


// adding new element from back
arr.push(8);
console.log(arr);


// deletion of last element
arr.pop();
console.log(arr);


// adding in front
arr.unshift(12);
console.log(arr);


// remove first element
arr.shift();
console.log(arr);


// slice()
let b = arr.slice(1, 4);
console.log("After slice(1, 4):", b);

console.log("Original array:", arr);



// splice()
arr.splice(2, 1);
console.log("After splice(2, 1):", arr);