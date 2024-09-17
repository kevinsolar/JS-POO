import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 8889995520;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88899955521;

const contaCorrentRicardo = new ContaCorrente();
/* passo a passo de como utilizar a constante que criamos para mexer com os dados do cliente... 
contaCorrentRicardo.metodoQueDesejo(valor) ou:
contaCorrentRicardo.atributo = xx;
*/
contaCorrentRicardo.agencia = 1001;
contaCorrentRicardo.cliente = cliente1
contaCorrentRicardo.depositar(500);



const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

//Dessa forma estou transferindo da conta do ricardo R$200 para a conta2
contaCorrentRicardo.transferir(200, conta2)


console.log(conta2)
console.log(contaCorrentRicardo)