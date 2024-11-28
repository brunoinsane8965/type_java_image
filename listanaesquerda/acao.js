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
function Expandir(menu, button) {

        var opcoes = document.getElementById(menu + "Opcoes");

        // Verifica se a lista está visível ou não
        if (opcoes.style.display === "none" || opcoes.style.display === "") {
            // Mostra a lista
            opcoes.style.display = "block";
            button.innerHTML = "&#8722;";
        } else {
            // Esconde a lista
            opcoes.style.display = "none";
            button.innerHTML = "&#43;";
            }
        }