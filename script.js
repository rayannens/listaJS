
/* 1. Calculadora de IMC
Função para calcular IMC*/
function calcularIMC() {
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const imc = peso / (altura * altura);
  let classificacao = '';

  if (imc < 18.5) classificacao = 'Abaixo do peso!';
  else if (imc < 25) classificacao = 'Peso normal!';
  else if (imc < 30) classificacao = 'Sobrepeso!';
  else classificacao = 'Erro!';

  document.getElementById('resultado').textContent = `IMC: ${imc.toFixed(2)} - ${classificacao}`;
}

/*2. Contador de Cliques*/
let cliques = 0;
function contarCliques() {
  cliques++;
  document.getElementById('contador').textContent = cliques;
}

/* 3. Relógio Digital
Função atualizar relógio*/
function atualizarRelogio() {
  const agora = new Date();
  const horas = String(agora.getHours()).padStart(2, '0');
  const minutos = String(agora.getMinutes()).padStart(2, '0');
  const segundos = String(agora.getSeconds()).padStart(2, '0');
  document.getElementById('relogio').textContent = `${horas}:${minutos}:${segundos}`;
}
setInterval(atualizarRelogio, 1000);
atualizarRelogio();

/* 4. Validador de Senha
 Função validar senha*/
function validarSenha() {
  const senha1 = document.getElementById('senha1').value;
  const senha2 = document.getElementById('senha2').value;
  const mensagem = senha1 === senha2 ? "As senhas coincidem!" : "As senhas não coincidem.";
  document.getElementById('mensagem').textContent = mensagem;
}

/* 5. Jogo de Adivinhação 
Função para gerar número aleatório*/

const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;
function verificarPalpite() {
  const palpite = parseInt(document.getElementById('palpite').value);
  tentativas++;
  if (palpite === numeroSecreto) {
    document.getElementById('feedback').textContent = `Acertou em ${tentativas} tentativas!`;
  } else {
    document.getElementById('feedback').textContent = 'Errado! Tente novamente.';
  }
}