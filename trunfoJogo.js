// LISTA DE CARTAS
var carta1 = {
  nome: "Tiranossauro Rex",
  imagem: "t-rex.jpg",
  atributos: {
      ataque: 70,
      defesa: 90,
      magia: 85
  }
}
var carta2 = {
  nome: "Spinosaurus Aegyptiacus",
  imagem: "",
  atributos: {
      ataque: 50,
      defesa: 60,
      magia: 55
  }
}
var carta3 = {
  nome: "Deinosuchus",
  imagem: "",
  atributos: {
      ataque: 100,
      defesa: 60,
      magia: 25
  }
}
var carta4 = {
  nome: "Velociraptor",
  imagem: "",
  atributos: {
      ataque: 70,
      defesa: 90,
      magia: 85
  }
}
var carta5 = {
  nome: "Diplodoco",
  imagem: "",
  atributos: {
      ataque: 50,
      defesa: 60,
      magia: 55
  }
}
var carta6 = {
  nome: "Tricerátops",
  imagem: "",
  atributos: {
      ataque: 100,
      defesa: 60,
      magia: 25
  }
}

// ARRAY DE CARTAS
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6]

function sortearCarta() {
    //sorteando a carta para a maquina
    var indiceCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[indiceCartaMaquina]

    //sorteando a carta para o jogador
    var indiceCartaJogador = parseInt(Math.random() * 3)
    while (indiceCartaMaquina == indiceCartaJogador) {
        indiceCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[indiceCartaJogador]
    console.log(cartaJogador)

    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;

    exibeCartaJogador();
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"
    style=" width: inherit; height: inherit; position: absolute;">`; //imagem da moldura, colocar por cima

    divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`;
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    var opcoesTexto = "";

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "</br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>';
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value;
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResutado = document.getElementById("resultado")
    
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = `<p class="resultado-final">Venceu</p>`
    }
    else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = `<p class="resultado-final">Perdeu</p>`
    }
    else {
        htmlResultado = `<p class="resultado-final">Empatou</p>`
    }
    
    divResutado.innerHTML = htmlResultado;
    exibeCartaMaquina();
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"
    style=" width: inherit; height: inherit; position: absolute;">`; //imagem da moldura, colocar por cima

    divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`;
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    var opcoesTexto = "";

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>';
}