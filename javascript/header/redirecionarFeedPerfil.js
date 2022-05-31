async function getPerfil() {
	var myHeaders = new Headers();

	myHeaders.append("Authorization", localStorage.getItem("token"))

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};

	const response = await fetch(`http://localhost:4000/perfil/acharPerfilLogado`, requestOptions)  

	const data = await response.json()

	console.log(data)

	//Botão da tela de descrição de perfil
	var btnVoltar = document.querySelector('#btnVoltar')

    if(data[0].tblEmpresas[0] != undefined){
		//Redirecionamento de tela de descrição de perfil
		btnVoltar.href = "../pages/feed.html"
 
    } else {
		//Redirecionamento de tela de descrição de perfil
		btnVoltar.href = "../pages/feed-user.html"
    }

}

getPerfil()
