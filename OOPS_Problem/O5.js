class Vehicle {
  constructor(vehicleNo, driverName, distance) {
    this.vehicleNo = vehicleNo;
    this.driverName = driverName;
    this.distance = distance;
  }

  calculateFare() {
    return 0; // base placeholder, overridden by child classes
  }

  // Static method
  static bookingPlatform() {
    console.log("Booking Platform: QuickRide Cabs");
  }
}

class Car extends Vehicle {
  constructor(vehicleNo, driverName, distance) {
    super(vehicleNo, driverName, distance);
  }

  calculateFare() {
    return this.distance * 15;
  }
}

class Bike extends Vehicle {
  constructor(vehicleNo, driverName, distance) {
    super(vehicleNo, driverName, distance);
  }

  calculateFare() {
    return this.distance * 8;
  }
}

// Creating objects
const car1 = new Car("UP16-CA-1234", "Ramesh", 20);
const bike1 = new Bike("UP16-BK-5678", "Suresh", 12);

Vehicle.bookingPlatform();

console.log(`Car (${car1.vehicleNo}) driven by ${car1.driverName} — Fare: ₹${car1.calculateFare()}`);
console.log(`Bike (${bike1.vehicleNo}) driven by ${bike1.driverName} — Fare: ₹${bike1.calculateFare()}`);