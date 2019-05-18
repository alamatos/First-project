function alwaysTwoDigits(time) {
    if (time<10) {
        return `0${time}`
    } else {
        return time
    }
}

function now () {
    let date   = new Date()
    let hour   =  alwaysTwoDigits(date.getHours())
    let minute = alwaysTwoDigits(date.getMinutes())
    let second = alwaysTwoDigits(date.getSeconds())

    document.getElementById('clock').innerHTML = `${hour}:${minute}:${second}`
    
}

function interval () {
    setInterval(now,1000)
}

window.onload = interval