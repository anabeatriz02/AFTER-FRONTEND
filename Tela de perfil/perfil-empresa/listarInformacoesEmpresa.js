async function getContent(){
    try {

        const response = await fetch('http://localhost:4000/perfil/acharPerfil/7')

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

function mostrarNickname(empresa){

    output = `${empresa.nickname}`

    document.querySelector('#nickname').innerHTML = output

}

function mostrarBiografia(empresa){
    output = `${empresa.email}`

    document.querySelector('#biografia').innerHTML = output
}