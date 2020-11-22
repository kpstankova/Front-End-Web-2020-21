class Item{
    constructor(name,discount){
        this.name=name;
        this.discount = discount;
    }
    fullPrice() {
        return (this.defaultPrice + this.defaultPrice*discount/100);
    }
}

Item.prototype.defaultPrice = function() {return 1000};