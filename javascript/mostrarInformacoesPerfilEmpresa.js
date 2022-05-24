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

        if(data[0].tblUsuarioComums[0] != undefined){

            var selo = document.querySelector("#seloVerificado")

            selo.style.display = "none"

            document.querySelector(".followers").style.display = "none"

            document.querySelector('#eventosFuturos').style.display = "none"
            document.querySelector('#event-like').style.display = "block"

            getEventosCurtidos(data)

            document.querySelector('.future-events').style.display = "none"
            document.querySelector('#event-gone').style.display = "block"

        } else {

            getEventosAtivos(data)

        }

    } catch (error) {

        console.error(error)

    }

}

getContent()

function mostrarNickname(perfil) {

    output = `<h1 id="nickname">${perfil[0].nickname}<img id="seloVerificado" src="../img/icon-check.svg"/></h1>`

    document.querySelector('#nickname').innerHTML = output

}

function mostrarBiografia(perfil) {

    if (perfil[0].biografia != null && perfil[0].biografia != "") {

        output = `${perfil[0].biografia}`

    } else {

        output = "Olá! Estou usando o After!"

    }

    document.querySelector('#biografia').innerHTML = output

}

function mostrarFotos(perfil) {

    if (perfil[0].imagemPerfil == null) {
        fotoPerfil = `<img class="profile-file" src="http://localhost:4000/uploads/fundoRoxo.jpg" id="image-profile-preview" />`
    } else {
        fotoPerfil = `<img class="profile-file" src="http://localhost:4000/${perfil[0].imagemPerfil}" id="image-profile-preview" />`
    }

    document.querySelector('#fotoPerfil').innerHTML = fotoPerfil


    if (perfil[0].imagemFundo == null) {
        fotoFundo = `<img class="background-file" src="http://localhost:4000/uploads/wallpaperRoxo.jpg" id="image-background-preview" />`
    } else {
        fotoFundo = `<img class="background-file" src="http://localhost:4000/${perfil[0].imagemFundo}" id="image-background-preview" />`

    }

    document.querySelector('#fotoFundo').innerHTML = fotoFundo
}

async function getEventosAtivos(empresa) {
    try {

        const response = await fetch(`http://localhost:4000/evento/acharEventoPorId/${empresa[0].tblEmpresas.idEmpresa}`)

        console.log(response)

        const data = await response.json()

        console.log(data)

        mostrarEventosAtivos(data)

    } catch (error) {

        console.error(error)

    }
}

// getEventosAtivos()

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

async function getEventosCurtidos(perfil) {
    try {

        const response = await fetch(`http://localhost:4000/interacao/listarCurtidasPorIdPerfil/${perfil[0].idPerfil}`)

        console.log(response)

        const data = await response.json()

        console.log(data)

        mostrarEventosCurtidos(data)

    } catch (error) {

        console.error(error)

    }
}

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

    document.querySelector('#eventosAtivos').innerHTML = output

    const numeroEvento = `${curtidas.length}`
    document.querySelector("#numeroEventosAtivos").innerHTML = numeroEvento

}