let idade = +prompt("Qual sua idade?")
let isEnsinoMedio = confirm("Terminou o ensino médio?")
let isCursandoOutraFaculdade = confirm("Está cursando faculdade?")


console.log("ensino médio:", isEnsinoMedio);
console.log("Faculdade:", isCursandoOutraFaculdade);


//IDADE
if(idade >= 18){
    console.log("É maior de idade");

}else{
	console.log("Não é maior de idade");
}

//TERMINOU O ENSINO MEDIO?
if(isEnsinoMedio){
    console.log("Terminou o ensino médio");
}
else{
    console.log("Não terminou o ensino médio");
}

//ESTÁ CURSANDO FACULDADE?
if(isCursandoOutraFaculdade === false){
    console.log("Não está cursando faculdade");
}
else{
    console.log("Está cursando faculdade");
}