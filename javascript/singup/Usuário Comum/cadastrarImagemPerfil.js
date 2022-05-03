const inputPerfil = document.querySelector('#input-background-file')

function pegarFoto(){
    // inputPerfil.addEventListener('change', ()=> { 
        // const valor = inputPerfil.value
        // const teste = valor.split("\\")
        // console.log(teste[2])
        var teste = inputPerfil.files
        console.log(teste)

        const imagemPerfil = {
            imagemPerfil: teste
        }

        console.log(imagemPerfil)

        return imagemPerfil
    // })
}



