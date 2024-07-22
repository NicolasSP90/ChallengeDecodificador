let textoNomal = "";

let listaLetras = ["e", "i", "a", "o", "u"];

let listaChaves = ["enter", "imes", "ai", "ober", "ufat"];


function criptografar() {
    textoNomal = document.getElementById("input").value;
    document.getElementById("resposta").innerHTML = mudarString(listaLetras, listaChaves, "Criptografar");
    resetarEstilo("style_answer");
}

function descriptografar() {
    textoNomal = document.getElementById("input").value;
    document.getElementById("resposta").innerHTML = mudarString(listaChaves, listaLetras, "Descriptografar");
    resetarEstilo("style_answer");
}

function copiarEresetar() {
    textoNomal = document.getElementById("resposta").innerHTML;
    navigator.clipboard.writeText(textoNomal)
    document.getElementById("input").value = "";
    resetarEstilo("style_start");
    alert("O texto foi copiado!");
}

function mudarString(listaAlterar, listaRegra, acao){
    let novoTexto = textoNomal;
    if (acao == "Criptografar") {
        for (i=0; i < listaLetras.length; i++) {
            novoTexto = novoTexto.replaceAll(listaAlterar[i], listaRegra[i]);
        }
    }
    if (acao == "Descriptografar") {
        for (i=listaLetras.length-1; i >= 0 ; i--) {
            novoTexto = novoTexto.replaceAll(listaAlterar[i], listaRegra[i]);
        }
    }
    return novoTexto;
}

function resetarEstilo(estilo) {
    document.getElementById("hidden_visual").href = `styles/${estilo}.css`;
}

function takePill() {
    var pill = document.getElementById("takePill").alt;
    
    if (pill == "Red_Pill"){
        // Tomando a Pílula Azul
        document.getElementById("takePill").alt = "Blue_Pill";
        
        // Resetando estilo
        resetarEstilo("style_start");

        // Adicionando cores e template original e removendo Digital Rain
        document.getElementById("theme-stylesheet").href = "styles/style_original.css";
        document.getElementById("theme-stylesheet-color").href = "styles/style_colors_original.css";
        document.getElementById("matrix").hidden = true;
        document.getElementById("logo_alura").hidden = false;
        document.getElementById("logo_one").hidden = true;

        // Imagem resposta original
        document.getElementById("resultado__logo").src = "assets/Logo_Decodificador_Original.png";

        // Imagem exclamação original
        document.getElementById("alerta_excalamacao").src = "assets/Exclamation_Circle_Original.png";

    }

    if (pill == "Blue_Pill"){
        // Tomando a Pílula Vermelha
        document.getElementById("takePill").alt = "Red_Pill";

        // Resetando estilo
        resetarEstilo("style_start");

        // Adicionando cores e template Matrix e adicionando Digital Rain
        document.getElementById("theme-stylesheet").href = "styles/style_matrix.css";
        document.getElementById("theme-stylesheet-color").href = "styles/style_colors_matrix.css";
        document.getElementById("matrix").hidden = false;
        document.getElementById("logo_alura").hidden = true;
        document.getElementById("logo_one").hidden = false;

    // Imagem resposta Matrix
        document.getElementById("resultado__logo").src = "assets/Logo_Decodificador_Matrix.jpg";

        // Imagem exclamação Matrix
        document.getElementById("alerta_excalamacao").src = "assets/Exclamation_Circle_Matrix.png";
    }
}
