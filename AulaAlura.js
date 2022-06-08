/*
JS Alura --- Back End

Tipos de variavel : typeof --> mostra qual o tipo de dado da variavel
    String --> Texto e Caracteres Especiais.
        */ 
        const texto = "Isso é uma string";
        console.log(texto);
        const somaString = texto + " Ai sim ein"; // isso junta as suas Strings
        console.log(somaString);
        console.log(typeof somaString);
        console.log(); // quebra linha
    /* 
    Number --> Pontos Flutuantes ou inteiros.
        */
        const num1 = 100;
        const somaNumber = 100 * 15;
        console.log(somaNumber);
        console.log(typeof somaNumber);
        console.log(); // quebra linha
    /* 
    Boolean --> True False.
        */ 
        const test = true;  
        if (test === true){
            console.log("Isso aqui é verdadeiro");
        } 
        console.log(typeof test);
        console.log(); // quebra linha
    /*  Boolean ainda tem o thuthy e falsy
    Null --> valor normalmente defino como nulo de uma variavel. Defino como objeto dentro do JS.
        */
        const aqui = null;
        if(aqui === null){
            console.log("Isso aqui é nulo");
        }
        console.log(typeof aqui);
        console.log(); // quebra linha
    /*
    Undefined --> valor de uma variavel que ainda não foi inicializada normalmente não esperado pelo sistema --> não pode ser utilizado no const.
        */
        let und;
        console.log(und);
        console.log(typeof und);
        console.log(); // quebra linha
    /*

Tipos de declaração de uma variavel:

    Var --> Não é utilizada propensa a bugs por conta de poder ser utilizada sem necessitar de declaração.
    Let --> Necessita ser declarada antes de ser utilizada.
    Const ---> Necessita ser declarada e inicializada antes de ser utilizada e não pode ter seu valor alterado.


Conversão de tipos:
        conversão implícita --> propenso a dar bugs, por conta da conversao auto do JS.
        */
        const num = 458;
        const numString = "458";
        console.log(num === numString); // comparando um numero com um texto. (leva em consideração o tipo da variavel) == false
        console.log(num == numString); // comparando um numero com um texto.(leva em consideração o tipo mas o JS faz a conversão de ambas as variaveis para String) == true
        console.log(num + numString); // transforma tudo em String fazendo desta forma uma concatenação. == 458458;
        console.log(); // quebra linha
       /*
        conversão explicita -->
        funções utilizadaas Number(), parseInt() e String()
        */
        console.log(num + Number(numString)) // a função ira converter em um numero.
        const por = String(numString);
        console.log(); // quebra linha
       /*

       
*/




