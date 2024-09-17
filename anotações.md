Classe é um MOLDE e Objeto é o "item" criado a partir desse MOLDE
   exemplo:
   class Cliente {
      nome;
      cpf;
      agencia;
      saldo;
      rg;
   }

Isso é uma classe.

   objeto:

   const cliente1 = new Cliente(); <- Isso é um Objeto
   const cliente2 = new Cliente();

Isso são objetos.
...

Dentro das classes temos os componentes que podem ser adicionados.
...

this -> especifica que quer acessr o componente em especifico.
   exemplo: da conta do cliente que eu especifiquei, atrás de uma chamada após.
...

Para deixar uma "variavel" privada adiocionamos # na frente do nome dela, em todas as vezes que ela for chamada! dentro e fora da classe.
   CUIDADOS: como o JS é uma linguagem dinamica, se durante o código eu chamar o objeto que usa minha classe e não utilizar o nome correto, ele cria algo novo só para aquele objeto,é como um falso positivo.

Early return:
O que é? É você fazer o retorno em antecipado, por exemplo:
   quando se tem muitas verificações em uma variável/método/função, para o código não ficar com a identação muito grande utilizamos o early return para "finalizar"/confirmar, o resultado da minha condição e não ter muito avanço de identação.
   if (valor > 0) {
      if () {
         if () {

         }
      }
   }
   OBS: não é sempre que vai acontecer, mas pode...
   com o early return:
   if (valor > 0) {
      return;
   }
   this._saldo += valor;

   if (valor <= 0) {
      return;
   }
   this._saldo += valor;

   Assim passamos a ter o resultado já em seguida.

   