import Cookify from '../src/index.js'

var cookify = new Cookify('cookie_consent', function () {
    document.getElementById('manage').classList.add('d-none')
}, function (data) {
    console.log(data)
}, false, false, 'necessary')

document.getElementById('open').addEventListener('click', function () {
    document.getElementById('manage').classList.remove('d-none')
})

if (!cookify.getDataState(cookify.viewedName)) {
    document.getElementById('manage').classList.remove('d-none')
}
