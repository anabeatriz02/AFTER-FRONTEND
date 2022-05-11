async function getContent() {
    try {

        const response = await fetch('http://localhost:4000/imagensEvento/listarImagensIdEvento/64')

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
		output += `<div class="item-photo"><img src="http://localhost:4000/${imagem.imagem}" /></div>`;
	}

    console.log(output)
    return output

	// document.querySelector("#imagensCarousel").innerHTML = output
}