/* 
    Tipagem dinâmica --> não é necessario declarar o tipo da variavel.
    */
    console.log("Hello World");
    /*
    Erros --> O JS indica aindo o erro esta e o tipo de erro SystaxError --> erro de Systax
    RangeError: Quando o código recebe um dado do tipo certo, porém não dentro do formato aceitável. Por exemplo, um processamento que só pode ser feito com números inteiros maiores ou iguais a zero, mas recebe -1.

    ReferenceError: Normalmente ocorre quando o código tenta acessar algo que não existe, como uma variável que não foi definida; muitas vezes é causado por erros de digitação ou confusão nos nomes utilizados, mas também pode indicar um erro no programa.

    SyntaxError: Na maior parte dos casos ocorre quando há erros no programa e o JavaScript não consegue executá-lo. Os erros podem ser métodos ou propriedades escritos ou utilizados de forma incorreta, por exemplo, operadores ou sinais gráficos com elementos a menos, como esquecer de fechar chaves ou colchetes.

    TypeError: Indica que o código esperava receber um dado de um determinado tipo, tal qual uma string de texto, mas recebeu outro, como um número, booleano ou null.

    https://nodejs.org/api/errors.html#errors_errors --> documentação de erros.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
Console.api --> ferramenta o log() é um registro que sera exibido no console
    console.error() para exibir mensagens de erro;
    console.table() para visualizar de forma mais organizada informações tabulares;
    console.time() e console.timeEnd() para temporizar período que uma operação de código leva para ser iniciada e concluída;
    console.trace() para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.
    */
    //console.error(new Error("Erro do console")); // utilizado no tratamento de erros.
    /*
    https://nodejs.org/api/console.html --> documentação de console
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Operadores -->
    De comparação: ==  e ===.
    ||: Operador “ou”, retorna true caso uma condição seja válida;
    &&: Operador “e”, retorna true somente se todas as condições forem válidas;
    != e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação,
    da mesma forma que == e === retornam true ou false.


*/