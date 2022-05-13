const btn = document.querySelector('#salvar')

btn.addEventListener('click', () => {

    const empresa = getDadosPerfil()

    enviarPerfilParaAPI(empresa)

    console.log(empresa)

})

function getDadosPerfil() {
    const inputNickname = document.querySelector('#nickname')
    const inputEmail = document.querySelector('#email')
    const inputCnpj = document.querySelector('#cnpj')
    const inputSenha = document.querySelector('#senha')

    const empresa = {
        nickname: inputNickname.value,
        email: inputEmail.value,
        senha: inputSenha.value,
        cnpj: inputCnpj.value
    }

    return empresa

}

async function enviarPerfilParaAPI(empresa) {
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