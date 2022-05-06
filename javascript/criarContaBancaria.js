const btn = document.querySelector('#avancar')

btn.addEventListener('click', () => {

    const bancoConta = getDadosbancoConta()

    enviarbancoContaParaAPI(bancoConta)

    // console.log(evento)

})

function getDadosbancoConta(){

    const inputBanco = document.querySelector('#banco')
    const inputAgencia = document.querySelector('#agencia')
    const inputNumeroConta = document.querySelector('#descricao')
    const inputDigito = document.querySelector('#digito')

    // const variedadeIngressoLote = {
    //     tituloIngresso: inputTitulo.value,
    //     descricao: inputDescricao.value,
    //     quantidade: inputQuantidade.value,
    //     valor: inputValor.value 
    // }

//     return variedadeIngressoLote

    }

async function enviarbancoContaParaAPI(bancoConta) {
    try {
        const resposta = await fetch('http://localhost:4000/ContaEmpresa/cadastrarContaCompleta', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bancoConta)
        })

    } catch (erro) {
        console.error(erro)
     }
}