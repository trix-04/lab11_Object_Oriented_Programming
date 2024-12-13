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

    //Added to get expected output for static method "applyDiscount"
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

    getProductName(){ //created getter for part 4, in order to properly execute findProductByName()
        return this.productName;
    }

}

//Part 2: Inheritance
class PerishableProductProperties extends ProductProperties{
    constructor(productName, price, quantity, expirationDate){
        super(productName, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString(){ //overrides initial toString() in Product class
        return (`Perishable Product: ${this.productName}, Price: $${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`)
    }
}

//Part 4: Store Management
class Store{
    constructor(){
        this.store = [];
    }
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

    findProductByName(name){
        for(let i = 0; i < this.store.length; i++){
            if (this.store[i].getProductName() == name){
                return this.store[i];
            }
        }
        return null;
    }

}

//part 2 - 2 instances of PerishableProductProperties class
const newPerishableItem1 = new PerishableProductProperties("Pancetta", 20, 1, "2024-12-20");
const newPerishableItem2 = new PerishableProductProperties("Milk", 12, 1, "2024-12-27");
console.log(newPerishableItem1.toString());
console.log(newPerishableItem2.toString());

//Part 3 - output after applying discount to product's prices in array
const discountedProduct = ProductProperties.applyDiscount([newPerishableItem1 , newPerishableItem2], 0.5);
console.log("\nPerishable Items after 50% discount", discountedProduct);

//Part 5: Testing the System
const newItem1 = new ProductProperties("Apples", 4, 2);
const newItem2 = new ProductProperties("Cereal", 8, 1);
const newItem3 = new ProductProperties("Pasta", 6, 1);


const store1 = new Store();
store1.addProduct(newItem1);
store1.addProduct(newItem2);
store1.addProduct(newItem3);
store1.addProduct(newPerishableItem1);
store1.addProduct(newPerishableItem2);

console.log("Total inventory value before: ", store1.getInventoryValue());
console.log("Total inventory value after 15% discount: " , store1.getInventoryValue() - (store1.getInventoryValue() * 0.15));

const foundProduct = store1.findProductByName("Milk");
console.log(`Product details for ${foundProduct.getProductName()} is ${foundProduct}`);