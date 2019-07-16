

"use strict";

let idade = prompt ("Qual a sua idade?", "");
let mensagem;

// alert ("Acesso: " + permissao);

if(idade  < 6){
    mensagem = "CARACA, VC É BEM JOVEM";
}else if (idade < 18){
    mensagem = "VC AINDA NAO ATINGIU A MAIORIDADE";
}else if (idade < 100){
    mensagem = " VC EH ADULTO";
}else{
    mensagem = "QUE IDADE INCOMUM";
}

alert (mensagem);

