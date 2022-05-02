"use-strict"

function realizarCadastroEmpresa() {
    const empresa = getDadosEmpresa()

    enviarEmpresaParaAPI(empresa)

    console.log(empresa)
}

function getDadosEmpresa() {
    const inputNickname = document.querySelector('#nicknameEmpresa')
    const inputEmail = document.querySelector('#emailEmpresa')
    const inputSenha = document.querySelector('#senhaEmpresa')
    const inputSenhaConfirmar = document.querySelector('#confirmarSenhaEmpresa')

    const inputCnpj = document.querySelector('#cnpj')

    if (inputSenhaConfirmar.value !== inputSenha.value) {

        alert("A senha digitada está incorreta")

        const btnSalvar = document.querySelector('#salvarEmpresa')

        btnSalvar.setAttribute('href', "./singup.html")

        return false

    } else {

        const empresa = {
            nickname: inputNickname.value,
            email: inputEmail.value,
            senha: inputSenha.value,
            cnpj: inputCnpj.value,
        }
    
        return empresa

    }
    
}

async function enviarEmpresaParaAPI(empresa) {
    try {
        const resposta = await fetch('http://localhost:4000/perfil/cadastrarPerfilEmpresa', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(empresa)
        })

    } catch (erro) {
        console.error(erro)
    }

}