function LeiaMais(){
    var pontos=document.querySelectorAll("[id^='pontos']");
    var extensao=document.querySelectorAll("[id^='mais']");
    var btnleiamais=document.getElementById("btnleiamais");
    var todosexpandidos = true;

    pontos.forEach(function(pontos, index){

        if (pontos.style.display === "none"){
        pontos.style.display="inline";
        extensao[index].style.display="none";
        todosexpandidos = false;

        }else{

        pontos.style.display="none";
        extensao[index].style.display="inline";
        
    }
    });

    btnleiamais.innerHTML = todosexpandidos ? "Leia-Menos -" : "Leia-Mais +";
}
function Expandir(){
    var principal=document.querySelectorAll("[id^='principal']");
    var opcoes=document.querySelectorAll("[id^='expandirservicos']");
    var btnmaisinfo=document.getElementById("btnmaisinfo");
    var todosexpandidos = true;

    pontos.forEach(function(principal, index){

        if (principal.style.display === "none"){
        principal.style.display="inline";
        opcoes[index].style.display="none";
        todosexpandidos = false;

        }else{

        principal.style.display="none";
        opcoes[index].style.display="inline";
        
    }
    });

    btnmaisinfo.innerHTML = todosexpandidos ? "-" : "+";
}