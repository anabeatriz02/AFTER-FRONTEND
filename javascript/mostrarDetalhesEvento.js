async function getContent(){
    try {

        const response = await fetch('http://localhost:4000/evento/acharEventoIdEvento/2')

        console.log(response)

        const data = await response.json()

        console.log(data)

        mostrarDetalhes(data)

    } catch (error) {

        console.error(error)

    }
   
}

getContent()

function mostrarDetalhes(evento){

    //Mostrar título e celebridade
    titulo = `${evento.titulo}<span>com</span><a href="">${evento.tblIntermEventoCelebridades[0].tblCelebridade.tblVerificacaoUsuario.nickname}<img src="../img/icon-check.svg" /></a>`

    document.querySelector("#tituloAutor").innerHTML = titulo

    //Mostrar hora de início e hora de término
    duracao = `Sexta às ${evento.horaInicio} e ${evento.horaFim}`

    document.querySelector("#horarioEvento").innerHTML = duracao


    //Mostrar data do evento
    dataEvento = `${evento.dataInicio} a ${evento.dataFim}`

    document.querySelector("#dataEvento").innerHTML = dataEvento

    //Mostrar endereço do evento
    endereco = `${evento.tblEnderecoEventos[0].logradouro} - ${evento.tblEnderecoEventos[0].bairro}, ${evento.tblEnderecoEventos[0].cidade} - ${evento.tblEnderecoEventos[0].estado} - ${evento.tblEnderecoEventos[0].complemento}`

    document.querySelector("#enderecoEvento").innerHTML = endereco

    //Mostrar autor da publicação
    autorDescricao = `DESCRIÇÃO DO EVENTO<span>by</span><a href="">${evento.tblEmpresa.tblPerfil.nickname} <img src="../img/icon-check.svg" alt="" /></a>`

    document.querySelector("#descricaoTitulo").innerHTML = autorDescricao

    //Mostrar descrição
    descricaoEvento = `<p>${evento.descricao}</p>`

    document.querySelector("#descricaoEvento").innerHTML = descricaoEvento

}