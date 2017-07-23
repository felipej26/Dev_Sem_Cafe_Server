function gravar() {
    var xhr = new XMLHttpRequest();

    var nome = document.getElementById("inputNome");
    var sobrenome = document.getElementById("inputSobrenome");
    var email = document.getElementById("inputEmail");
    var ocupacao = document.getElementById("inputOcupacao");

    var params = "nome=" + nome.value +
        "&sobrenome=" + sobrenome.value + 
        "&email=" + email.value +
        "&ocupacao=" + ocupacao.value +
        "&ip=127.0.0.1"

    xhr.open('POST', 'usuarios', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
        alert(this.responseText);
    };
    xhr.send(params);

    nome.innerHTML = "";
    sobrenome.innerHTML = "";
    email.innerHTML = "";
    ocupacao.innerHTML = "";
}