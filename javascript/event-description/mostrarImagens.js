//Pegando o id de evento pela url

let urlSplit = window.location.href.split(["?"]) 
var idEvento = urlSplit[1].split(["="])[1]

async function getContent() {
    try {

        const response = await fetch(`http://localhost:4000/imagensEvento/listarImagensIdEvento/${idEvento}`)

        console.log(response)

        const data = await response.json()

        console.log(data)

        mostrarImagens(data)

    } catch (error) {

        console.error(error)

    }

}

getContent()

async function mostrarImagens(imagens){

	const containerImagens = document.querySelector("#imagens");

    let output = [];

    if(imagens.length != 0){
        for (let imagem of imagens) {
            const div = document.createElement('div');
            div.className = 'item-photo';
    
            const img = document.createElement('img');
            img.src = `http://localhost:4000/${imagem.imagem}`;
    
            div.appendChild(img)
    
            containerImagens.appendChild(div)
    
            // output += `<div class="item-photo" id="imgTeste4"><img src="http://localhost:4000/${imagem.imagem}" /></div>`;
        }

        mostrarCarrossel()

    }  
    else {
        const response = await fetch(`http://localhost:4000/evento/acharEventoIdEvento/${idEvento}`)

        // console.log(response)

        const data = await response.json()

        // console.log(data)

        // for (let imagem of data) {
            const div = document.createElement('div');
            div.className = 'item-photo';
    
            const img = document.createElement('img');
            img.src = `http://localhost:4000/${data[0].capa}`;
    
            div.appendChild(img)
    
            containerImagens.appendChild(div)

            // const divTeste = document.createElement('div');
            // divTeste.className = 'item-photo';
    
            // const imgTeste = document.createElement('img');
            // imgTeste.src = `http://localhost:4000/uploads/fundoRoxo.jpg`;
    
            // divTeste.appendChild(imgTeste)
    
            // containerImagens.appendChild(divTeste)
    
            // output += `<div class="item-photo" id="imgTeste4"><img src="http://localhost:4000/${imagem.imagem}" /></div>`;
        // }

        mostrarCarrossel();
    }


    // mostrarCarrossel();
  
}