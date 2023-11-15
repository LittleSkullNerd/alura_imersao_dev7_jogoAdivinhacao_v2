var numeroSecreto = parseInt(Math.random() * 1000) + 1;
var palpites = 0;

//enquanto o chute for diferente do número secreto
while(chute != numeroSecreto) {
  var chute = prompt('Digite um número entre 1 e 1000');
  
  if (chute > 0 && chute <= 1000) {
  palpites++;
  
  //se o chute for igual ao número secreto
  if (chute == numeroSecreto) {
    alert('Acertou!!!')
  } else if (chute > numeroSecreto) {
    alert('Errou... o número secreto é menor que ' + chute + '!')
  } else if (chute < numeroSecreto) {
    alert('Errou... o número secreto é maior que ' + chute + '!')
  }
} else {
  alert('Digite um número válido!')
  }
}

alert('Você já deu ' + palpites + ' palpites!');