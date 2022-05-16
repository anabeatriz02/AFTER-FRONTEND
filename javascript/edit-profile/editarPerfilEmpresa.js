const btn = document.querySelector('#editar')

async function getContent() {
    try {

        const response = await fetch('http://localhost:4000/empresa/acharEmpresaPorId/1')

        console.log(response)

        const data = await response.json()

        console.log(data)

        mostrarDadosPerfil(data)

        btn.addEventListener('click', () => {

            const perfil = editarPerfilUsuarioComum(data[0].tblPerfilIdPerfil)
        
        })
               

    } catch (error) {

        console.error(error)

    }

}

getContent()

function mostrarDadosPerfil(perfis) {

    const inputNickname = document.querySelector('#nickname')
    inputNickname.value = perfis[0].tblPerfil.nickname

    const inputBiografia = document.querySelector('#biografia')
    inputBiografia.value = perfis[0].tblPerfil.biografia

    const inputEmail = document.querySelector('#email')
    inputEmail.value = perfis[0].tblPerfil.email

    const inputSenha = document.querySelector('#senha')
    inputSenha.value = perfis[0].tblPerfil.senha

    const inputCnpj = document.querySelector('#cnpj')
    inputCnpj.value = perfis[0].cnpj

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


function editarPerfilUsuarioComum(idPerfil) {
    const inputNickname = document.querySelector('#nickname')
    const inputBiografia = document.querySelector('#biografia')
    const inputEmail = document.querySelector('#email')
    const inputSenha = document.querySelector('#senha')
    const inputFotoPerfil = document.querySelector("#input-profile-file")
    const inputFotoFundo = document.querySelector("#input-background-file")
    const inputCnpj = document.querySelector('#cnpj')

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
    data.append('cnpj', inputCnpj.value)

    var config = {
        method: 'put',
        url: `http://localhost:4000/perfil/editarPerfilEmpresa/${idPerfil}`,
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
