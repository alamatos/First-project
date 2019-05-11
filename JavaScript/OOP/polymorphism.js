class animal {
    constructor (color, size) {
        this.color = color
        this.size = size
    }

    sleep () {
        console.log('Animal is sleeping')
    }
}



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
class Ostrich extends Bird {
    constructor () {
        super ('Big', 'white and black',250)

    }
buryHead () {
    console.log('Ostrich has is head buried ')
}
fly () {
    console.log("The ostrich doesn't flying")
}
}

let parrot = new Parrot(true, 'blue', 45)
console.log(parrot)


let ostrich = new Ostrich()
ostrich.fly()

