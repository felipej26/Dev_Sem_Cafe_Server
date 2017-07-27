document.getElementById("btnCadastrarPopUp").addEventListener("click", function () {

    if (document.getElementById("inputNomePopUp").value != "" &&
        document.getElementById("inputSobrenomePopUp").value != "" &&
        document.getElementById("inputEmailPopUp").value != "") {
        
        gravar(
            document.getElementById("inputNomePopUp"), 
            document.getElementById("inputSobrenomePopUp"),
            document.getElementById("inputEmailPopUp"));
    }
});

function gravar(nome, sobrenome, email) {
    var xhr = new XMLHttpRequest();
    
    var params = "nome=" + nome.value +
    "&sobrenome=" + sobrenome.value + 
    "&email=" + email.value +
    "&ip=" + ip;

    xhr.onreadystatechange = function(){
        if (this.readyState == 4) {
            location.href = "/acervo";
        }
    }
    xhr.open('POST', '../../usuarios/', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(params);
}

var ip;

function getIP(json) {
    ip = json.ip;
}

ajustarTexto();
ajustarData();

function ajustarTexto() {
    for(var i = 0; i < document.getElementsByClassName("texto-post").length; i++){
        var elemento = document.getElementsByClassName("texto-post")[i];
        elemento.innerHTML = elemento.textContent;
    }
}

function ajustarData() {
    for(var i = 0; i < document.getElementsByClassName("post-data").length; i++){
        var elemento = document.getElementsByClassName("post-data")[i];
        var d = new Date(elemento.innerHTML);
        elemento.innerHTML = d.toLocaleDateString("pt-BR");
    }
}