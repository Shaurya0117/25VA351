class Product {
  constructor(productId, productName, price) {
    this.productId = productId;
    this.productName = productName;
    this.price = price;
  }

  // Instance method
  getDiscountedPrice(discount) {
    return this.price - (this.price * discount) / 100;
  }

  // Static method
  static compareProducts(p1, p2) {
    if (p1.price > p2.price) {
      console.log(`${p1.productName} is more expensive (₹${p1.price})`);
    } else if (p2.price > p1.price) {
      console.log(`${p2.productName} is more expensive (₹${p2.price})`);
    } else {
      console.log("Both products have the same price");
    }
  }

  // Base display method
  display() {
    console.log(`Product: ${this.productName}, Price: ₹${this.price}`);
  }
}

class Electronics extends Product {
  constructor(productId, productName, price, warranty) {
    super(productId, productName, price);
    this.warranty = warranty;
  }

  // Overriding display method
  display() {
    super.display();
    console.log(`Warranty: ${this.warranty}`);
  }
}

// Creating objects
const p1 = new Product(101, "Notebook", 50);
const p2 = new Electronics(102, "Laptop", 55000, "2 Years");

console.log(`Discounted price of ${p1.productName}: ₹${p1.getDiscountedPrice(10)}`);
p2.display();

Product.compareProducts(p1, p2);