var listaDePeca = ["Filtro de Ar", "Motor", "Amortecedor"]

if(listaDePeca.length < 10){
    // É possível cadastrar
    console.log("É possível cadastrar mais peças")

}else{
    // Não é possível cadastrar
    console.log("Não tem mais espaço na lista")
}

let peso = 50
if(peso < 100){
    console.log("A peça deve pesar no mínimo 100g")
}else{
    console.log("A peça possui pesa adequedo")
}

let nomePeca = "Disco de Freio"
if(nomePeca.length > 3){
    console.log("o nome da peça está adequado para o cadastro!")
    
}else if(nomePeca.length == 0){
    console.log("O nome da peça não pode ser vazio")
}

else{
    console.log("O nome da peça deve ter mais de 3 caracteres, digite um nome adequado")
}

switch(nomePeca.length){
    case 0:
        console.log("O nome da peça não pode ser vazio")
        break
    case 1:
    case 2:
    case 3:
        console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado")
        break
    default:
        console.log("Nome da peça está adequado")
        break
}