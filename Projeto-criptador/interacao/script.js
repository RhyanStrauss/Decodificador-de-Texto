var textInput = document.querySelector("#input-text");
var outInput = document.querySelector("#output");

function criptografar() {
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/a/g, "ai").replace(/i/g, "imes").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = 
        '<textarea readonly id="input-texto">' + resultCripto + 
        '</textarea>' + 
        '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar() {
    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = 
        '<textarea readonly id="input-texto">' + resultDescripto + 
        '</textarea>' + 
        '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
    var textoCop = document.getElementById('input-texto').value;

    navigator.clipboard.writeText(textoCop).then(function() {
        alert("Texto Copiado");
    }, function(err) {
        console.error('Erro ao copiar o texto: ', err);
    });
}
