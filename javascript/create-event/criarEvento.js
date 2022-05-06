const btn = document.querySelector("#salvar");

// console.log(btn)

btn.addEventListener("click", () => {
	const evento = getDadosEvento();

	console.log(evento)

});

function getDadosEvento() {
	const inputTitulo = document.querySelector("#titulo");

	const selectCategoria = document.querySelector("#category");
	const categoriaSelecionada = selectCategoria.options[selectCategoria.selectedIndex].value;

	// const selectAssunto = document.querySelector('#topic')
	// const assuntoSelecionado = selectAssunto.options[selectAssunto.selectedIndex].value

	const selectTipoEvento = document.querySelector("#tipoEvento");
	const tipoEventoSelecionado = selectTipoEvento.options[selectTipoEvento.selectedIndex].value;

	const selectFaixaEtaria = document.querySelector('#faixaEtaria')
	const faixaEtariaSelecionada = selectFaixaEtaria.options[selectFaixaEtaria.selectedIndex].value;

	const selectContaEmpresa = document.querySelector('#contaEmpresa')
	const contaEmpresaSelecionada = selectContaEmpresa.options[selectContaEmpresa.selectedIndex].value;

	const inputDescricao = document.querySelector("#descricao");

	const inputCep = document.querySelector("#cep");
	const inputBairro = document.querySelector("#bairro");
	const inputEstado = document.querySelector("#estado");
	const inputLogradouro = document.querySelector("#logradouro");
	const inputCidade = document.querySelector("#cidade");
	const inputComplemento = document.querySelector('#complemento')
	const inputNumero = document.querySelector('#numero')

	const inputDataInicio = document.querySelector("#dataInicio");
	const inputDataFim = document.querySelector("#dataFim");
	const inputHoraInicio = document.querySelector("#horaInicio");
	const inputHoraFim = document.querySelector("#horaFim");

	const inputCapa = document.querySelector("#input-photo-file");

	// console.log(inputTitulo.value);
	// console.log(selectCategoria.value);
	// console.log(categoriaSelecionada.value);
	// console.log(selectTipoEvento.value);
	// console.log(tipoEventoSelecionado.value);
	// console.log(inputDescricao.value);
	// console.log(inputCep.value);
	// console.log(inputBairro.value);
	// console.log(inputEstado.value);
	// console.log(inputLogradouro.value);
	// console.log(inputCidade.value);
	// console.log(inputDataFim.value);
	// console.log(inputDataInicio.value);
	// console.log(inputHoraFim.value);
	// console.log(inputHoraInicio.value);

	if (inputDataFim.value == null || inputDataFim.value == "") {
		dataTermino = inputDataInicio.value;
	} else {
		dataTermino = inputDataFim.value;
	}

	var data = new FormData();
	data.append('titulo', inputTitulo.value);
	data.append('descricao', inputDescricao.value);
	data.append('capa', inputCapa.files[0]);
	data.append('dataInicio', inputDataInicio.value);
	data.append('dataFim', dataTermino);
	data.append('horaInicio', inputHoraInicio.value);
	data.append('horaFim', inputHoraFim.value);
	data.append('tblFaixaEtariumIdFaixaEtaria', faixaEtariaSelecionada);
	data.append('tblTipoEventoIdTipoEvento', tipoEventoSelecionado);
	data.append('tblCategoriumIdCategoria', categoriaSelecionada);
	data.append('tblContaEmpresaIdContaEmpresa', contaEmpresaSelecionada);
	data.append('cep', inputCep.value);
	data.append('logradouro', inputLogradouro.value);
	data.append('complemento', inputComplemento.value);
	data.append('bairro', inputBairro.value);
	data.append('cidade', inputCidade.value);
	data.append('estado', inputEstado.value);
	data.append('numero', inputNumero.value);

	var config = {
		method: 'post',
		url: 'http://localhost:4000/evento/cadastrarEventoEndereco/1',
		headers: {
			// ...data.getHeaders()
			'Content-Type': 'multipart/form-data'
		},
		data: data
	};

	axios(config)
		.then(function (response) {
			console.log(JSON.stringify(response.data));
		})
		.catch(function (error) {
			console.log(error);
		});

}

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

async function pegarFaixaEtaria() {
	try {
		const response = await fetch("http://localhost:4000/faixaEtaria/listarFaixaEtaria");

		const data = await response.json();

		mostrarFaixaEtaria(data);
	} catch (error) {
		console.error(error);
	}
}

pegarFaixaEtaria()

function mostrarFaixaEtaria(faixasEtaria) {
	let output = "";

	for (let faixaEtaria of faixasEtaria) {
		output += `<option value="${faixaEtaria.idFaixaEtaria}">${faixaEtaria.idade}</option>`;
	}

	document.querySelector("#faixaEtariaOption").innerHTML = output;
}

async function pegarContaEmpresa() {
	try {
		const response = await fetch("http://localhost:4000/contaEmpresa/listarContasPorIdEmpresa/1");

		const data = await response.json();

		mostrarContaEmpresa(data);
	} catch (error) {
		console.error(error);
	}
}

pegarContaEmpresa()

function mostrarContaEmpresa(contasEmpresa) {
	let output = "";

	for (let contaEmpresa of contasEmpresa) {
		output += `<option value="${contaEmpresa.idContaEmpresa}">${contaEmpresa.numeroConta}</option>`;
	}

	document.querySelector("#contaEmpresaOption").innerHTML = output;
}