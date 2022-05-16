async function getContent() {
    try {

        const response = await fetch('http://localhost:4000/perfil/acharPerfil/5')

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

    output = `<h1 id="nickname">${empresa.nickname}<img src="../img/icon-check.svg"/></h1>`

    document.querySelector('#nickname').innerHTML = output

}

function mostrarBiografia(empresa) {

    if (empresa.biografia != null) {

        output = `${empresa.biografia}`

    } else {

        output = "Olá! Estou usando o After!"

    }

    document.querySelector('#biografia').innerHTML = output

}

function mostrarFotos(company) {

    if (company.imagemPerfil == null) {
        fotoPerfil = `<img class="profile-file" src="http://localhost:4000/uploads/fundoRoxo.jpg" id="image-profile-preview" />`
    } else {
        fotoPerfil = `<img class="profile-file" src="http://localhost:4000/${company.imagemPerfil}" id="image-profile-preview" />`
    }

    document.querySelector('#fotoPerfil').innerHTML = fotoPerfil


    if (company.imagemFundo == null) {
        fotoFundo = `<img class="background-file" src="http://localhost:4000/uploads/wallpaperRoxo.jpg" id="image-background-preview" />`
    } else {
        fotoFundo = `<img class="background-file" src="http://localhost:4000/${company.imagemFundo}" id="image-background-preview" />`

    }

    document.querySelector('#fotoFundo').innerHTML = fotoFundo
}

async function getEventosAtivos() {
    try {

        const response = await fetch('http://localhost:4000/evento/acharEventoPorId/1')

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

        if(evento.tblIntermEventoCelebridades[0] == undefined || evento.tblIntermEventoCelebridades[0].tblCelebridade == null){ 
            celebridade = `<label class="upper" for=""></label>`
        } else {
            celebridade = `
            <label class="upper" for="">${evento.tblIntermEventoCelebridades[0].tblCelebridade.tblVerificacaoUsuario.nickname}</label>
            <label for="">atrações principais</label>`
        }

        if(evento.tblEmpresa.tblPerfil.imagemPerfil != null){
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