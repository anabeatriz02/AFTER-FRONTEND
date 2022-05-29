const inputPesquisa = document.querySelector('#inputPesquisa')
const formPesquisarEventos = document.getElementById("formPesquisarEventos")

formPesquisarEventos.addEventListener("submit", function (e) {

    e.preventDefault()

    var data = JSON.stringify({
        "titulo": inputPesquisa.value
    });

    var config = {
        method: 'post',
        url: 'http://localhost:4000/pesquisar/pesquisarEvento',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            mostrarEventosPesquisados(response.data)
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

    window.location.replace("#eventFeed")

})

function mostrarEventosPesquisados(eventos) {
    let output = ''

    if (eventos.length != 0) {


        for (let evento of eventos) {

            if (evento.tblIntermEventoCelebridades[0] == undefined || evento.tblIntermEventoCelebridades[0].tblCelebridade == null) {
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

            if (evento.tblEmpresa.tblPerfil.imagemPerfil != null) {
                imgPerfil = `<a href=""><img src="http://localhost:4000/${evento.tblEmpresa.tblPerfil.imagemPerfil}" /></a>`
            } else {
                imgPerfil = `<a href=""><img src="http://localhost:4000/uploads/fundoRoxo.jpg" /></a>`
            }

            output += `
       
        <div class="event-box">
        <div class="event-box-information">
            <img class="background-photo-event" src="http://localhost:4000/${evento.capa}" />

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
    } else {

        output = `<h1 id="aviso">Nenhum evento encontrado :( </h1>`

        document.querySelector('#eventosFeed').innerHTML = output

    }
}