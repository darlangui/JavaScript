const objeto = {
    nome : "Darlan", 
    email:"darlan@gmail.com",
    fones:["421421", "32132134"], // typeof defini isso como object
    dependentes:[
        {nome:"Sara", parentesco:"namorada"},
        {nome:"Samia", parentesco:"irmã"}
    ],
    saldo:100,
    // Criando uma função dentro do objeto --> Isso é um método (quando a função é feita dentro de um objeto mexendo assim com as atribuições do mesmo).
    depositar:function(valor){
        this.saldo += valor
    }
    }

console.log(objeto.saldo)
objeto.depositar(100) // chamando uma função de dentro do objeto = método
console.log(objeto.saldo)

console.log("\n\n")

//Utilizando o método forIn --> utilizado para objetos
// Percorre o objeto
for(let dado in objeto){ // assim que se faz o FOR com o objeto For ( in --> dentro )
    if(typeof objeto[dado] != "function" && typeof objeto[dado] != "object"){
        console.log(`${dado} : ${objeto[dado]}`)
    }
}

console.log(typeof objeto.fones) // = object

console.log("\n\n")

// Métodos para objeto

const propsObject = Object.keys(objeto) // retorna um array com as chaves do objeto.
console.log(propsObject)

const valueObject = Object.values(objeto) // retorna um array com os valores do objeto.
console.log(valueObject)

const entriesObject = Object.entries(objeto) // retorna um array com varios arrays trazendo tanto chaves quanto valores.
console.log(entriesObject)

console.log("\n\n")



const newObjeto = [{ 
    nome : "Darlan", 
    email:"darlan@gmail.com",
    fones:["421421", "32132134"], // typeof defini isso como object
    dependentes:[
        {nome:"Sara", parentesco:"namorada"},
        {nome:"Samia", parentesco:"irmã"}
]},{ 
    nome : "Darlan", 
    email:"darlan@gmail.com",
    fones:["421421", "32132134"], // typeof defini isso como object
    dependentes:[
        {nome:"Maria", parentesco:"namorada"},
        {nome:"Solange", parentesco:"irmã"}
]}] 
//operador de espalhamento || Spread Operator
const andamento = [...newObjeto[0].dependentes, ...newObjeto[1].dependentes] // operador de espalhamento, passa os dados de um determinado objeto dentro de um objeto --> Este operador copia as propriedades de objetos para outros, “espalhando” os conteúdos.
console.table(andamento) // mostra no console como uma tabela.