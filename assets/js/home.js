document.getElementById("btnCadastrar").addEventListener("click", function () {

    var nome = document.getElementById("inputNome");
    var sobrenome = document.getElementById("inputSobrenome");
    var email = document.getElementById("inputEmail");

    if (nome.value != "" &&
        sobrenome.value != "" &&
        email.value != "") {
        
        gravar(nome, sobrenome, email);
    }
});