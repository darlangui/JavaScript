// Um objeto é formado por chave e valor.
// Linkar os valores com a chave - abstração de algo na vida real.

const objeto = {nome:"Darlan", idade:18, email:"darlan@gmail.com"} // isso é a definição de um objeto.

console.log(objeto.nome) // para print dos dados é usado o . para definir a chave do objeto a ser mostrada. --> notação de ponto.

console.log(`O nome que esta dentro do objeto é ${objeto.nome}.`) // String literal ou template String --> entre `aqui vai o template string ${e aqui vai a variavel a ser mostrada}`.

console.log(objeto.email.substring(0, 7)) // A função substring pega somente a variação imposta no (Aqui) dentro dele. Iniciando do Inicio da Variação até onde ela deve ir.

// Exibir todas as informações do objeto utilizando um array com as chaves
const chave = ["nome","idade","email"]

chave.forEach(info => console.log(objeto[info])) // exibe as informações do objeto alterando a chave passada da variavel info.

console.log(typeof(objeto)) // --> mostra o tipo da variavel nesse caso Object

// Adicionando nova chave e alterando chave ja existente.

objeto.cpf = "09813642890" // adiciona nova chave ao objeto ja com um valor linkado.
console.log(objeto)

objeto.cpf = "7853215" // se colocar uma chave ja existente ele altera o valor da chave ja criada.
console.log(objeto)

// Deletando uma chave do objeto.

delete objeto.cpf // ou objeto["chave a ser deletada"].
console.log(objeto)




