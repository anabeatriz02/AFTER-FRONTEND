async function getContent(){
    try {

        const response = await fetch('http://localhost:4000/perfil/acharPerfil/1')

        console.log(response)

        const data = await response.json()

        console.log(data)

        mostrarNickname(data)
        mostrarBiografia(data)

    } catch (error) {

        console.error(error)

    }
   
}

getContent()

function mostrarNickname(empresa){

    output = `${empresa.nickname}`

    document.querySelector('#nickname').innerHTML = output

}

function mostrarBiografia(empresa){

    if (empresa.biografia != null) {

        output = `${empresa.biografia}`

    } else {

        output = "Olá! Estou usando o After!"

    }

    document.querySelector('#biografia').innerHTML = output
    
}