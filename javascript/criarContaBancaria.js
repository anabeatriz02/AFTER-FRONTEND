const btn = document.querySelector('#avancar')

btn.addEventListener('click', () => {

    const contaBancaria = getDadosContaBancaria()

    enviarContaBancariaParaAPI(contaBancaria)

    // console.log(evento)

})

function getDadosContaBancaria(){

    const inputBanco = document.querySelector('#banco')
    const inputAgencia = document.querySelector('#agencia')
    const inputNumeroConta = document.querySelector('#descricao')
    const inputDigito = document.querySelector('#digito')

    const variedadeIngressoLote = {
        tituloIngresso: inputTitulo.value,
        descricao: inputDescricao.value,
        quantidade: inputQuantidade.value,
        valor: inputValor.value 
    }

//     return variedadeIngressoLote

// }

// async function enviarIngressoParaAPI(ingresso) {
//     try {
//         const resposta = await fetch('http://localhost:4000/variedadeIngresso/cadastrarVariedadeIngresso', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(ingresso)
//         })

//     } catch (erro) {
//         console.error(erro)
//     }
}