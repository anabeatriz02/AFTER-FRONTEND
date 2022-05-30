const btn = document.querySelector('#editar')

async function getContent() {
    try {

        var myHeaders = new Headers();

        myHeaders.append("Authorization", localStorage.getItem("token"))

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        //Acessando rota de listagem de informações do perfil logado
        const responsePerfil = await fetch(`http://localhost:4000/perfil/acharPerfilLogado`, requestOptions)

        const dataPerfil = await responsePerfil.json()

        console.log(dataPerfil)

        const response = await fetch(`http://localhost:4000/usuarioComum/acharPerfilUsuario/${dataPerfil[0].tblUsuarios[0].idPerfil}`)

        console.log(response)

        const data = await response.json()

        console.log(data)

        mostrarDadosPerfil(data)

        btn.addEventListener('click', () => {

            editarPerfilUsuarioComum(data[0].tblPerfilIdPerfil)
            editarPerfilEndereco(data[0].tblEnderecos[0].idEndereco)
        
        })

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

    const inputEstado = document.querySelector('#estado')
    inputEstado.value = perfis[0].tblEnderecos[0].estado

    const inputCidade = document.querySelector('#cidade')
    inputCidade.value = perfis[0].tblEnderecos[0].cidade

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

}

// btn.addEventListener('click', () => {

//     const perfil = editarPerfilUsuarioComum()

// })

function editarPerfilUsuarioComum(idPerfil) {
    const inputNome = document.querySelector('#nome')
    const inputNickname = document.querySelector('#nickname')
    const inputBiografia = document.querySelector('#biografia')
    const inputEmail = document.querySelector('#email')
    const inputSenha = document.querySelector('#senha')
    const inputDataNasc = document.querySelector('#dataNasc')
    const inputFotoPerfil = document.querySelector("#input-profile-file")
    const inputFotoFundo = document.querySelector("#input-background-file")

    var data = new FormData();
    data.append('nickname', inputNickname.value);
    data.append('senha', inputSenha.value);
    data.append('email', inputEmail.value)

    if (inputFotoPerfil != undefined || inputFotoPerfil != null) {
        data.append('imagemPerfil', inputFotoPerfil.files[0]);
    }

    if (inputFotoFundo != undefined || inputFotoFundo != null) {
        data.append('imagemFundo', inputFotoFundo.files[0]);
    }
    data.append('biografia', inputBiografia.value);
    data.append('nome', inputNome.value);
    data.append('dataNasc', inputDataNasc.value);

    var config = {
        method: 'put',
        url: `http://localhost:4000/perfil/editarPerfilUsuarioComum/${idPerfil}`,
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

function editarPerfilEndereco(idEndereco) {

    const inputCep = document.querySelector('#cep')
    const inputEstado = document.querySelector('#estado')
    const inputCidade = document.querySelector('#cidade')

    var data = JSON.stringify({
        "cep": inputCep.value,
        "estado": inputEstado.value,
        "cidade": inputCidade.value
    });

    var config = {
        method: 'put',
        url: `http://localhost:4000/endereco/editarEndereco/${idEndereco}`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

}