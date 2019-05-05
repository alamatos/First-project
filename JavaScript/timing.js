var seconds= 5

var timing= setInterval(() => {
    document.write(seconds)
    seconds--

    if (seconds===0) {
        clearInterval(timing)
    }
    
}, 1000);