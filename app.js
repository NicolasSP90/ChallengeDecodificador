let textoNomal = "";

// Caracteres que serão criptografados <-> descriptografados
let listaLetras = ["e", "i", "a", "o", "u"];

let listaChaves = ["enter", "imes", "ai", "ober", "ufat"];


// Função de Criptografar
function criptografar() {

    // Salvar os elementos do campo "input"
    textoNomal = document.getElementById("input").value;

    // Atribuir a mensagem manipulada ao campo "resposta"
    document.getElementById("resposta").innerHTML = mudarString(listaLetras, listaChaves, "Criptografar");

    // Resetar estilo
    resetarEstilo("style_answer", false, true);
}


// Função de Desriptografar
function descriptografar() {

    // Salvar os elementos do campo "input"
    textoNomal = document.getElementById("input").value;

    // Atribuir a mensagem manipulada ao campo "resposta"
    document.getElementById("resposta").innerHTML = mudarString(listaChaves, listaLetras, "Descriptografar");

    // Resetar estilo
    resetarEstilo("style_answer", false, true);
}


// Função de Copiar e Resetar
function copiarEresetar() {

    // Salvar os elementos do campo "resposta"
    textoNomal = document.getElementById("resposta").innerHTML;

    // Copiar o texto para a área de transferência
    navigator.clipboard.writeText(textoNomal)

    // Limpar os campos de mensagem
    document.getElementById("input").value = "";
    document.getElementById("resposta").innerHTML = "";

    // Resetar estilo
    resetarEstilo("style_start", true, false);

    // Mensagem informativa
    botoesDesabilitados(true)
    
    document.getElementById("alerta_estilos").style.display = "flex";

    document.getElementById("botao_ok").style.display = "flex";
    
    document.getElementById("alerta_estilos_texto").innerHTML = "O texto foi copiado!"
    
}


// Função de manipulação de string
function mudarString(listaAlterar, listaRegra, acao){

    // Transforma o texto em minúsculo
    let novoTexto = textoNomal.toLowerCase();

    // Ação de Criptografar
    if (acao == "Criptografar") {

        // Para i=0 até o comprimento máximo da lista de letras que precisam ser manituladas
        for (i=0; i < listaLetras.length; i++) {
            
            // Remover acentos
            novoTexto = novoTexto.normalize("NFD").replace(/\p{Diacritic}/gu, "")

            // Substitui as letras pelas suas partes criptografadas
            novoTexto = novoTexto.replaceAll(listaAlterar[i], listaRegra[i]);
        }
    }

    // Ação de Descriptografar
    if (acao == "Descriptografar") {

        // Para i=0 até o comprimento máximo da lista de letras que precisam ser manituladas
        for (i=listaLetras.length-1; i >= 0 ; i--) {

            // Substitui as partes criptografadas por suas letras
            novoTexto = novoTexto.replaceAll(listaAlterar[i], listaRegra[i]);
        }
    }

    // Separa o texto (criptografado ou descriptografado) em uma lista, com o separador sendo o ponto (cada elemento da lista é uma frase)
    // Foi utilizado regex para considerar: qualquer número de espaços + um ponto + qualquer número de espaços como o final de uma frase
    novoTexto = novoTexto.split(/\s*\.\s*/);

    // Percorrendo cada elemento da lista (frase)
    for (i=0; i < novoTexto.length; i++){

        // Substituindo o elemento pela soma entre o primeiro caractere maiusculo + string cortada a partir do segundo elemento
        novoTexto[i] = novoTexto[i][0].toUpperCase() + novoTexto[i].slice(1);
    }

    // Unindo os elementos da lista em uma única string com formatação de texto
    novoTexto = novoTexto.join(". ")
    
    // Retornando o texto
    return novoTexto;
}


// Função para alterar a estilização inicial <-> resposta
function resetarEstilo(estilo, resposta_oculta, inicio_oculto) {

    // Escolha do estilo que possui elementos escondidos
    document.getElementById("hidden_visual").href = `styles/${estilo}.css`;

    // Definição dos elementos de resposta ocultos
    document.getElementById("resposta").hidden = resposta_oculta;

    // Definição dos elementos de de inicio ocultos
    document.getElementById("resultado__logo").hidden = inicio_oculto;
}


// Função para tomar a pílula e decidir em que realidade vai ser trabalhado
function escolherPilula() {

    // Desabilitar botões
    botoesDesabilitados(true)

    // Limpar os campos de mensagem
    document.getElementById("input").value = "";
    document.getElementById("resposta").innerHTML = "";

    // Atribuindo texto
    document.getElementById("alerta_estilos_texto").innerHTML = "Esta é a sua última chance. Então você não será capaz de recuar. Se você tomar a pílula azul, fim da história: você vai acordar em sua cama e acreditar no que quiser. Se você pegar a vermelha, estará no país das maravilhas, e eu mostrarei a você até onde vai a toca do coelho. Lembre-se de que a única coisa que ofereço é a verdade, nada mais.";

    // Mostrar alerta
    document.getElementById("alerta_estilos").style.display = "flex";

    // Mostrar botões de pílulas
    document.getElementById("alerta_estilos__botoes").style.display = "flex";
}


function tomarPilula(cor) {

    // Escolhendo a Pílula Azul
    if (cor == "Pílula Azul"){

        // Alterar estilo para uma realidade de ignorância abençoada (sem conhecimento da matrix)
        elementosEstilos("original", false, true);
        
        // Mensagem para a janela
        document.getElementById("alerta_estilos_texto").innerHTML = "Essa é uma realidade de ignorância abençoada.<br>Esqueça o que sabe e se contente com a realidade.<br>Quando acordar, não vai se lembrar de mais nada."
    }

    // Escolhendo a Pílula Vermelha
    if (cor == "Pílula Vermelha"){
        
        // Alterar estilo para uma realidade onde se abraça a verdade dura e dolorosa (conhecimento da matrix)
        elementosEstilos("matrix", true, false);

        // Mensagem para a janela
        document.getElementById("alerta_estilos_texto").innerHTML = "Essa é uma realidade de verdades duras e dolorosas.<br>Você está liberto e pode ver a realidade do mundo."
    }

    // Ocultar botões de pílulas
    document.getElementById("alerta_estilos__botoes").style.display = "none";

    // Mostrar botão OK
    document.getElementById("botao_ok").style.display = "flex";
}


function fecharAlerta(){

    // Esconder OK
    document.getElementById("botao_ok").style.display = "none";

    // Esconder alerta
    document.getElementById("alerta_estilos").style.display = "none";

    // Limpar mensagem
    document.getElementById("alerta_estilos_texto").innerHTML = "";


    // Liberar botões
    botoesDesabilitados(false);
}


function botoesDesabilitados(balorBooleano){
    
    // Função para desabilitar elementos (true = desabilitado)
    document.getElementById("criptografar").disabled = balorBooleano;
    document.getElementById("descriptografar").disabled = balorBooleano;
    document.getElementById("copiar").disabled = balorBooleano;
    document.getElementById("input").disabled = balorBooleano;
    document.getElementById("logo_estilo").disabled = balorBooleano;
}


function elementosEstilos(estilo, estilo_matrix, estilo_original){

    // Resetando estilo
    resetarEstilo("style_start", true, false);
    
    // Adicionando cores e template original e removendo Digital Rain
    document.getElementById("theme-stylesheet").href = `styles/style_${estilo}.css`;
    document.getElementById("theme-stylesheet-color").href = `styles/style_colors_${estilo}.css`;
    document.getElementById("matrix").hidden = estilo_original;
    document.getElementById("logo_one").hidden = estilo_original;
    document.getElementById("logo_alura").hidden = estilo_matrix;
    
    // Imagem resposta original
    document.getElementById("resultado__logo").src = `assets/logo_decodificador_${estilo}.png`;
    
    // Imagem exclamação original
    document.getElementById("alerta_excalamacao").src = `assets/exclamation_circle_${estilo}.png`;
}