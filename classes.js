class Gadget{
    constructor(model, brand, price) {
        this.model = model;
        this.brand = brand;
        this.price = price;
    }
    TVA() {
        return this.price * 0.20;
    }
    promo(dayOfTheWeek) {
        return `Only on the next ${dayOfTheWeek} you can get ${this.brand} ${this.model} just for ${this.price}\$`;
    }
}
class Laptop extends Gadget {
    constructor(model, brand, price) {
        super(model, brand, price);
        this.keyboardLang = "Eng";
    }
}
class Smartphone extends Gadget {
    constructor(model, brand, price) {
        super(model, brand, price);
        this.network = "5G";
    }
}