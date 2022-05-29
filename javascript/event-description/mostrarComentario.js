async function getComentarios(idEvento) {
    try {

        const response = await fetch(`http://localhost:4000/comentario/listarComentarioPorIdEvento/${idEvento}`)

        console.log(response)

        const data = await response.json()

        console.log(data)

        mostrarComentarios(data)

    } catch (error) {

        console.error(error)

    }

}

function mostrarComentarios(comentarios) {
    let output = ''

    for (let comentario of comentarios) {

        var imgPerfil

        if (comentario.tblPerfil.imagemPerfil != null) {
            imgPerfil = `<img src="http://localhost:4000/${comentario.tblPerfil.imagemPerfil}" alt="" />`
        } else {
            imgPerfil = `<img src="http://localhost:4000/uploads/fundoRoxo.jpg" alt="" />`
        }

        output += `
        <div class="view-comment-box">
        <div class="image-user">
            ${imgPerfil}
        </div>
        <div class="information-user">
            <p>${comentario.tblPerfil.nickname}</p>
            <p class="comment">${comentario.texto}</p>
            <div>
                <p>1 hora atrás</p>
                <p>like</p>
                <p>responder</p>
            </div>
        </div>
    </div>
    `
    }

    document.querySelector('.view-comment-area').innerHTML = output

}