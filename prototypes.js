function Gadget(model, brand, price) {
    this.model = model;
    this.brand = brand;
    this.price = price;
};
Gadget.prototype.TVA = function() {
    return this.price * 0.20;
};
Gadget.prototype.promo = function(dayOfTheWeek) {
    return `Only on the next ${dayOfTheWeek} you can get ${this.brand} ${this.model} just for ${this.price}\$`;
};
function Laptop(model, brand, price) {
    Gadget.call(this, model, brand, price);
    this.keyboardLang = "Eng";
};
function Smartphone(model, brand, price) {
    Gadget.call(this, model, brand, price);
    this.network = "5G";
};
Object.setPrototypeOf(Laptop.prototype, Gadget.prototype);
Object.setPrototypeOf(Smartphone.prototype, Gadget.prototype);