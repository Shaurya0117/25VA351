console.log("A string is a sequence of characters used to store text.")

let str = "Hello World";

console.log(str.length);        // length


console.log(str.toUpperCase()); // HELLO WORLD


console.log(str.toLowerCase()); // hello world


console.log(str.charAt(0));     // H


console.log(str.indexOf("World")); // 6


console.log(str.lastIndexOf("o"));


console.log(str.slice(0, 5));   // Hello


//convert string into array
console.log(str.split(" "));


console.log(str.replace("World", "JS")); // Hello JS


console.log(str.includes("Hello"));      // true


console.log(str.trim());                 // Hello World