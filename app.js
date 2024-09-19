import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 8889995520);//toda vez que tem um parenteses ele tem a chamada de uma função, e caso tenha um construtor na minha classe, ele automaticamente chama o meu construtor.
const cliente2 = new Cliente("Alice", 88899955521);



const contaCorrentRicardo = new ContaCorrente(1001, cliente1);
contaCorrentRicardo.depositar(500);



const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

//Dessa forma estou transferindo da conta do ricardo R$200 para a conta2
contaCorrentRicardo.transferir(200, conta2)


console.log(ContaCorrente.numeroDeContas);