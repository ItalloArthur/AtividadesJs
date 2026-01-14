var agora = new Date()//utilizando para "pegar" os dados de hora do seu computador
var hora = agora.getHours()
console.log (`Agora são extamente ${hora} horas.`)
if (hora < 12){
    console.log(`Bom dia!`)
}
else if(hora <= 18 ){
    console.log(`Boa Tarde!`)
}
else{
    console.log(`Boa Noite!`)
}