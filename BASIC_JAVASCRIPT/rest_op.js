console.log("The rest operator (...) is used to collect multiple values into a single array.")

// function add(...numbers) {
//     console.log(numbers);
// }

// add(10, 20, 30, 40);


function sum(...value) {
    let total = 0;
    for(let n of value){
        total = total +n;
    }
    return total;
}
console.log(sum(10,20,30));