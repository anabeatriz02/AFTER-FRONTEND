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