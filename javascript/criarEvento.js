const btn = document.querySelector('#salvar')

btn.addEventListener('click', () => {

    const evento = getDadosEvento()

    enviarEventoParaAPI(evento)

    // console.log(evento)

})


function getDadosEvento() {
    const inputTitulo = document.querySelector('#titulo')

    const selectCategoria = document.querySelector('#category')
    const categoriaSelecionada = selectCategoria.options[selectCategoria.selectedIndex].value

    const inputDescricao = document.querySelector('#descricao')

    const inputCep = document.querySelector('#cep')
    const inputBairro = document.querySelector('#bairro')
    const inputEstado = document.querySelector('#estado')
    const inputLogradouro = document.querySelector('#logradouro')
    const inputCidade = document.querySelector('#cidade')

    const inputDataInicio = document.querySelector('#dataInicio')
    const inputHoraInicio = document.querySelector('#horaInicio')
    const inputHoraFim = document.querySelector('#horaFim')

    const inputCapa = document.querySelector('#input-photo-file')

    const evento = {
        titulo: inputTitulo.value,
        descricao: inputDescricao.value,
        tblCategoriumIdCategoria: categoriaSelecionada,
        dataInicio: inputDataInicio.value,
        horaInicio: inputHoraInicio.value,
        horaFim: inputHoraFim.value,
        capa: inputCapa.value,
        cep: inputCep.value,
        logradouro: inputLogradouro.value,
        bairro: inputBairro.value,
        cidade: inputCidade.value,
        estado: inputEstado.value
    }

    return evento
}

async function enviarEventoParaAPI(evento) {
    try {
        const resposta = await fetch('http://localhost:4000/evento/cadastrarEventoEndereco/1/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(evento)
        })

    } catch (erro) {
        console.error(erro)
    }
}

async function pegarCategoria() {
    try {
        const response = await fetch('http://localhost:4000/categoria/listarCategorias')

        const data = await response.json()

        mostrarCategoria(data)

    } catch (error) {

        console.error(error)

    }
}

pegarCategoria()

function mostrarCategoria(categorias){

    let output = ''

    for(let categoria of categorias){
        output += `<option value="${categoria.idCategoria}">${categoria.nomeCategoria}</option>`
    }

    document.querySelector('#categoryOption').innerHTML = output
}