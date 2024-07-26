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
    textoNomal = document.getElementById("input").value;
    document.getElementById("resposta").innerHTML = mudarString(listaChaves, listaLetras, "Descriptografar");
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

    document.getElementById("alerta_botao").innerHTML = "OK"
    botoesOnOff(true)
    document.getElementById("alerta_estilos_texto").innerHTML = "O texto foi copiado!"
    document.getElementById("alerta_estilos").style.display = "flex";
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
function takePill() {

    // Armazena o elemento alt da imagem
    var pill = document.getElementById("takePill").alt;
    
    // Se o elemento for "Red_Pill"
    if (pill == "Red_Pill"){
        
        // Tomar a Pílula Azul
        document.getElementById("takePill").alt = "Blue_Pill";

        // Alterar estilo para uma realidade de ignorância abençoada (sem conhecimento da matrix)
        elementosEstilos("original", false, true);
        
        // Mensagem para a janela
        document.getElementById("alerta_estilos_texto").innerHTML = "Essa é uma realidade de ignorância abençoada.<br>Esqueça o que sabe e se contente com a realidade.<br>Quando acordar, não vai se lembrar de mais nada."

        // Mensagem do botão
        document.getElementById("alerta_botao").innerHTML = "Pílula Azul"
    }

    // Se o elemento for "Blue_Pill"
    if (pill == "Blue_Pill"){
        
        // Tomar a Pílula Vermelha
        document.getElementById("takePill").alt = "Red_Pill";
        
        // Alterar estilo para uma realidade onde se abraça a verdade dura e dolorosa (conhecimento da matrix)
        elementosEstilos("matrix", true, false);

        // Mensagem para a janela
        document.getElementById("alerta_estilos_texto").innerHTML = "Essa é uma realidade de verdades duras e dolorosas.<br>Você está liberto e pode ver a realidade do mundo."

        // Mensagem do botão
        document.getElementById("alerta_botao").innerHTML = "Pílula Vermelha"
    }

    // Limpar os campos de mensagem
    document.getElementById("input").value = "";
    document.getElementById("resposta").innerHTML = "";

    // Mensagem do tipo de pílula tomada
    document.getElementById("alerta_estilos").style.display = "flex";
    botoesOnOff(true);
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

function removerAlerta() {
    document.getElementById("alerta_estilos").style.display = "none";
    botoesOnOff(false);
}

function botoesOnOff(balorBooleano){
    document.getElementById("criptografar").disabled = balorBooleano;
    document.getElementById("descriptografar").disabled = balorBooleano;
    document.getElementById("copiar").disabled = balorBooleano;
    document.getElementById("input").disabled = balorBooleano;
    document.getElementById("logo_estilo").disabled = balorBooleano;
}