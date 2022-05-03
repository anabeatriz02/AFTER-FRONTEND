const btn = document.querySelector("#salvar");

btn.addEventListener("click", () => {
	const evento = getDadosEvento();

	// enviarEventoParaAPI(evento);

	
});

function getDadosEvento() {
	const inputTitulo = document.querySelector("#titulo");

	const selectCategoria = document.querySelector("#category");
	const categoriaSelecionada = selectCategoria.options[selectCategoria.selectedIndex].value;

	// const selectAssunto = document.querySelector('#topic')
	// const assuntoSelecionado = selectAssunto.options[selectAssunto.selectedIndex].value

	const selectTipoEvento = document.querySelector("#tipoEvento");
	const tipoEventoSelecionado = selectTipoEvento.options[selectTipoEvento.selectedIndex].value;

	const inputDescricao = document.querySelector("#descricao");

	const inputCep = document.querySelector("#cep");
	const inputBairro = document.querySelector("#bairro");
	const inputEstado = document.querySelector("#estado");
	const inputLogradouro = document.querySelector("#logradouro");
	const inputCidade = document.querySelector("#cidade");

	const inputDataInicio = document.querySelector("#dataInicio");
	const inputDataFim = document.querySelector("#dataFim");
	const inputHoraInicio = document.querySelector("#horaInicio");
	const inputHoraFim = document.querySelector("#horaFim");

	const inputCapa = document.querySelector("#input-photo-file");


	if (inputDataFim.value == null || inputDataFim.value == "") {
		dataTermino = inputDataInicio.value;
	} else {
		dataTermino = çcçç.value;
	}

	const formData = new FormData();

	formData.append("titulo", inputTitulo.value);
	formData.append("descricao", inputDescricao.value);
	formData.append("tblCategoriumIdCategoria", categoriaSelecionada);
	formData.append("dataInicio", inputDataInicio.value);
	formData.append("dataFim", dataTermino.value);
	formData.append("horaInicio", inputHoraInicio.value);
	formData.append("horaFim", inputHoraFim.value);
	formData.append("capa", inputCapa.files[0]);
	formData.append("cep", inputCep.value);
	formData.append("logradouro", inputLogradouro.value);
	formData.append("bairro", inputBairro.value);
	formData.append("cidade", inputCidade.value);
	formData.append("estado", inputEstado.value);
	formData.append("tblTipoEventoIdTipoEvento", tipoEventoSelecionado);

	axios.post("http://localhost:4000/evento/cadastrarEventoEndereco/1/", formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});

	// const evento = {
	// 	titulo: inputTitulo.value,
	// 	descricao: inputDescricao.value,
	// 	tblCategoriumIdCategoria: categoriaSelecionada,
	// 	dataInicio: inputDataInicio.value,
	// 	dataFim: dataTermino,
	// 	horaInicio: inputHoraInicio.value,
	// 	horaFim: inputHoraFim.value,
	// 	capa: inputCapa.value,
	// 	cep: inputCep.value,
	// 	logradouro: inputLogradouro.value,
	// 	bairro: inputBairro.value,
	// 	cidade: inputCidade.value,
	// 	estado: inputEstado.value,
	// 	tblTipoEventoIdTipoEvento: tipoEventoSelecionado,
	// };

	// return evento;
}

// btn.addEventListener("click", () => {
// 	const email = emailInput.value;
// 	const password = passwordInput.value;

// 	axios
// 		.post("https://reqres.in/api/login", {
// 			email: email,
// 			password: password,
// 		})
// 		.then((response) => {
// 			console.log(response);
// 		});
// });

// async function enviarEventoParaAPI(evento) {

	
// }

async function pegarCategoria() {
	try {
		const response = await fetch("http://localhost:4000/categoria/listarCategorias");

		const data = await response.json();

		mostrarCategoria(data);
	} catch (error) {
		console.error(error);
	}
}

pegarCategoria();

function mostrarCategoria(categorias) {
	let output = "";

	for (let categoria of categorias) {
		output += `<option value="${categoria.idCategoria}">${categoria.nomeCategoria}</option>`;
	}

	document.querySelector("#categoryOption").innerHTML = output;
}

async function pegarTipoEvento() {
	try {
		const response = await fetch("http://localhost:4000/tipoEvento/listarTipoEvento");

		const data = await response.json();

		mostrarTipoEvento(data);
	} catch (error) {
		console.error(error);
	}
}

pegarTipoEvento();

function mostrarTipoEvento(tiposEvento) {
	let output = "";

	for (let tipoEvento of tiposEvento) {
		output += `<option value="${tipoEvento.idTipoEvento}">${tipoEvento.tipo}</option>`;
	}

	document.querySelector("#tipoEventoOption").innerHTML = output;
}
