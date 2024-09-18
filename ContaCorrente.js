import { Cliente } from "./Cliente.js";

export class ContaCorrente {
	agencia;
   _cliente;

   // com isso obrigamos a atribuição de um cliente, seja atráves do molde Cliente, e caso tentem fazer de um valor aleatório, como um numero 0, ela ficará undefined
   set cliente(novoValor) {
      if (novoValor instanceof Cliente) {
         this._cliente = novoValor;
      }
   }

   get cliente() {
      return this._cliente;
   }

	// #saldo = 0; é bom, mas ainda não deve ser usado pois não foi implementado oficialmente.
	//Então usaremos o underline _ na frente da nossa variavel, que vai ser entendida pela comunidade como um campo privado.
	_saldo = 0;

   get saldo() {
      return this._saldo;
   }

	sacar(valor) {
		if (this._saldo >= valor) {
			this._saldo -= valor; //this é utilizado para acessar algo em especifico que foi passado anteriormente, como nesse caso, é para acessar o saldo da conta do Ricardo.

			return valor; // -> Antes, quando chamavamos esse valor mais abaixo, ele não aparecia, pois esse método não estava retornando anda, então era undefined, mas fazendo com que tenha um return do valor, agora conseguiremos ver.
		}
	}

	depositar(valor) {
		if (valor <= 0) {
			return; /* Aqui utilizamos o Early return para verificar se valor é menor ou igual a zero, caso seja ele já para e retorna o que preciso saber para cancelcar a operação */
		}
		this._saldo += valor;
	}

   transferir(valor, conta) {
      const valorSacado = this.sacar(valor);
      conta.depositar(valorSacado);
   }
   //Para fazer uma transferencia, vai precisar concatenar com o transferir => contaX.transferir(100, contaY)
   //modo de leitura => transferir da conta x, 100 reais, para a conta y

}