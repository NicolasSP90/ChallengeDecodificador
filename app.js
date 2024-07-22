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
    var pill = document.getElementById("pill").alt;
    console.log(pill)
    
    if (pill == "Blue_Pill"){
        document.getElementById("pill").alt = "Red_Pill";
        resetarEstilo("style_start");
        document.getElementById("theme-stylesheet").href = "styles/style_original.css";
    }

    if (pill == "Red_Pill"){
        document.getElementById("pill").alt = "Blue_Pill";
        resetarEstilo("style_start");
        document.getElementById("theme-stylesheet").href = "styles/style_matrix.css";
    }
}
