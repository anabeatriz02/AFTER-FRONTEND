const btn = document.querySelector('#salvar')

btn.addEventListener('click', () => {

    const evento = getDadosEvento()

    enviarEventoParaAPI(evento)
    enviarAssuntoParaApi(evento)
    // console.log(evento)

})


function getDadosEvento() {
    const inputTitulo = document.querySelector('#titulo')

    const selectCategoria = document.querySelector('#category')
    const categoriaSelecionada = selectCategoria.options[selectCategoria.selectedIndex].value

    const selectAssunto = document.querySelector('#topic')
    const assuntoSelecionado = selectAssunto.options[selectAssunto.selectedIndex].value

    const inputDescricao = document.querySelector('#descricao')

    const inputCep = document.querySelector('#cep')
    const inputBairro = document.querySelector('#bairro')
    const inputEstado = document.querySelector('#estado')
    const inputLogradouro = document.querySelector('#logradouro')
    const inputCidade = document.querySelector('#cidade')

    const inputDataInicio = document.querySelector('#dataInicio')
    const inputDataFim = document.querySelector('#dataFim')
    const inputHoraInicio = document.querySelector('#horaInicio')
    const inputHoraFim = document.querySelector('#horaFim')

    const inputCapa = document.querySelector('#input-photo-file')

    if (inputDataFim.value == null || inputDataFim.value == "") {
        dataTermino = inputDataInicio.value
    } else {
        dataTermino = inputDataFim.value
    }

    const evento = {
        titulo: inputTitulo.value,
        descricao: inputDescricao.value,
        tblCategoriumIdCategoria: categoriaSelecionada,
        dataInicio: inputDataInicio.value,
        dataFim: dataTermino,
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

function mostrarCategoria(categorias) {

    let output = ''

    for (let categoria of categorias) {
        output += `<option value="${categoria.idCategoria}">${categoria.nomeCategoria}</option>`
    }

    document.querySelector('#categoryOption').innerHTML = output

    const selectCategoria = document.querySelector('#category')

    selectCategoria.addEventListener('change', () => {

        for (let categoria of categorias) {
            pegarAssunto(categoria)
        }

    })

    // console.log(pegarAssunto(categorias))
}

async function pegarAssunto(categoria) {

    const selectCategoria = document.querySelector('#category')

    try {
        const response = await fetch(`http://localhost:4000/assunto/listarPorCategoria/${categoria.idCategoria}`)

        const data = await response.json()

        mostrarAssunto(data)

    } catch (error) {

        console.error(error)

    }

}

function mostrarAssunto(assuntos) {

    let output = ''

    for (let assunto of assuntos) {
        output += `<option value="${assunto.idAssunto}">${assunto.nomeAssunto}</option>`
    }

    document.querySelector('#topicOption').innerHTML = output
}

async function enviarAssuntoParaApi(evento){
    try {
        const resposta = await fetch(`http://localhost:4000/intermEventoAssunto/cadastrarIntermEventoAssunto/3/17`, {
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