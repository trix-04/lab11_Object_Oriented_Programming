//Part 1:Set up Classes
class ProductProperties{
    constructor(productName, price, quantity){
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue(){
        return this.price * this.quantity;
    }

    toString(){
        return (`Product: ${this.productName}, Price: $${this.price}, Quantity: ${this.quantity}.`);
    }

    //Part 3: Added to get expected output for static method "applyDiscount"
    changePrice(newPrice){
        this.price = newPrice;
    }

    //Part 3: Static Method
    static applyDiscount(products,discount){
        for(let i = 0; i < products.length; i++){
            products[i].changePrice(products[i].getTotalValue() * discount);
        }
        return products;
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

//Part 4: Store Management
class Store{
    addProduct(product){
        this.store.push(product);
    }

    getInventoryValue(){
        let value = 0;
        for(let i = 0; i < this.store.length; i++){
            value = value + this.store[i].getTotalValue();

        }
        return value;
    }
}

const newItem = new ProductProperties("Apples", 4, 5);
console.log(newItem.getTotalValue());
console.log(newItem.toString());

const newPerishableItem1 = new PerishableProductProperties("Pancetta", 20, 1, "2024-12-20");
console.log(newPerishableItem1.toString());

const newPerishableItem2 = new PerishableProductProperties("Milk", 12, 1, "2024-12-27");
console.log(newPerishableItem2.toString());

const discountedProduct = ProductProperties.applyDiscount([newPerishableItem1 , newPerishableItem2], 0.5);
console.log(discountedProduct);