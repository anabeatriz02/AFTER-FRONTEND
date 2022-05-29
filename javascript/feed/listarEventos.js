async function getContent() {
    try {

        const response = await fetch('http://localhost:4000/evento/listarEvento')

        console.log(response)

        const data = await response.json()

        console.log(data)

        mostrarEventos(data)

    } catch (error) {

        console.error(error)

    }

}

getContent()

function mostrarEventos(eventos) {
    let output = ''
    for (let evento of eventos) {

        if(evento.tblIntermEventoCelebridades[0] == undefined || evento.tblIntermEventoCelebridades[0].tblCelebridade == null){ 
            celebridade = `<label class="upper" for=""></label>`
            imgCelebridade = `<div class="box-people"></div>`
        } else {
            imgCelebridade = `<div class="box-people">
            <a href=""><img src="http://localhost:4000/${evento.tblIntermEventoCelebridades[0].tblCelebridade.tblVerificacaoUsuario.tblUsuarioComum.tblPerfil.imagemPerfil}" alt="" /></a>
        </div>`
            celebridade = `
            <label class="upper" for="">${evento.tblIntermEventoCelebridades[0].tblCelebridade.tblVerificacaoUsuario.nickname}</label>
            <label for="">atrações principais</label>`
        }

        if(evento.tblEmpresa.tblPerfil.imagemPerfil != null){
            imgPerfil = `<a href=""><img src="http://localhost:4000/${evento.tblEmpresa.tblPerfil.imagemPerfil}" /></a>`
        } else {
            imgPerfil = `<a href=""><img src="http://localhost:4000/uploads/fundoRoxo.jpg" /></a>`
        }

        output += `
       
        <div class="event-box">
        <div class="event-box-information">
            <img class="background-photo-event" onClick="redirecionarDescricao(${evento.idEvento})" src="http://localhost:4000/${evento.capa}" />

            <div class="user-information">
                ${imgPerfil}
                <div class="user-information-name">
                    <label for="" id="titulo">${evento.titulo}</label>
                    <label class="categoria">${evento.tblCategorium.nomeCategoria}</label>
                </div>
            </div>

            ${imgCelebridade}

            <div class="box-title">
                ${celebridade}
            </div>

            <div class="box-like">
                <a href="#" class="like-button">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
    </div>
    `
    }

    document.querySelector('#eventosFeed').innerHTML = output
}

function mostrarAviso(){

    const output = "<h2 id='aviso'>Você ainda não possui eventos ativos :( </h2>"

    document.querySelector('.event-area').innerHTML = output

}

function redirecionarDescricao(idEvento){
    location.href = "../../pages/event-description.html?idEvento=" + idEvento
}