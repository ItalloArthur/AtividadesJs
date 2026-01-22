let num = [4,5,3,2,1]//fazerndo alguns experimentos com vetor 
console.log(`nosso vetor é o ${num}`)
num.push(53)
console.log(`nosso vetor é o ${num}`)
console.log(`nosso vetor é o ${num.length}`)
console.log(`nosso vetor é o ${num.sort()}`)

for(var pos = 0; pos < num.length; pos++){
    console.log(num[pos])//utilizando o for para mostrar todos os elementos de um vetor
}

for(let pos in num){
    console.log(num[pos])//utilizando o for para mostrar todos os elementos de um vetor de maneira simplificada
}
console.log(`a posição desse numero é ${num.indexOf(4)}`)//buscando a chave de um vetor especificado o valor
