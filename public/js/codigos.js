function gravar() {
    var xhr = new XMLHttpRequest();

    var nome = document.getElementById("inputNome");
    var sobrenome = document.getElementById("inputSobrenome");
    var email = document.getElementById("inputEmail");
    
    var params = "nome=" + nome.value +
    "&sobrenome=" + sobrenome.value + 
    "&email=" + email.value +
    "&ip=" + ip;

    xhr.open('POST', 'usuarios/', false);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function () { };
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