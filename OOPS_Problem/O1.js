class Student {
    static count = 0;

    constructor(rollNo, name, marks) {
        this.rollNo = rollNo;
        this.name = name;
        this.marks = marks;

        Student.count++;
    }

    displayResult() {
        console.log("Name:", this.name);
        console.log("Roll No:", this.rollNo);
        console.log("Marks:", this.marks);

        if (this.marks >= 40) {
            console.log("Result: Pass");
        } else {
            console.log("Result: Fail");
        }

        console.log("----------------");
    }

    static displayCount() {
        console.log("Total Students:", Student.count);
    }
}


// Creating Student objects
let s1 = new Student(101, "Shaurya", 85);
let s2 = new Student(102, "Rahul", 35);
let s3 = new Student(103, "Aman", 72);


// Calling instance method
s1.displayResult();
s2.displayResult();
s3.displayResult();

// Calling static method
Student.displayCount();