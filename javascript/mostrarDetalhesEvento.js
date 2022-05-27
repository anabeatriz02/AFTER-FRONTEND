async function getPerfil() {
	var myHeaders = new Headers();

	myHeaders.append("Authorization", localStorage.getItem("token"))

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};

	const response = await fetch(`http://localhost:4000/perfil/acharPerfilLogado`, requestOptions)  

	// console.log(response)

	const data = await response.json()

	console.log(data)

    // var imgPerfil = document.querySelector('.dropdown_button')

    // console.log(imgPerfil)

    // if(data[0].imagemPerfil != null){
    //     imgPerfil.innerHTML = `<img src="http://localhost:4000/${data[0].imagemPerfil}" alt="" />`
    // } else {
    //     imgPerfil.innerHTML = `<img src="http://localhost:4000/uploads/fundoRoxo.jpg" alt="" />`
    // }

}

getPerfil()

async function getContent() {
    try {

        var myHeaders = new Headers();

        myHeaders.append("Authorization", localStorage.getItem("token"))

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        
        const response = await fetch('http://localhost:4000/evento/listarEventoIdEvento/88', requestOptions)

        console.log(response)

        const data = await response.json()

        console.log(data)

        mostrarDetalhes(data)

    } catch (error) {

        console.error(error)

    }

}

getContent()

function mostrarDetalhes(evento) {

    //Mostrar título e celebridade
    if (evento.tblIntermEventoCelebridades[0] == undefined || evento.tblIntermEventoCelebridades[0].tblCelebridade == null) {
        titulo = `${evento.titulo}`
    } else {
        titulo = `${evento.titulo}<span>com</span><a href="">${evento.tblIntermEventoCelebridades[0].tblCelebridade.tblVerificacaoUsuario.nickname}<img src="../img/icon-check.svg" /></a>`
    }

    document.querySelector("#tituloAutor").innerHTML = titulo

    //Mostrar hora de início e hora de término
    function formatHour(input) {
        var hourPart = input.match(/\d+/g),
            minuto = hourPart[1],
            hora = hourPart[0];
        return hora + 'h' + minuto;
    }

    if (evento.horaFim == evento.horaInicio) {
        duracao = `Às ${formatHour(evento.horaInicio)}`
    } else {
        duracao = `De ${formatHour(evento.horaInicio)} a ${formatHour(evento.horaFim)}`
    }

    document.querySelector("#horarioEvento").innerHTML = duracao

    //Mostrar data do evento

    function formatDate(input) {
        var datePart = input.match(/\d+/g),
            year = datePart[0].substring(0),
            month = datePart[1],
            day = datePart[2];

        if (month == 1) {
            month = "janeiro"
        } else if (month == 2) {
            month = "fevereiro"
        } else if (month == 3) {
            month = "março"
        } else if (month == 4) {
            month = "abril"
        } else if (month == 5) {
            month = "maio"
        } else if (month == 6) {
            month = "junho"
        } else if (month == 7) {
            month = "julho"
        } else if (month == 8) {
            month = "agosto"
        } else if (month == 9) {
            month = "setembro"
        } else if (month == 10) {
            month = "outubro"
        } else if (month == 11) {
            month = "novembro"
        } else if (month == 12) {
            month = "dezembro"
        }

        // return day + '/' + month + '/' + year;
        return day + ' de ' + month + ' de ' + year;
    }

    if (evento.dataFim == evento.dataInicio) {
        dataEvento = `${formatDate(evento.dataInicio)}`
    } else {
        dataEvento = `${formatDate(evento.dataInicio)} a ${formatDate(evento.dataFim)}`
    }


    document.querySelector("#dataEvento").innerHTML = dataEvento

    //Mostrar endereço do evento

    if (evento.tblEnderecoEventos[0].complemento == null || evento.tblEnderecoEventos[0].complemento == "") {

        //Verificação para se tiver o campo de "número" em endereço

        if (evento.tblEnderecoEventos[0].numero != null || evento.tblEnderecoEventos[0].numero != "") {
            endereco = `${evento.tblEnderecoEventos[0].logradouro}, ${evento.tblEnderecoEventos[0].numero} - ${evento.tblEnderecoEventos[0].bairro}, ${evento.tblEnderecoEventos[0].cidade} - ${evento.tblEnderecoEventos[0].estado}`
        } else {
            endereco = `${evento.tblEnderecoEventos[0].logradouro} - ${evento.tblEnderecoEventos[0].bairro}, ${evento.tblEnderecoEventos[0].cidade} - ${evento.tblEnderecoEventos[0].estado}`
        }


    } else {

        //Verificação para se tiver o campo de "número" em endereço

        if (evento.tblEnderecoEventos[0].numero != null || evento.tblEnderecoEventos[0].numero != "") {
            endereco = `${evento.tblEnderecoEventos[0].logradouro}, ${evento.tblEnderecoEventos[0].numero} - ${evento.tblEnderecoEventos[0].bairro}, ${evento.tblEnderecoEventos[0].cidade} - ${evento.tblEnderecoEventos[0].estado} - ${evento.tblEnderecoEventos[0].complemento}`
        } else {
            endereco = `${evento.tblEnderecoEventos[0].logradouro} - ${evento.tblEnderecoEventos[0].bairro}, ${evento.tblEnderecoEventos[0].cidade} - ${evento.tblEnderecoEventos[0].estado} - ${evento.tblEnderecoEventos[0].complemento}`
        }

    }

    document.querySelector("#enderecoEvento").innerHTML = endereco

    if (evento.tblLotes[0] == undefined || evento.tblLotes[0].tblVariedadeIngressoLotes[0] == undefined) {
        aviso = "<p>Esse evento não possui ingressos à venda</p>"

        document.querySelector("#informacoesIngresso").innerHTML = aviso
        document.querySelector("#comprarIngresso").style.display = "none"
    } else {

        if (evento.tblLotes[0] != undefined && evento.tblLotes[0].tblVariedadeIngressoLotes[0] != undefined) {  

            let primeiroValor = evento.tblLotes[0].tblVariedadeIngressoLotes[0].valor
            let primeiroIngresso = parseFloat(primeiroValor)
            let primeiroIngressoValor = primeiroIngresso.toString().replace('.',',')

            valor = `
            <img src="../img/icon-ticket.svg" />
            <p>Com ingressos de R$${primeiroIngressoValor}</p>`

            document.querySelector("#informacoesIngresso").innerHTML = valor
        }

    }

    //Mostrar autor da publicação
    autorDescricao = `DESCRIÇÃO DO EVENTO<span>by</span><a href="">${evento.tblEmpresa.tblPerfil.nickname} <img src="../img/icon-check.svg" alt="" /></a>`

    document.querySelector("#descricaoTitulo").innerHTML = autorDescricao

    //Mostrar descrição
    descricaoEvento = `<p>${evento.descricao}</p>`

    document.querySelector("#descricaoEvento").innerHTML = descricaoEvento

    //Mostrar capa como primeira imagem
    let imagemCapa = `<img src="http://localhost:4000/${evento.capa}"/>`

    // console.log(imagemCapa)

    document.querySelector("#capaImagem").innerHTML = imagemCapa

}