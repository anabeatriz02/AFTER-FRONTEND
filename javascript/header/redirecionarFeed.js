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

    if(data[0].tblEmpresas[0] != undefined){
        var logo = document.querySelector('.logo')
        //Redirecionar para o feed de empresa
        logo.href = "../pages/feed.html"
    } else {
        var logo = document.querySelector('.logo')
        //Redirecionar para o feed de usuário
        logo.hfer = "../pages/feed-user.html"
    }

}

getPerfil()
