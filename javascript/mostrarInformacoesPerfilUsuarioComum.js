async function getContent(){
    try {

        //Empresa com biografia: 3
        //Empresa sem biografia: 7
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

function mostrarNickname(user){

    output = `<h1 id="nickname">${user.nickname}</h1>`

    document.querySelector('#nickname').innerHTML = output

}

function mostrarBiografia(user){

    if (user.biografia != null) {

        output = `${user.biografia}`

    } else {

        output = "Olá! Estou usando o After!"

    }

    document.querySelector('#biografia').innerHTML = output
    
}