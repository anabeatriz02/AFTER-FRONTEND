async function getContent() {
    try {

        const response = await fetch('http://localhost:4000/perfil/acharPerfil/2')

        console.log(response)

        const data = await response.json()

        console.log(data)

        mostrarNickname(data)
        mostrarBiografia(data)
        // document.getElementById('perfil').innerHTML = data

    } catch (error) {

        console.error(error)

    }

}

getContent()

function mostrarNickname(perfis) {

    output = `${perfis.nickname}`

    document.querySelector('#nickname').innerHTML = output

}

function mostrarBiografia(perfis) {

    if (perfis.biografia != null) {

        output = `${perfis.biografia}`

    } else {

        output = "Olá! Estou usando o After!"

    }

    document.querySelector('#biografia').innerHTML = output
    
}