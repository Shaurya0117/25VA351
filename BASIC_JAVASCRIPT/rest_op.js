console.log("The rest operator (...) is used to collect multiple values into a single array.")

// function add(...numbers) {
//     console.log(numbers);
// }

// add(10, 20, 30, 40);


// function sum(...value) {
//     let total = 0;
//     for(let n of value){
//         total = total +n;
//     }
//     return total;
// }
// console.log(sum(10,20,30));


// function sum(name, ...value) {
//     let total = 0;

//     for (let n of value) {
//         total = total + n;
//     }

//     console.log("Name:", name);
//     console.log("Roll No:", value);
// }

// function sum(...values) {
//     let sum = 0;

//     for (let i in values) {
//         sum = sum + values[i];
//     }
    
//     console.log(sum);


// };
// let arr = [10,20,30,40];
// sum(...arr)


// let name="and"
// let rollnumber=101
// let data={
//     name,
//     rollnumber

// }
// console.log(data.name)       
// console.log(data.rollnumber)


let F = "Firstname";
let L = "Lastname";

let data = {
    [F]: "shauryaa0",
    [L]: "singh",

    show() {
        console.log(data.Firstname);
        console.log(data.Lastname);
    }
};

data.show();