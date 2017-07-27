document.getElementById("btnCadastrarPagina").addEventListener("click", function () {

    var nome = document.getElementById("inputNomePagina");
    var sobrenome = document.getElementById("inputSobrenomePagina");
    var email = document.getElementById("inputEmailPagina");

    if (nome.value != "" &&
        sobrenome.value != "" &&
        email.value != "") {
        
        gravar(nome, sobrenome, email);
    }
});