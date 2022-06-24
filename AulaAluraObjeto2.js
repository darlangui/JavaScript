const objeto = {nome:"Darlan", fones: ["12345","09817","45678"], email:"darlan@gmail.com", cpf:"213231"}

console.log(objeto)

objeto.fones.forEach(info => console.log(info)) // mostra um array dentro de um objeto.


objeto.objetoMaior = {nome: 'Sara', parente:"Namorada", idade: "19"}
console.log(objeto) // adiciona um objeto dentro de um objeto.

objeto.objetoMaior.parente = "esposa" // altera uma propriedade de um objeto dentro de um objeto.
console.log(objeto)

// Array de objetos

const objetoArray = {nome:"Darlan", fones: ["12345","09817","45678"], email:"darlan@gmail.com", cpf:"213231", dependentes:[{nome: 'Sara', parente:"Namorada", idade: "19"}]}
console.log(objeto)

objetoArray.dependentes.push({nome: 'Maria', parente:"Filha", idade: "2"})
console.log(objetoArray)

console.log(objetoArray.dependentes[1].nome) //mostra o valor da variavel da segunda posição do array dependentes selecionando somente o nome.

