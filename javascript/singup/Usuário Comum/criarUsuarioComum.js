"use-strict"

function realizarCadastroUsuarioComum() {

    const perfil = getDadosPerfil()

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

    const inputBiografia = document.querySelector('#biografia')

    const isRequired = value => value === '' ? false : true;

    const checkNickname = () => {
        let valid = false

        const nickname = inputNickname.value.trim()

        if (!isRequired(nickname)) {
            alert("Você não passou o nickname")
        } else {
            valid = true
        }

        return valid
    }

    const checkEmail = () => {
        let valid = false

        const email = inputEmail.value.trim()

        if (!isRequired(email)) {
            alert("Você não passou o email")
        } else {
            valid = true
        }

        return valid
    }

    const checkNomeCompleto = () => {
        let valid = false

        const nomeCompleto = inputNomeCompleto.value.trim()

        if (!isRequired(nomeCompleto)) {
            alert("Você não passou o nome")
        } else {
            valid = true
        }

        return valid
    }

    const checkDataNasc = () => {
        let valid = false

        const dataNasc = inputDataNasc.value.trim()

        if (!isRequired(dataNasc)) {
            alert("Você não passou a data de nascimento")
        } else {
            valid = true
        }

        return valid
    }

    const checkCep = () => {
        let valid = false

        const cep = inputCep.value.trim()

        if (!isRequired(cep)) {
            alert("Você não passou o cep")
        } else {
            valid = true
        }

        return valid
    }

    const checkCidade = () => {
        let valid = false

        const cidade = inputCidade.value.trim()

        if (!isRequired(cidade)) {
            alert("Você não passou a cidade")
        } else {
            valid = true
        }

        return valid
    }

    const checkEstado = () => {
        let valid = false

        const estado = inputEstado.value.trim()

        if (!isRequired(estado)) {
            alert("Você não passou o estado")
        } else {
            valid = true
        }

        return valid
    }

    const checkSenha = () => {
        let valid = false

        const senha = inputSenha.value.trim()
        const senhaConfirmar = inputSenhaConfirmar.value.trim()

        if (senha != senhaConfirmar) {
            alert("A senha está incorreta")
        } else if(!isRequired(senha) && !isRequired(senhaConfirmar)){
            alert("Você não passou a senha")
        } else {
            valid = true
        }

        return valid
    }


    //Validação dos campos

    let isNicknameValid = checkNickname(),
        isNomeValid = checkNomeCompleto(),
        isEmailValid = checkEmail(),
        isSenhaValid = checkSenha(),
        isDataNascValid = checkDataNasc(),
        isCepValid = checkCep(),
        isCidadeValid = checkCidade(),
        isEstadoValid = checkEstado()

    let isFormValid =
        isNicknameValid &&
        isNomeValid &&
        isEmailValid &&
        isEstadoValid &&
        isCidadeValid &&
        isSenhaValid &&
        isCepValid &&
        isDataNascValid

    //Quando o formulário for válido, fazer o post desse evento
    if (isFormValid) {
        alert("Conta cadastrada com sucesso!")

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
        formData.append("biografia", inputBiografia.value)

        axios.post('http://localhost:4000/perfil/cadastrarPerfilUsuarioComumEndereco', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

}