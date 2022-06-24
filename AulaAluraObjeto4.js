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

function ClientePoup(nome, cpf, email, saldo, saldopop){
    
}