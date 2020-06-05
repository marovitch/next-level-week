

/*Procurando o select que tem o name UF*/
/*Também outro jeito de fazer funções anônimas*/


function populateUFs(){

        const selectUf = document.querySelector ("select[name = uf]");

        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then( res => res.json() )
        .then(estados => {

            for (const estado of estados){
                selectUf.innerHTML += `<option value = "${estado.id}">${estado.nome}</option>`
            }
        
        })
}


function mostrarCidades (event){
    const selectCidades = document.querySelector ("[name=cities]");
    const estadoInput = document.querySelector ("[name=estado]");

    const valueUf = event.target.value;

    const indexDoEstadoSelecionado = event.target.selectedIndex;

    estadoInput.value = event.target.options[indexDoEstadoSelecionado].text;

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${valueUf}/municipios`

    selectCidades.disabled = true;

    fetch(url)
    .then( res => res.json() )
    .then(cidades => {

        for (const cidade of cidades){
            selectCidades.innerHTML += `<option value = "${cidade.nome}">${cidade.nome}</option>`
        }

        selectCidades.disabled = false;
    })

}

populateUFs()

// evento js "change" faz mudar opções dentro de um select, por exemplo
// outro jeito de criar funções anônimas () => {}
document.querySelector("select[name = uf]");
document.addEventListener("change", mostrarCidades);


/////////////////////////////////////////
//CONFIGURANDO A SEÇÃO ITEMS DE COLETA //
/////////////////////////////////////////

const itemsDeColeta = document.querySelectorAll(".grid-itens-coleta li");

for (const item of itemsDeColeta){

    item.addEventListener("click", handleSelectedItem)

}

const itensColetados = document.querySelector("input[name=itens");

let itensSelecionados = [];

function handleSelectedItem(event){

    const itemLi = event.target;
    itemLi.classList.toggle("item-selecionado"); /*Adicionando classe ao "Toggle"*/  

    const itemId = itemLi.dataset.id;

    //verificar se existem itens selecionados, se sim
    //pegar os itens selecionados

    // função findIndex

    const jaSelecionado = itensSelecionados.findIndex (function(item){
        
        const itemEncontrado = item == itemId /* === significa que um está sendo igualado ao outro*/
        return itemEncontrado;
    });

        console.log(jaSelecionado != -1);
    
        // se já estiver selecionado, tirar da seleção

    if (jaSelecionado >= 0){
        const itensFiltrados = itensSelecionados.filter(function(item){ 

            const itemEhDiferente = item != itemId;
            return itemEhDiferente
    })

    itensSelecionados = itensFiltrados;

  }  else {

    itensSelecionados.push(itemId);

    console.log(itensSelecionados);


}

itensColetados.value = itensSelecionados;



    // se não tiver selecionado, adicionar à seleção
    //atualizar o campo escondido com os itens selecionados

}