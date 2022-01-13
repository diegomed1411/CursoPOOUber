class UberX extends Car {
    constructor(licence, driver, brand, model){
        super(licence, driver)
        this.brand = brand
        this.model = model
    }

printDataUberX() {
    console.log(this.license);
    console.log(this.driver);
    console.log(this.driver.name);
    console.log(this.driver.document);
    console.log(this.brand)
    console.log(this.model)    

}
}