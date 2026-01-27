let num = [4,5,3,2,1]//fazerndo alguns experimentos com vetor 
console.log(`nosso vetor é o: ${num}`)
num.push(53)
console.log(`nosso vetor agora é: ${num}`)
console.log(`nosso vetor tem o total de: ${num.length} posições`)
console.log(`nosso vetor de forma crescente agora é: ${num.sort()}`)

for(var pos = 0; pos < num.length; pos++){
    console.log(num[pos])//utilizando o for para mostrar todos os elementos de um vetor
}

for(let pos in num){
    console.log(num[pos])//utilizando o for para mostrar todos os elementos de um vetor de maneira simplificada
}
console.log(`a posição desse numero é ${num.indexOf(4)}`)//buscando a chave de um vetor especificado o valor
