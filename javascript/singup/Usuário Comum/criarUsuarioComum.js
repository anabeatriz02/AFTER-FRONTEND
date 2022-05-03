"use-strict"

// const btn = document.querySelector('#salvar')

// btn.addEventListener('click', () => {

//     const perfil = getDadosPerfil()

//     enviarPerfilParaAPI(perfil)

//     console.log(perfil)

// })

function realizarCadastroUsuarioComum() {
    const perfil = getDadosPerfil()

    // enviarPerfilParaAPI(perfil)

    console.log(perfil)
}

function getDadosPerfil() {
    e.preventDefault()

    const inputNickname = document.querySelector('#nickname')
    const inputEmail = document.querySelector('#email')
    const inputSenha = document.querySelector('#senha')
    const inputSenhaConfirmar = document.querySelector('#senhaConfirmar')

    const inputNomeCompleto = document.querySelector('#nome')
    const inputDataNasc = document.querySelector('#dataNasc')

    const inputCep = document.querySelector('#cep')
    const inputCidade = document.querySelector('#cidade')
    const inputEstado = document.querySelector('#uf')

    const inputPerfil = document.querySelector('#imagemPerfil')

    if (inputSenhaConfirmar.value !== inputSenha.value) {
        alert("A senha digitada está incorreta")

        const btnSalvar = document.querySelector('#salvarUsuario')

        btnSalvar.setAttribute('href', "./singup.html")

        return false

    } else {

        const formData = new FormData()

        formData.append("nickname", inputNickname.value)
        formData.append("email", inputEmail.value)
        formData.append("senha", inputSenha.value)
        formData.append("nome", inputNomeCompleto.value)
        formData.append("dataNasc", inputDataNasc.value)
        formData.append("cep", inputCep.value)
        formData.append("cidade", inputCidade.value)
        formData.append("estado", inputEstado.value)
        formData.append("imagemPerfil", inputPerfil.files[0])

        console.log(formData)
        
        fetch('http://localhost:4000/perfil/cadastrarPerfilUsuarioComumEndereco', {
            method: 'POST',
            headers: {
                // Accept: 'application/json',
                // Accept: 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            // body: JSON.stringify(perfil)
            body: formData
        })
        // const perfil = {
        //     nickname: inputNickname.value,
        //     email: inputEmail.value,
        //     senha: inputSenha.value,
        //     nome: inputNomeCompleto.value,
        //     dataNasc: inputDataNasc.value,
        //     cep: inputCep.value,
        //     cidade: inputCidade.value,
        //     estado: inputEstado.value,
        //     imagemPerfil: inputPerfil.files[0]
        // }

        // return perfil

    }

}

// async function enviarPerfilParaAPI(perfil) {
//     try {
//         const resposta = await fetch('http://localhost:4000/perfil/cadastrarPerfilUsuarioComumEndereco', {
//             method: 'POST',
//             headers: {
//                 // Accept: 'application/json',
//                 // Accept: 'application/json',
//                 'Content-Type': 'multipart/form-data'
//             },
//             // body: JSON.stringify(perfil)
//             body: perfil
//         })

//     } catch (erro) {
//         console.error(erro)
//     }

// }