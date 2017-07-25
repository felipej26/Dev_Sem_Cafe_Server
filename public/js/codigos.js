$(document).on("submit", "#formCadastro", function(){
    gravar();
});

function gravar() {
    var xhr = new XMLHttpRequest();

    var nome = document.getElementById("inputNome");
    var sobrenome = document.getElementById("inputSobrenome");
    var email = document.getElementById("inputEmail");
    
    var params = "nome=" + nome.value +
    "&sobrenome=" + sobrenome.value + 
    "&email=" + email.value +
    "&ip=" + ip;

    xhr.onreadystatechange = function(){
        
        console.log(xhr.responseText);
        if(this.readyState == 4 && (this.status >= 200 && this.status <= 206)){
            location.href = "/documents/Tudo o Que Você Precisa Saber Para Organizar Um Hackaton.pdf";
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

$(document).ready(function ubsrt()
{
  	window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;  
	var pc = new RTCPeerConnection({iceServers:[]}), 
	noop = function(){}; 
     
   	pc.createDataChannel("");  
	pc.createOffer(pc.setLocalDescription.bind(pc), noop);   
    pc.onicecandidate = function(ice){ 
   	    if(!ice || !ice.candidate || !ice.candidate.candidate)  return;
        ip = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];

        pc.onicecandidate = noop;
    }; 
});

$(document).on("click", ".ler-mais", function(){
    var id = $(this).attr("id").replace("abrir-", "");
    $("#" + id).css("height", "auto");
    $(this).hide();
});