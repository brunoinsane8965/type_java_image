function LeiaMais(){
    var pontos=document.querySelectorAll("[id^='pontos']");
    var extensao=document.querySelectorAll("[id^='mais']");
    var btnleiamais=document.getElementById("btnleiamais");
    var todosexpandidos = true;

    pontos.forEach(function(pontos, index){

        if (pontos.style.display === "none"||pontos.style.display === ""){
        pontos.style.display="inline";
        extensao[index].style.display="none";
        todosexpandidos = false;

        }else{

        pontos.style.display="none";
        extensao[index].style.display="inline";
        
    }
    });

    btnleiamais.innerHTML = todosexpandidos ? "Leia-Menos" : "Leia-Mais";
}