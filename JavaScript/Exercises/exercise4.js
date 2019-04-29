function actionOnFocus (newColor) {
    document.getElementById('inputArea').style.backgroundColor = newColor
}

function actionOnBlur () {

let valueInputArea = document.getElementById('inputArea').value

    if (valueInputArea.length < 3) {
    document.getElementById('inputArea').style.backgroundColor = 'red'
} else {
    document.getElementById('inputArea').style.backgroundColor = 'green'
}
}