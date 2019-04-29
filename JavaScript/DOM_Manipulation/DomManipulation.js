function actionOnKeyUp () {
    var character =document.getElementById('WritedText').value
    document.getElementById('WritedText').value=''
    

    console.log(character)

    switch(character) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        

        document.getElementById('JustNumbers').value +=character
        break

        default:
        document.getElementById('JustLetters').value+=character
    }
}

function actionOnClick(backgroundColor, height, width) {
    document.getElementById('paintingArea').style.backgroundColor=backgroundColor
    document.getElementById('paintingArea').style.height=height
    document.getElementById('painitngArea').style.width=width
}

function changeClass() {
    if (document.getElementById('paragraph').className=='style1') {
            document.getElementById('paragraph').className = 'style2'
    } else {
        document.getElementById('paragraph').className='style1'
    }
}