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
        return (`Product: ${this.productName}, Price: $${this.price}, Quantity: ${this.quantity}`)
    }

}

const newItem = new ProductProperties("Apples", 12, 5);
console.log(newItem.getTotalValue());
console.log(newItem.toString());