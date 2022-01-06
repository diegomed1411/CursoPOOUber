class Car {
    constructor (licence, driver){
        this.id ;
        this.licence = licence;
        this.driver = driver;
        this.passenger ;
    }
    printDataCar () {
        console.log(this.driver, this.driver.name, this.driver.document)
    }
}

