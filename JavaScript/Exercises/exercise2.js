var name = prompt("what's your name?")
var height = prompt("What's your height in cm?")
var weight = prompt("What's your weight in kg?")


height = parseFloat(height)
weight = parseFloat(weight)

height /= 100


//Body mass index
var BMI = weight /(Math.pow(height,2))


if (BMI < 16) {
    classification='Low weight, extremely caution'
} else if (BMI >= 16 && BMI < 17) {
    classification='Low weight, caution'
} else if (BMI >= 17  && BMI < 18.5) {
    classification='Low weight'
} else if (BMI >= 18.5 && BMI <25) {
    classification='Normal weight'
} else if (BMI >=25 && BMI < 30) {
    classification='Overweight'
} else if (BMI >= 30 && BMI < 35) {
    classification='Obesity degree 1'
} else if (BMI >=35 && BMI < 40) {
    classification='Obesity degree 2'
} else {
    classification='Obesity degree 3'
}

document.write(name + ' has a body mass index of ' + BMI + ', classifying him with ' + classification)