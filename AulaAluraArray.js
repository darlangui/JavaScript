/*
Array --> length define o tamanho do array
    */ 
   function mediaFunction(v){
        for(let i = 0; i < v.length ; i++){
            media = media + v[i];
        }
        console.log(media / v.length);
    }
    const v = [10, 6.5, 8, 7.5];
    let media = 0;
    
    mediaFunction(v);  // função que calcula a média de um Array

    media = 0;

// adicionando uma nota

    v.push(10); // metodo que adiciona um number dentro do array

    mediaFunction(v); // função que calcula a média de um Array

    media = 0;

// removendo uma nota

    v.pop(); // metodo que remove o ultimo elemento do array

    mediaFunction(v);
   
    /*

// slices() dividindo array

    */ 
    const nomes = ["Darlan","Guilherme","Bernardo","Patricia","Renato","Juliano","Vinicius"];
    const nomeDiv1 = nomes.slice(0, nomes.length / 2); // slices pede o inicio e onde ele termina o corte
    const nomeDiv2 = nomes.slice(nomes.length / 2); // se não colocar nada ele vai até o final do array

    console.log(`Alunos da sala 1 ${nomeDiv1}`);
    console.log(`Alunos da sala 2 ${nomeDiv2}`);


// Atualizando lista com splice(inicio, quantos elementos, elemento novo da posição)

    const listaChamada = ["Darlan","Guilherme","Bernardo","Patricia","Renato","Juliano","Vinicius"];
    listaChamada.splice(0, 2, "Eduardo")
    console.log(`Lista chamada : ${listaChamada}`);
    listaChamada.splice(2, 0, "Darlan", "Guilherme");
    console.log(`Lista chamada : ${listaChamada}`);

// Concatenando arrays --> nomedoprimeiroarray.concat(nomedosegundoarray);

    const juntos =  nomeDiv1.concat(nomeDiv2);
    console.log(`Juntos : ${juntos}`);

//  Matriz de arrays

    const vnew = [10, 7, 8, 7.5];
    const nomesnew = ["Darlan", "Guilherme", "Bernardo", "Patricia"];

    let matrizNotas = [vnew, nomesnew];
    console.log(`${matrizNotas[1][0]} sua média é ${matrizNotas[0][0]}`)

// Procurar no array

    const temNome = (nomeProcurado) => {
        if(matrizNotas[1].includes(nomeProcurado)){
            indice = matrizNotas[1].indexOf(nomeProcurado);
            return matrizNotas[1][indice] + " sendo sua média " + matrizNotas[0][indice];
        }else{
            return "Aluno não cadastrado";
        }
    }

    console.log(temNome("Darlan"));

// forEach metodo callback

    media = 0;
    v.forEach(nota =>{
        media += nota; // nota não usa o indice ele se apropria do valor alvo do array
    })
    console.log(media / v.length);

// funções callback

    function imprime(nome){
        console.log(nome);
    }
    nomes.forEach(imprime);

// map() outra função callback

    const vAtt = v.map(nota => nota != 10 ? nota + 1 : nota);
    console.log(vAtt);

// filter callback

    const repro = nomesnew.filter((aluno, indice) => vnew[indice] < 5)
    console.log(repro);

// Medias de 3 salas

    const salaJS = [7,8,1,8,5,7,6,2];
    const salaJava = [1,2,6,4,5,8]
    const salaPython = [8,7,9,10,4,6,8,7,9,4,6,3]

    function mediaSalas(notas){
        const somaNotas = notas.reduce((cont, atual) =>  atual + cont, 0)
        return somaNotas / notas.length;
    }

    console.log(`Média da sala de JS: ${mediaSalas(salaJS)}, média Java ${mediaSalas(salaJava)}, média sala Python ${mediaSalas(salaPython)}`);
    /*


    
//
//
//
//
//
//
//
*/