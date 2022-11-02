function ligar() {
    var lamp = document.getElementById('lamp')
    var img = document.createElement('img')
    img.setAttribute('src', 'imagem')
    img.setAttribute('src', 'lampadaong.jpg')
    lamp.innerHTML = ''
    lamp.appendChild(img)
}

function desligar () {
    var lamp = document.getElementById('lamp')
    var img = document.createElement('img')
    img.setAttribute('src', 'imagem')
    img.setAttribute('src', 'lampadaoffg.jpg')
    lamp.innerHTML = ''
    lamp.appendChild(img)
}