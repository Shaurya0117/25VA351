it//Object creation

// Object 1
let student = {
    first: "Shaurya",
    last: "Singh",
    city: "Jaunpur",
    pincode: 222145,

    salary: function() {
        document.write("salary");
    },

    subject: ["web dev", "c++", "java"]
};

console.log(student.first);
console.log(student.last);
console.log(student.city);
console.log(student.pincode);
console.log(student.salary);
console.log(student.subject);


// Object 2 - Sumit
let sumit = new Object();

sumit.name = "Sumit";
sumit.pincode = 887879;
sumit.city = "Ghaziabad";

sumit.salary = function() {
    document.write("salary");
};

console.log(sumit.name);
console.log(sumit.pincode);
console.log(sumit.city);
console.log(sumit.salary);