var objects= []
objects [0] = 'Chair'
objects [1] = 'Table'
objects [2] = 'TV'
objects [3] = 'Printer'
objects [4] = 'Spon'
objects [5] = 'Fork'
objects [6] = 'Knife'



function actionAddText () {
    var text = document.getElementById('inputText').value
    if (text!='') {
        if(objects.indexOf(text) !==-1) {
            alert('Object already added')
        } else {
            objects.unshift(text)
            console.log(objects)
            document.getElementById('inputText').value=''
        }
    } else {
        alert('Please insert some text')
    }
}
function actionSortText () {
    objects.sort()
    console.log(objects)
}