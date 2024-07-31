 let titulo = document.querySelector('h1');
 titulo.innerHTML = 'Jogo do número secreto';

 let paragrafo = document.querySelector('p');
 paragrafo.innerHTML = 'Escolha um número entre 1 e 10:';

 let listaDeNumerosAleatorios = [];
 let numeroLimite = 10;
 let numeroAleatorio = gerarNumeroAleatorio();
 let tentativas = 1;

 function exibirTextoNaTela(tag, texto) {
     let campo = document.querySelector(tag);
     campo.innerHTML = texto;
     responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:0.9});
 }

 function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
 }

exibirMensagemInicial();

 function verificarChute() {
     let chute = document.querySelector('input').value;
     if (chute == numeroAleatorio) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número aleatório com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
     } else {
         if (chute > numeroAleatorio) {
             exibirTextoNaTela('p', 'O número é menor que o chute');
         } else {
             exibirTextoNaTela('p', 'O número é maior que o chute');
         }
         tentativas++
         limparCampo();
      }
      console.log(numeroAleatorio);}

  function gerarNumeroAleatorio() {
      let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
      let quantidadeDeElementosNaLista = listaDeNumerosAleatorios.length;
      if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosAleatorios = [];
      }


      if (listaDeNumerosAleatorios.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
      } else {
        listaDeNumerosAleatorios.push(numeroEscolhido);
        console.log(listaDeNumerosAleatorios);
        return numeroEscolhido;
      }
 }

 function limparCampo() {
     chute = document.querySelector('input');
     chute.value = '';
 }

 function reiniciarJogo() {
     numeroAleatorio = gerarNumeroAleatorio();
     limparCampo();
     tentativas = 1;
     exibirMensagemInicial();
     document.getElementById('reiniciar').setAttribute('disabled', true);
 }
