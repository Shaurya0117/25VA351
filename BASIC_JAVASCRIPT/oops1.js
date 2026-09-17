class Hello{
    // constructor()
    // {
    //     this.faculty ="Shaurya";
    //     console.log('Hiii Aiml b')

    // }
    faculty ="Shaurya";
}
let h = new Hello();
console.log(h.faculty);

// class Hello{
//     // constructor()
//     // {
//     //     console.log('Hiii Aiml b')

//     // }
//     constructor(name){
//         this.empname = name;
//         console.log(this.empname);
//     }
// }
// let h = new Hello();


class student{
    constructor(Roll,name,year){
        this.Rollnum=Roll;
        this.Name=name;
        this.Year=year;
        console.log(this.Rollnum);
         console.log(this.Name);  
            console.log(this.Year);
    }
}
const s1=new student();
const s2  =new student(1,"Shaurya",2007);



class Animal {
    eat() {
        console.log("Animal eats");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog barks");
    }
}

let d = new Dog();

d.eat();
d.bark();