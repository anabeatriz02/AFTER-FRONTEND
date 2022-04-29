async function getContent(){
    try {

        //Empresa com biografia: 3
        //Empresa sem biografia: 7
        const response = await fetch('http://localhost:4000/perfil/acharPerfil/3')

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

    output = `<h1 id="nickname">${empresa.nickname}<img src="../img/icon-check.svg"/></h1>`

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