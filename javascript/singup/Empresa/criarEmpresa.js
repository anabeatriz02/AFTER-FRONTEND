"use-strict"

function realizarCadastroEmpresa() {
    const empresa = getDadosEmpresa()

    // console.log(empresa)
}

function getDadosEmpresa() {
    const inputNickname = document.querySelector('#nicknameEmpresa')
    const inputEmail = document.querySelector('#emailEmpresa')
    const inputSenha = document.querySelector('#senhaEmpresa')
    const inputSenhaConfirmar = document.querySelector('#confirmarSenhaEmpresa')

    const inputCnpj = document.querySelector('#cnpj')

    const inputPerfil = document.querySelector('#imagemPerfilEmpresa')
    const inputFundo = document.querySelector('#imagemFundoEmpresa')


    // cadastrando BANCO junto com empresa
    const inputBanco = document.querySelector('#bancoEmpresa')
    const inputAgencia = document.querySelector('#agenciaEmpresa')
    const inputNumeroConta = document.querySelector('#numeroContaEmpresa')
    const inputCvv = document.querySelector('#cvvEmpresa')
    const inputTipoConta = document.querySelector('#tipoContaEmpresa')

    if (inputSenhaConfirmar.value !== inputSenha.value) {

        alert("A senha digitada está incorreta")

        const btnSalvar = document.querySelector('#salvarEmpresa')

        btnSalvar.setAttribute('href', "./singup.html")

        return false

    } else {

        const formData = new FormData()

        formData.append("nickname", inputNickname.value)
        formData.append("email", inputEmail.value)
        formData.append("senha", inputSenha.value)
        formData.append("cnpj", inputCnpj.value)
        formData.append("imagemPerfil", inputPerfil.files[0])
        formData.append("imagemFundo", inputFundo.files[0])
        formData.append("banco", inputBanco.value)
        formData.append("agencia", inputAgencia.value)
        formData.append("numeroConta", inputNumeroConta.value)
        formData.append("cvv", inputCvv.value)
        formData.append("tipoConta", inputTipoConta.value)

        var config = {
            method: 'post',
            url: 'http://localhost:4000/perfil/cadastrarPerfilEmpresa',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

    }

}