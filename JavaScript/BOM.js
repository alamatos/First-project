var windows

function actionOpenPage () {
windows= window.open('https://www.google.com','new_window', 'width=200,height=200')
}

function actionClosePage () {
    windows.close()

}

function goToGoogle (){
    window.location.href='https://www.google.com'
}

function goToYoutube () {
    window.location.href='https://www.youtube.com'

}