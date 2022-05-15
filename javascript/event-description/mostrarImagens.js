async function getContent() {
    try {

        const response = await fetch('http://localhost:4000/imagensEvento/listarImagensIdEvento/28')

        console.log(response)

        const data = await response.json()

        console.log(data)

        mostrarImagens(data)

    } catch (error) {

        console.error(error)

    }

}

getContent()

function mostrarImagens(imagens){
    let output = "";

	for (let imagem of imagens) {
		output += `<img src="http://localhost:4000/${imagem.imagem}" />`;
	}

    // return output

	// document.querySelector("#imagens").innerHTML = output
}