

const botaoBusca = document.querySelector ("#pagina-home main a");
const modal = document.querySelector("#modal");
const fechar = document.querySelector("#modal .header a");

botaoBusca.addEventListener("click", function () {

    modal.classList.remove("hidden");

})

fechar.addEventListener("click", function(){
    
    modal.classList.add("hidden");


})