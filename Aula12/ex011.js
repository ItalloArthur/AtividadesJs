var idade = 23
console.log(`Você tem ${idade} anos.`)//Exercicio simples de votação utilizando Js
if(idade < 16){
    console.log(`não vota`)
}else{
    if(idade < 18 || idade > 65){
        console.log(`voto opcional`)
    }else{
        console.log(`voto obrigatorio`)
    }
}
