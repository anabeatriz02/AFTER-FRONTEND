const btn = document.querySelector('#editar')

async function getContent() {
    try {

        const response = await fetch('http://localhost:4000/usuarioComum/acharPerfilUsuario/4')

        console.log(response)

        const data = await response.json()

        console.log(data)

        mostrarDadosPerfil(data)

    } catch (error) {

        console.error(error)

    }

}

getContent()

function mostrarDadosPerfil(perfis) {

    const inputNome = document.querySelector('#nome')
    inputNome.value = perfis[0].nome

    const inputNickname = document.querySelector('#nickname')
    inputNickname.value = perfis[0].tblPerfil.nickname

    const inputBiografia = document.querySelector('#biografia')
    inputBiografia.value = perfis[0].tblPerfil.biografia

    const inputEmail = document.querySelector('#email')
    inputEmail.value = perfis[0].tblPerfil.email

    const inputSenha = document.querySelector('#senha')
    inputSenha.value = perfis[0].tblPerfil.senha

    const inputDataNasc = document.querySelector('#dataNasc')
    inputDataNasc.value = perfis[0].dataNasc

    const inputCep = document.querySelector('#cep')
    inputCep.value = perfis[0].tblEnderecos[0].cep

}

btn.addEventListener('click', () => {

    const perfil = pegarValores()

    editarPerfil(perfil)
    editarPerfilEndereco(perfil)

})

function pegarValores(){
    const inputNome = document.querySelector('#nome')
    const inputNickname = document.querySelector('#nickname')
    const inputBiografia = document.querySelector('#biografia')
    const inputEmail = document.querySelector('#email')
    const inputSenha = document.querySelector('#senha')
    const inputDataNasc = document.querySelector('#dataNasc')
    const inputCep = document.querySelector('#cep')

    const perfil = {
        nome: inputNome.value,
        nickname: inputNickname.value,
        biografia: inputBiografia.value,
        email: inputEmail.value,
        senha: inputSenha.value,
        dataNasc: inputDataNasc.value,
        cep: inputCep.value
    }

    return perfil
}


async function editarPerfil(perfil){
    try {
        const resposta = await fetch('http://localhost:4000/perfil/editarPerfilUsuarioComum/11', {
            method: 'PUT',
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

async function editarPerfilEndereco(perfil, idEndereco){
    try {
        const resposta = await fetch(`http://localhost:4000/endereco/editarEndereco/2`, {
            method: 'PUT',
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


