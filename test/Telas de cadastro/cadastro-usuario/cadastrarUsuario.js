"use-strict"

const btn = document.querySelector('#salvar')

btn.addEventListener('click', () => {

  const perfil = getDadosPerfil()

  enviarPerfilParaAPI(perfil)

  console.log(perfil)

})

function getDadosPerfil() {
  const inputNickname = document.querySelector('#nickname')
  const inputEmail = document.querySelector('#email')
  const inputSenha = document.querySelector('#senha')

  const inputNomeCompleto = document.querySelector('#nome')
  const inputDataNasc = document.querySelector('#dataNasc')

  const inputCep = document.querySelector('#cep')
  const inputCidade = document.querySelector('#cidade')
  const inputEstado = document.querySelector('#estado')

  const perfil = {
    nickname: inputNickname.value,
    email: inputEmail.value,
    senha: inputSenha.value,
    nome: inputNomeCompleto.value,
    dataNasc: inputDataNasc.value,
    cep: inputCep.value,
    cidade: inputCidade.value,
    estado: inputEstado.value
  }

  return perfil
}

async function enviarPerfilParaAPI(perfil) {
  try {
    const resposta = await fetch('http://localhost:4000/perfil/cadastrarPerfilUsuarioComumEndereco', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(perfil)
    })

  } catch (erro) {
    console.error(erro)
  }

}