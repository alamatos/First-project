// Literal object

let a1 = {
    color:'branco',
    model:'Airbus a380',
    takeOff : () => {console.log('take off')}

}

// construtor function

let planeF =function () {
    this.cor = 'blue',
    this.model = 'Boeing 787',
    this.takeOff = () => {console.log('take off')}
}

let a2 = new planeF()

class planeC {
    constructor() {
        this.color = 'red',
        this.model = 'Embraer E-jets'
    }
    takeOff() {
        console.log('take off')

    }
}

let a3= new planeC()

console.log(a1)
console.log(a2)
console.log(a3)