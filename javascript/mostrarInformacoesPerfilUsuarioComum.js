async function getContent() {
    try {

        const response = await fetch('http://localhost:4000/perfil/acharPerfil/6')

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

function mostrarNickname(user) {

    output = `<h1 id="nickname">${user.nickname}</h1>`

    document.querySelector('#nickname').innerHTML = output

}

function mostrarBiografia(user) {

    if (user.biografia != null) {

        output = `${user.biografia}`

    } else {

        output = "Olá! Estou usando o After!"

    }

    document.querySelector('#biografia').innerHTML = output

}

function mostrarFotos(user) {

    if (user.imagemPerfil == null) {
        fotoPerfil = `<img class="profile-file" src="http://localhost:4000/uploads/fundoRoxo.jpg" id="image-profile-preview" />`
    } else {
        fotoPerfil = `<img class="profile-file" src="http://localhost:4000/${user.imagemPerfil}" id="image-profile-preview" />`
    }

    document.querySelector('#fotoPerfil').innerHTML = fotoPerfil


    if (user.imagemFundo == null) {
        fotoFundo = `<img class="background-file" src="http://localhost:4000/uploads/wallpaperRoxo.jpg" id="image-background-preview" />`
    } else {
        fotoFundo = `<img class="background-file" src="http://localhost:4000/${user.imagemFundo}" id="image-background-preview" />`

    }

    document.querySelector('#fotoFundo').innerHTML = fotoFundo
}

async function getEventosCurtidos() {
    try {

        const response = await fetch('http://localhost:4000/interacao/listarCurtidasPorIdPerfil/6')

        console.log(response)

        const data = await response.json()

        console.log(data)

        mostrarEventosCurtidos(data)

    } catch (error) {

        console.error(error)

    }
}

getEventosCurtidos()

function mostrarEventosCurtidos(curtidas) {

    let output = ''

    for (let curtida of curtidas) {

        if(curtida.tblEvento.tblIntermEventoCelebridades[0] == undefined || curtida.tblEvento.tblIntermEventoCelebridades[0].tblCelebridade == null){ 
            celebridade = `<label class="upper" for=""></label>`
        } else {
            celebridade = `
            <label class="upper" for="">${curtida.tblEvento.tblIntermEventoCelebridades[0].tblCelebridade.tblVerificacaoUsuario.nickname}</label>
            <label for="">atrações principais</label>`
        }

        if(curtida.tblEvento.tblEmpresa.tblPerfil.imagemPerfil != null){
            imgPerfil = `<a href=""><img src="http://localhost:4000/${curtida.tblEvento.tblEmpresa.tblPerfil.imagemPerfil}" /></a>`
        } else {
            imgPerfil = `<a href=""><img src="http://localhost:4000/uploads/fundoRoxo.jpg" /></a>`
        }

        output += `<div class="event-box">
        <div class="event-box-information">
            <img class="background-photo-event" src="http://localhost:4000/${curtida.tblEvento.capa}" />
    
            <div class="user-information">
                ${imgPerfil}
                <div class="user-information-name">
                    <label for="" id="titulo">${curtida.tblEvento.titulo}</label>
                    <label for="" id="categoria">${curtida.tblEvento.tblCategorium.nomeCategoria}</label>
                </div>
            </div>
    
            <div class="box-title">
                ${celebridade}
            </div>
    
        </div>
    </div>`
    }

    document.querySelector('#eventosCurtidos').innerHTML = output

    const numeroEvento = `${curtidas.length}`
    document.querySelector("#numeroEventosCurtidos").innerHTML = numeroEvento

}