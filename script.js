//Part 1:Set up Classes
class ProductProperties{
    constructor(productName, price, quantity){
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue(){
        return (`The total value of the ${this.productName} in stock is ` + this.price * this.quantity);
    }

    toString(){
        return (`Product: ${this.productName}, Price: $${this.price}, Quantity: ${this.quantity}.`);
    }

    //Part 3: Static Method
    static applyDiscount(products,discount){
        for(let i = 0; i < products.length; i++){
            products[i] = products[i] * discount;
        }
        return products
    }

}

//Part 2: Inheritance
class PerishableProductProperties extends ProductProperties{
    constructor(productName, price, quantity, expirationDate){
        super(productName, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString(){
        return (`Perishable Product: ${this.productName}, Price: $${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate} .`)
    }
}

const newItem = new ProductProperties("Apples", 4, 5);
console.log(newItem.getTotalValue());
console.log(newItem.toString());

const newPerishableItem1 = new PerishableProductProperties("Pancetta", 20, 2, "2024-12-20");
console.log(newPerishableItem1.toString());

const newPerishableItem2 = new PerishableProductProperties("Milk", 12, 1, "2024-12-27");
console.log(newPerishableItem2.toString());
