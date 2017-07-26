
document.getElementById("btnCadastrar").addEventListener("click", function () {

    if (document.getElementById("inputNome").value != "" &&
        document.getElementById("inputSobrenome").value != "" &&
        document.getElementById("inputEmail").value != "") {
        
        gravar(
            document.getElementById("inputNome"), 
            document.getElementById("inputSobrenome"),
            document.getElementById("inputEmail"));
    }
});

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
        if(this.readyState == 4 && (this.status >= 200 && this.status <= 206)){
            location.href = "/acervo";
        }
    }
    xhr.open('POST', '../../usuarios/', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(params);

    nome.innerHTML = "";
    sobrenome.innerHTML = "";
    email.innerHTML = "";
}

var ip;

function getIP(json) {
    ip = json.ip;
}

$(document).ready(function(){
    ajustarTexto();
    ajustarData();
});

function ajustarTexto() {
    for(var i = 0; i < $(".texto-post").length; i++){
        var $this = $(".texto-post")[i];
        $($this).html($($this).text());
    }
}

function ajustarData() {
    for(var i = 0; i < $(".post-data").length; i++){
        var $this = $(".post-data")[i];
        var d = new Date($($this).text());
        $($this).text(d.toLocaleDateString("pt-BR"));
    }
}