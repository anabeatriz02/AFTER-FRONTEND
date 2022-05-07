"use-strict"

function realizarCadastroUsuarioComum() {
    const perfil = getDadosPerfil()

    console.log(perfil)

}

function getDadosPerfil() {
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
    const inputFundo = document.querySelector('#imagemFundo')

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
        formData.append("imagemFundo", inputFundo.files[0])

        axios.post('http://localhost:4000/perfil/cadastrarPerfilUsuarioComumEndereco', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
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