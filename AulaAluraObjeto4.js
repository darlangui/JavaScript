// função contrutora de objetos. 
function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo

    this.depositar = function(valor) {
        this.saldo += valor
    }
}

const andre = new Cliente("Andre", "789456123", "andre@gmail.com", 100) // criando um novo objeto (andre)
console.log(andre)
andre.depositar(1000);
console.table(andre)

function ClientePoup(nome, cpf, email, saldo, saldopoup){
    Cliente.call(this, nome, cpf, email, saldo) // chama o Construtor cliente pegando suas propriedades --> this é o próprio objeto.
    this.saldopoup = saldopoup
}

const cliente1 = new ClientePoup("Ju", "852963741", "55989562321", 100, 200) // Esse objeto esta linkado ao construtor Cliente sendo considerado um Protótipo. 
console.log(cliente1)

//Adicionando função de depositar na poupança.
ClientePoup.prototype.depositarPoup = function(valor){
    this.saldopoup += valor
}

//chamando o método criado dentro do prototype do Objeto.
cliente1.depositarPoup(200)

console.log(cliente1.saldopoup)