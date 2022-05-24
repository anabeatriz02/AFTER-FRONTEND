async function getContent() {
    try {

        const response = await fetch('http://localhost:4000/imagensEvento/listarImagensIdEvento/79')

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

	const containerImagens = document.querySelector("#imagens");

    let output = [];

	for (let imagem of imagens) {
        const div = document.createElement('div');
        div.className = 'item-photo';

        const img = document.createElement('img');
        img.src = `http://localhost:4000/${imagem.imagem}`;

        div.appendChild(img)

        containerImagens.appendChild(div)

		// output += `<div class="item-photo" id="imgTeste4"><img src="http://localhost:4000/${imagem.imagem}" /></div>`;
	}

    mostrarCarrossel();
}