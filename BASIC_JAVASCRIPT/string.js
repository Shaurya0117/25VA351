// let f = "shaurya";
// let l = "singh";

// function full(f, l) {
//     this.firstName = f;
//     this.lastName = l;
// }

// let name = new full(f, l);

// console.log(name.firstName);
// console.log(name.lastName);

let first = "shaurya";
let last = "singh";

function full(f, l){
    return`${f} ${l}`
}
let Name =`Hell ${full(first,last)}`;
console.log(Name);