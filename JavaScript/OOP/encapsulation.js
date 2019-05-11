let Car = function () {
    this.color = 'yellow'
    this.model = 'X90'
    this.actualVelocity = 0
    this.maximumSpeed = 180

    this.accelerate =  ()  => {
        let velocity = this.getactualVelocity() + 50

        if (velocity>this.maximumSpeed) {
            velocity = this.maximumSpeed
        }
        this.setactualVelocity (velocity)
    }
    this.getactualVelocity =()  =>{
        return this.actualVelocity
    }
    this.setactualVelocity = (actualVelocity) => {
        this.actualVelocity = actualVelocity
    }
}

let car = new Car()
console.log (car.actualVelocity)
car.accelerate()
console.log (car.actualVelocity)
car.accelerate()
console.log (car.actualVelocity)
car.accelerate()
console.log (car.actualVelocity)
car.maximumSpeed=280
car.accelerate()
console.log (car.actualVelocity)
car.accelerate()
console.log (car.actualVelocity)
car.accelerate()
console.log (car.actualVelocity)
car.accelerate()
console.log (car.actualVelocity)
car.accelerate()

// another example

let SecondCar = function () {
    var maximumSpeed=180
    var totalKms = 0

    this.color = 'yellow'
    this.model = 'X90'
    this.actualVelocity = 0    

    this.accelerate =  ()  => {
        let velocity = this.getactualVelocity() + 50

        if (velocity>maximumSpeed) {
            velocity = maximumSpeed
        }
        this.setactualVelocity (velocity)
        setTotalKms(0.07)
        console.log (totalKms)
    }
    this.getactualVelocity =()  =>{
        return this.actualVelocity
    }
    this.setactualVelocity = (actualVelocity) => {
        this.actualVelocity = actualVelocity
    }
    var setTotalKms = (kms) => {
        totalKms += kms
    }
}
let Secondcar = new SecondCar()
console.log (Secondcar.actualVelocity)
Secondcar.accelerate()
console.log (Secondcar.actualVelocity)
Secondcar.accelerate()
console.log (Secondcar.actualVelocity)
Secondcar.accelerate()
console.log (Secondcar.actualVelocity)

// To verify that the parameter maximum speed is available in Car,
// but it isn't available in SecondCar

console.log(Car)
console.log(SecondCar)