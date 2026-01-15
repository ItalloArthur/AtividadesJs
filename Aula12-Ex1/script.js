function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'manhaProj.jpg'
        document.body.style.background = '#CD853F'
    }
    else if (hora >= 12 && hora < 18){
        img.src = 'tardeProj.jpg'
        document.body.style.background = '#FF7F50'
    }
    else{
        img.src = 'noiteProj.jpg'
        document.body.style.background = '#483D8B'
    }
}
