var date = new Date()

// document.write(date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear())

document.write(date)

// add days

date.setDate((date.getDate()+1))
document.write('<hr>')

document.write(date)
document.write('<br><hr><br>')
// add months
document.write(date)
date.setMonth(date.getMonth()+5)
document.write('<br><hr>')

document.write(date)
document.write('<br><hr><br>')


//add years

document.write(date)
document.write('<br><hr>')

date.setFullYear(date.getFullYear()+5)
document.write(date)
document.write('<br><hr><br>')

//defining a date of 15/11/2019

var expositionDate = new Date(2019,10,15)

document.write(expositionDate)
document.write('<br><hr><br>')
//finding the difference between 2 dates
date =new Date()

document.write(expositionDate.getTime())
document.write('<br><hr><br>')
document.write(date.getTime())

document.write('<br><hr><br>')
document.write('How many days till the exposition?')
document.write('<br><br>')
var differenceBetweenDays= Math.abs(date.getTime()-expositionDate.getTime())
document.write('At the moment we have around ' + differenceBetweenDays + ' miliseconds.')
document.write('<br><hr><br>')
var milisecondsPerDay=1*24*60*60*1000
document.write(milisecondsPerDay)
document.write('<br><hr><br>')

document.write('We have around '+ Math.round(differenceBetweenDays/milisecondsPerDay) + ' days.')