const btn = document.querySelector('#avancar')

btn.addEventListener('click', () => {

    const ingresso = getDadosIngresso()

    enviarIngressoParaAPI(ingresso)

    // console.log(evento)

})

function getDadosIngresso(){

    const inputTitulo = document.querySelector('#tituloIngresso')
    const inputDescricao = document.querySelector('#descricao')
    const inputQuantidade = document.querySelector('#quantidade')
    const inputValor = document.querySelector('#valor')

    const variedadeIngressoLote = {
        tituloIngresso: inputTitulo.value,
        descricao: inputDescricao.value,
        quantidade: inputQuantidade.value,
        valor: inputValor.value 
    }

    return variedadeIngressoLote

}

async function enviarIngressoParaAPI(ingresso) {
    try {
        const resposta = await fetch('http://localhost:4000/variedadeIngresso/cadastrarVariedadeIngresso', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ingresso)
        })

    } catch (erro) {
        console.error(erro)
    }
}