const btn = document.querySelector('#editar')

async function getContent() {
    try {

        const response = await fetch('http://localhost:4000/usuarioComum/acharPerfilUsuario/1')

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

    if (perfis[0].tblPerfil.imagemPerfil == null || perfis[0].tblPerfil.imagemPerfil == "undefined" || perfis[0].tblPerfil.imagemPerfil == undefined) {
        fotoPerfil = `
            <input id="input-profile-file" type="file" accept="image/*" onchange="loadProfile(event)" />
    		<label for="input-profile-file"></label>
            <img class="profile-file" src="http://localhost:4000/uploads/fundoRoxo.jpg" id="image-profile-preview" />`
    } else {
        fotoPerfil = `
            <input id="input-profile-file" type="file" accept="image/*" onchange="loadProfile(event)" />
    		<label for="input-profile-file"></label>
            <img class="profile-file" src="http://localhost:4000/${perfis[0].tblPerfil.imagemPerfil}" id="image-profile-preview" />`
    }

    document.querySelector('#fotoPerfil').innerHTML = fotoPerfil


    if (perfis[0].tblPerfil.imagemFundo == null || perfis[0].tblPerfil.imagemFundo == "undefined" || perfis[0].tblPerfil.imagemFundo == undefined) {
        fotoFundo = `
            <input id="input-background-file" type="file" accept="image/*" onchange="loadBackground(event)" />
    		<label for="input-background-file"></label>
            <img class="background-file" src="http://localhost:4000/uploads/wallpaperRoxo.jpg" id="image-background-preview" />`
    } else {
        fotoFundo = `
            <input id="input-background-file" type="file" accept="image/*" onchange="loadBackground(event)" />
    		<label for="input-background-file"></label>
            <img class="background-file" src="http://localhost:4000/${perfis[0].tblPerfil.imagemFundo}" id="image-background-preview" />`

    }

    document.querySelector('#fotoFundo').innerHTML = fotoFundo

    // const inputFotoFundo = document.querySelector('#image-background-preview')
    // inputFotoFundo.files = perfis.imagemFundo

}

btn.addEventListener('click', () => {

    const perfil = pegarValores()

    // editarPerfil(perfil)
    // editarPerfilEndereco(perfil)

})

function pegarValores() {
    const inputNome = document.querySelector('#nome')
    const inputNickname = document.querySelector('#nickname')
    const inputBiografia = document.querySelector('#biografia')
    const inputEmail = document.querySelector('#email')
    const inputSenha = document.querySelector('#senha')
    const inputDataNasc = document.querySelector('#dataNasc')
    // const inputCep = document.querySelector('#cep')
    const inputFotoPerfil = document.querySelector("#image-profile-preview")
    const inputFotoFundo = document.querySelector("#image-background-preview")

    var data = new FormData();
    data.append('nickname', inputNickname.value);
    data.append('senha', inputSenha.value);
    data.append('email', inputEmail.value)

    if (inputFotoPerfil != undefined || inputFotoPerfil != null) {
        data.append('imagemPerfil', inputFotoPerfil.files);
    }

    if (inputFotoFundo != undefined || inputFotoFundo != null) {
        data.append('imagemFundo', inputFotoFundo.files);
    }
    // data.append('imagemPerfil', inputFotoPerfil.files);
    // data.append('imagemFundo', inputFotoFundo.files);
    data.append('biografia', inputBiografia.value);
    data.append('nome', inputNome.value);
    data.append('dataNasc', inputDataNasc.value);
    // data.append('cep', inputCep.value);

    console.log(inputFotoPerfil.files)

    var config = {
        method: 'put',
        url: 'http://localhost:4000/perfil/editarPerfilUsuarioComum/46',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: data
    }

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        })

}


async function editarPerfil(perfil) {
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

async function editarPerfilEndereco(perfil, idEndereco) {
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