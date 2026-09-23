class Person {
  static totalPersons = 0; // static member

  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
    Person.totalPersons++;
  }

  displayDetails() {
    console.log(`ID: ${this.id}, Name: ${this.name}, Age: ${this.age}`);
  }

  static getTotalPersons() {
    console.log(`Total Persons in System: ${Person.totalPersons}`);
  }
}

class Doctor extends Person {
  constructor(id, name, age, specialization, consultationFee) {
    super(id, name, age);
    this.specialization = specialization;
    this.consultationFee = consultationFee;
  }

  displayDetails() {
    super.displayDetails();
    console.log(`Specialization: ${this.specialization}, Consultation Fee: ₹${this.consultationFee}`);
  }
}

class Patient extends Person {
  constructor(id, name, age, disease, roomNo) {
    super(id, name, age);
    this.disease = disease;
    this.roomNo = roomNo;
  }

  displayDetails() {
    super.displayDetails();
    console.log(`Disease: ${this.disease}, Room No: ${this.roomNo}`);
  }
}

// Creating objects
const doc1 = new Doctor(1, "Dr. Anamika", 45, "Cardiology", 800);
const doc2 = new Doctor(2, "Dr. Verma", 39, "Orthopedics", 600);
const pat1 = new Patient(3, "Aman", 25, "Fracture", "R101");
const pat2 = new Patient(4,"Ram");

doc1.displayDetails();
console.log("---");
doc2.displayDetails();
console.log("---");
pat1.displayDetails();
console.log("---");
pat2.displayDetails();
console.log("---");

Person.getTotalPersons();