class animal {
    constructor (color, size) {
        this.color = color
        this.size = size
    }

    sleep () {
        console.log('Animal is sleeping')
    }
}

// class Dog extends animal{
//     constructor () {
//         super()
//         this.size = 30
//     }
// run () {
//     console.log('Dog is running')

// }
// growl () {
//     console.log('Dog is growling')
// }

// }

class Bird extends animal{
    constructor(beak, color, size) {
        super(color, size)
        this.beak = beak
        
    }
fly () {
    console.log('Bird is flying')
}

}

class Parrot extends Bird{
    constructor(knowsHowTospeak, color,size ) {
        super('medium',color,size)
        this.knowsHowTospeak = knowsHowTospeak
    }
speak() {
    console.log('Parrot is speaking')
}

}
// let dog = new Dog()
// let bird = new Bird()
let parrot = new Parrot(true, 'blue', 45)
console.log(parrot)

// dog.sleep()
// bird.sleep()
// parrot.speak()
// parrot.sleep()
// parrot.fly()