import Cookify from '../../src/index.js'

var cookify = new Cookify('cookie_consent', () => {
        document.getElementById('manage').style.display = 'none'
    }, (data) => {
        console.log(data)
    }, false, false, 'necessary', () => {
        //show the cookie popup as long as the user has not seen it
        if (cookify.getDataState(cookify.viewedName)) {
            document.getElementById('manage').style.display = 'none'
        } else {
            document.getElementById('manage').style.display = 'block'
        }
    })

document.getElementById('open').addEventListener('click', function () {
    document.getElementById('manage').style.display = 'block'
})