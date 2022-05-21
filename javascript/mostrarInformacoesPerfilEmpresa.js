async function getContent() {
    try {

        var myHeaders = new Headers();

        myHeaders.append("Authorization", localStorage.getItem("token"))

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch(`http://localhost:4000/perfil/acharPerfilLogado`, requestOptions)  

        console.log(response)

        const data = await response.json()

        console.log(data)

        mostrarNickname(data)
        mostrarBiografia(data)
        mostrarFotos(data)

    } catch (error) {

        console.error(error)

    }

}

getContent()

function mostrarNickname(empresa) {

    output = `<h1 id="nickname">${empresa[0].nickname}<img src="../img/icon-check.svg"/></h1>`

    document.querySelector('#nickname').innerHTML = output

}

function mostrarBiografia(empresa) {

    if (empresa[0].biografia != null) {

        output = `${empresa[0].biografia}`

    } else {

        output = "Olá! Estou usando o After!"

    }

    document.querySelector('#biografia').innerHTML = output

}

function mostrarFotos(company) {

    if (company[0].imagemPerfil == null) {
        fotoPerfil = `<img class="profile-file" src="http://localhost:4000/uploads/fundoRoxo.jpg" id="image-profile-preview" />`
    } else {
        fotoPerfil = `<img class="profile-file" src="http://localhost:4000/${company[0].imagemPerfil}" id="image-profile-preview" />`
    }

    document.querySelector('#fotoPerfil').innerHTML = fotoPerfil


    if (company[0].imagemFundo == null) {
        fotoFundo = `<img class="background-file" src="http://localhost:4000/uploads/wallpaperRoxo.jpg" id="image-background-preview" />`
    } else {
        fotoFundo = `<img class="background-file" src="http://localhost:4000/${company[0].imagemFundo}" id="image-background-preview" />`

    }

    document.querySelector('#fotoFundo').innerHTML = fotoFundo
}

async function getEventosAtivos() {
    try {

        const response = await fetch('http://localhost:4000/evento/acharEventoPorId/8')

        console.log(response)

        const data = await response.json()

        console.log(data)

        mostrarEventosAtivos(data)

    } catch (error) {

        console.error(error)

    }
}

getEventosAtivos()

function mostrarEventosAtivos(eventos) {

    let output = ''
    for (let evento of eventos) {

        if (evento.tblIntermEventoCelebridades[0] == undefined || evento.tblIntermEventoCelebridades[0].tblCelebridade == null) {
            celebridade = `<label class="upper" for=""></label>`
        } else {
            celebridade = `
            <label class="upper" for="">${evento.tblIntermEventoCelebridades[0].tblCelebridade.tblVerificacaoUsuario.nickname}</label>
            <label for="">atrações principais</label>`
        }

        if (evento.tblEmpresa.tblPerfil.imagemPerfil != null) {
            imgPerfil = `<a href=""><img src="http://localhost:4000/${evento.tblEmpresa.tblPerfil.imagemPerfil}" /></a>`
        } else {
            imgPerfil = `<a href=""><img src="http://localhost:4000/uploads/fundoRoxo.jpg" /></a>`
        }

        output += `<div class="event-box-old">
        <div class="event-box-information-old">

            <img class="background-photo-event-old" src="http://localhost:4000/${evento.capa}" />

            <div class="user-information-old">
                ${imgPerfil}
                <div class="user-information-name-old">
                    <label for="" id="titulo-old">${evento.titulo}</label>
                    <label for="" id="categoria-old">${evento.tblEmpresa.tblPerfil.nickname}</label>
                </div>
            </div>

            <div class="box-title-old">
                ${celebridade}
            </div>

        </div>
    </div>`
    }

    document.querySelector("#eventosAtivos").innerHTML = output

    const numeroEvento = `${eventos.length}`
    document.querySelector("#numeroEventosAtivos").innerHTML = numeroEvento

}