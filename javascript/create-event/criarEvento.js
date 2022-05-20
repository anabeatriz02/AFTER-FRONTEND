const btn = document.querySelector("#salvar");

// console.log(btn)

const form = document.querySelector("#formCriarEvento");

// btn.addEventListener("click", () => {
// 	const evento = getDadosEvento();

// 	console.log(evento)

// });

getDadosEvento();

function getDadosEvento() {
	const inputTitulo = document.querySelector("#titulo");

	const selectCategoria = document.querySelector("#category");
	const categoriaSelecionada = selectCategoria.options[selectCategoria.selectedIndex].value;

	const selectAssunto = document.querySelector("#topic");
	const assuntoSelecionado = selectAssunto.options[selectAssunto.selectedIndex].value;

	const selectTipoEvento = document.querySelector("#tipoEvento");
	const tipoEventoSelecionado = selectTipoEvento.options[selectTipoEvento.selectedIndex].value;

	const selectFaixaEtaria = document.querySelector("#faixaEtaria");
	const faixaEtariaSelecionada = selectFaixaEtaria.options[selectFaixaEtaria.selectedIndex].value;

	const selectContaEmpresa = document.querySelector("#contaEmpresa");
	const contaEmpresaSelecionada = selectContaEmpresa.options[selectContaEmpresa.selectedIndex].value;

	const inputDescricao = document.querySelector("#descricao");

	const inputCep = document.querySelector("#cep");
	const inputBairro = document.querySelector("#bairro");
	const inputEstado = document.querySelector("#estado");
	const inputLogradouro = document.querySelector("#logradouro");
	const inputCidade = document.querySelector("#cidade");
	const inputComplemento = document.querySelector("#complemento");
	const inputNumero = document.querySelector("#numero");

	const inputDataInicio = document.querySelector("#dataInicio");
	const inputDataFim = document.querySelector("#dataFim");
	const inputHoraInicio = document.querySelector("#horaInicio");
	const inputHoraFim = document.querySelector("#horaFim");

	const inputCapa = document.querySelector("#input-photo-file");

	const inputPrimeiraFotoComplementar = document.querySelector("#first-image-photo-complement-preview");
	const inputSegundaFotoComplementar = document.querySelector("#second-image-photo-complement-preview");
	const inputTerceiraFotoComplementar = document.querySelector("#third-image-photo-complement-preview");
	const inputQuartaFotoComplementar = document.querySelector("#fourth-image-photo-complement-preview");
	const inputQuintaFotoComplementar = document.querySelector("#fifth-image-photo-complement-preview");

	const selectCelebridade = document.querySelector("#celebridade");
	const celebridadeSelecionada = selectCelebridade.options[selectCelebridade.selectedIndex].value;

	// STEP 1 - ID
	const loteDataInicio = document.querySelector("#lote-data-inicio");
	const loteHoraInicio = document.querySelector("#lote-hora-inicio");
	const loteDataTerminio = document.querySelector("#lote-data-termino");
	const loteHoraTermino = document.querySelector("#lote-hora-termino");
	const loteQuantidadeIngressos = document.querySelector("#lote-quantidade-ingresso");
	const loteTaxaAbsorcao = document.querySelector("#lote-taxa-absorcao");
	const loteQuantidadeMaxima = document.querySelector("#lote-quantidade-maxima");

	// STEP 3 - ID
	const loteIpTitulo = document.querySelector("#lote-ip-titulo");
	const loteIpQuantidade = document.querySelector("#lote-ip-quantidade");
	const loteIpPreco = document.querySelector("#lote-ip-preco");
	const loteIpDescricao = document.querySelector("#lote-ip-descricao");
	// STEP 3 - ID MEIA
	const loteIpCheckbox = document.querySelector("#chkCamp1");
	const loteIpTituloMeia = document.querySelector("#lote-ip-titulo-meia");
	const loteIpQuantidadeMeia = document.querySelector("#lote-ip-quantidade-meia");
	const loteIpPrecoMeia = document.querySelector("#lote-ip-preco-meia");
	const loteIpDescricaoMeia = document.querySelector("#lote-ip-descricao-meia");

	// STEP 4 - ID
	const loteIgTitulo = document.querySelector("#lote-ig-titulo");
	const loteIgQuantidade = document.querySelector("#lote-ig-quantidade");
	const loteIgPreco = document.querySelector("#lote-ig-preco");
	const loteIgDescricao = document.querySelector("#lote-ig-descricao");

	const isRequired = (value) => (value === "" ? false : true);

	//Validação do título

	const checkTitulo = () => {
		let valid = false;

		const titulo = inputTitulo.value.trim();

		if (!isRequired(titulo)) {
			alert("Você não passou titulo");
		} else {
			valid = true;
		}

		return valid;
	};

	//Validação do endereço do evento

	const checkCep = () => {
		let valid = false;

		const cep = inputCep.value.trim();

		if (!isRequired(cep)) {
			alert("Você não passou cep");
		} else {
			valid = true;
		}

		return valid;
	};

	const checkBairro = () => {
		let valid = false;

		const bairro = inputBairro.value.trim();

		if (!isRequired(bairro)) {
			alert("Você não passou o bairro");
		} else {
			valid = true;
		}

		return valid;
	};

	const checkEstado = () => {
		let valid = false;

		const estado = inputEstado.value.trim();

		if (!isRequired(estado)) {
			alert("Você não passou o estado");
		} else {
			valid = true;
		}

		return valid;
	};

	const checkLogradouro = () => {
		let valid = false;

		const logradouro = inputLogradouro.value.trim();

		if (!isRequired(logradouro)) {
			alert("Você não passou o logradouro");
		} else {
			valid = true;
		}

		return valid;
	};

	const checkCidade = () => {
		let valid = false;

		const cidade = inputCidade.value.trim();

		if (!isRequired(cidade)) {
			alert("Você não passou a cidade");
		} else {
			valid = true;
		}

		return valid;
	};

	//Validação da data e hora de início

	const checkDataInicio = () => {
		let valid = false;

		const dataInicio = inputDataInicio.value.trim();

		if (!isRequired(dataInicio)) {
			alert("Você não passou a data de início");
		} else {
			valid = true;
		}

		return valid;
	};

	const checkHoraInicio = () => {
		let valid = false;

		const horaInicio = inputHoraInicio.value.trim();

		if (!isRequired(horaInicio)) {
			alert("Você não passou a hora de início");
		} else {
			valid = true;
		}

		return valid;
	};

	const checkCapa = () => {
		let valid = false;

		if (inputCapa.files.length == 0) {
			alert("Você não selecionou uma capa");
		} else {
			valid = true;
		}

		return valid;
	};

	//Ação de submit do form

	form.addEventListener("submit", function (e) {
		e.preventDefault();

		//Validação dos campos

		let isTituloValid = checkTitulo(),
			isCepValid = checkCep(),
			isBairroValid = checkBairro(),
			isEstadoValid = checkEstado(),
			isLogradouroValid = checkLogradouro(),
			isCidadeValid = checkCidade(),
			isDataInicioValid = checkDataInicio(),
			isHoraInicioValid = checkHoraInicio(),
			isCapaValid = checkCapa();

		let isFormValid = isTituloValid && isCepValid && isBairroValid && isEstadoValid && isLogradouroValid && isCidadeValid && isDataInicioValid && isHoraInicioValid && isCapaValid;

		//Quando o formulário for válido, fazer o post desse evento
		if (isFormValid) {
			alert("Evento cadastrado com sucesso!");

			//Se a data ou hora de término não for passada, incorporar o valor da data ou hora de início nesse atributo

			if (inputDataFim.value == null || inputDataFim.value == "") {
				dataTermino = inputDataInicio.value;
			} else {
				dataTermino = inputDataFim.value;
			}

			if (inputHoraFim.value == null || inputHoraFim.value == "") {
				horaTermino = inputHoraInicio.value;
			} else {
				horaTermino = inputHoraFim.value;
			}

			//Pegando valores de option selecionada em selects

			const categoriaSelecionada = selectCategoria.options[selectCategoria.selectedIndex].value;
			const assuntoSelecionado = selectAssunto.options[selectAssunto.selectedIndex].value;
			const tipoEventoSelecionado = selectTipoEvento.options[selectTipoEvento.selectedIndex].value;
			const faixaEtariaSelecionada = selectFaixaEtaria.options[selectFaixaEtaria.selectedIndex].value;
			const contaEmpresaSelecionada = selectContaEmpresa.options[selectContaEmpresa.selectedIndex].value;
			const celebridadeSelecionada = selectCelebridade.options[selectCelebridade.selectedIndex].value;

			var data = new FormData();
			data.append("titulo", inputTitulo.value);
			data.append("descricao", inputDescricao.value);
			data.append("capa", inputCapa.files[0]);
			data.append("dataInicio", inputDataInicio.value);
			data.append("dataFim", dataTermino.value);
			data.append("horaInicio", inputHoraInicio.value);
			data.append("horaFim", horaTermino);
			data.append("tblFaixaEtariumIdFaixaEtaria", faixaEtariaSelecionada);
			data.append("tblTipoEventoIdTipoEvento", tipoEventoSelecionado);
			data.append("tblCategoriumIdCategoria", categoriaSelecionada);
			data.append("tblContaEmpresaIdContaEmpresa", contaEmpresaSelecionada);
			data.append("cep", inputCep.value);
			data.append("logradouro", inputLogradouro.value);
			data.append("complemento", inputComplemento.value);
			data.append("bairro", inputBairro.value);
			data.append("cidade", inputCidade.value);
			data.append("estado", inputEstado.value);
			data.append("numero", inputNumero.value);
			data.append("tblAssuntoIdAssunto", assuntoSelecionado);

			var lote = new FormData();
			lote.append("dataInicio", loteDataInicio.value);
			lote.append("horaInicio", loteHoraInicio.value);
			lote.append("dataFim", loteDataTerminio.value);
			lote.append("horaFim", loteHoraTermino.value);
			lote.append("qtdeEstoque", loteQuantidadeIngressos.value);
			lote.append("taxaAbsorvida", loteTaxaAbsorcao.value);
			lote.append("maxCompraPorUsuario", loteQuantidadeMaxima.value);

			var loteVariavelIp = new FormData();
			loteVariavelIp.append("tituloIngresso", loteIpTitulo.value);
			loteVariavelIp.append("quantidade", loteIpQuantidade.value);
			loteVariavelIp.append("valor", 1);
			loteVariavelIp.append("descricao", loteIpDescricao.value);

			var loteVariavelIg = new FormData();
			loteVariavelIg.append("tituloIngresso", loteIgTitulo.value);
			loteVariavelIg.append("quantidade", loteIpQuantidade.value);
			loteVariavelIg.append("valor", 0);
			loteVariavelIg.append("descricao", loteIpDescricao);

			// if (loteIpCheckbox.type == "checkbox" && loteIpCheckbox.checked ){
			// }

		
			// if (next_step2 == true) {
			// 	loteVariavelIg.append("valor", 0);

			// 	// return true;
			// } else (next_step3 == true) {
			// 	loteVariavelIp.append("valor", 1);
			// }

			//Verificar se a celebridade está sendo passada

			if (celebridadeSelecionada == 0) {
				// data.append('tblCelebridadeIdCelebridade', celebridadeSelecionada)
				console.log(celebridadeSelecionada + " Olá");
			} else {
				data.append("tblCelebridadeIdCelebridade", celebridadeSelecionada);
				console.log(categoriaSelecionada + " Tchau");
			}

			//Verificar se fotos complementares estão sendo passadas

			if (inputPrimeiraFotoComplementar != null) {
				data.append("imagem", inputPrimeiraFotoComplementar.files[0]);
			}

			if (inputSegundaFotoComplementar != null) {
				data.append("imagem", inputSegundaFotoComplementar.files[0]);
			}

			if (inputTerceiraFotoComplementar != null) {
				data.append("imagem", inputTerceiraFotoComplementar.files[0]);
			}

			if (inputQuartaFotoComplementar != null) {
				data.append("imagem", inputQuartaFotoComplementar.files[0]);
			}

			if (inputQuintaFotoComplementar != null) {
				data.append("imagem", inputQuintaFotoComplementar.files[0]);
			}

			// console.log(inputPrimeiraFotoComplementar.files)
			// console.log(inputSegundaFotoComplementar.files)
			// console.log(inputTerceiraFotoComplementar.files)
			// console.log(inputQuartaFotoComplementar.files)
			// console.log(inputQuintaFotoComplementar.files)

			//Configurando rota para criação

			var config = {
				method: 'post',
				url: 'http://localhost:4000/evento/cadastrarEventoCompleto/8',
				headers: {
					// ...data.getHeaders()
					"Content-Type": "multipart/form-data",
				},
				data: data,
			};

			axios(config)
				.then(function (response) {
					console.log(JSON.stringify(response.data));
				})
				.catch(function (error) {
					console.log(error);
				});
		}
	});

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
}

//Mostrando e cadastrando categorias

async function pegarCategoria() {
	try {
		const response = await fetch("http://localhost:4000/categoria/listarCategorias");

		const data = await response.json();

		mostrarCategoria(data);

		const categoriaSelect = document.querySelector("#category");

		//Mostrando o assunto de acordo com a categoria selecionada

		categoriaSelect.addEventListener("change", async () => {
			const categoria = document.getElementById("category").value;

			const responseAssunto = await fetch(`http://localhost:4000/assunto/listarPorCategoria/${categoria}`);

			const dataAssunto = await responseAssunto.json();

			mostrarAssunto(dataAssunto);
		});
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

//Mostrando e cadastrando tipo de evento

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

//Mostrando e cadastrando faixa etária de evento

async function pegarFaixaEtaria() {
	try {
		const response = await fetch("http://localhost:4000/faixaEtaria/listarFaixaEtaria");

		const data = await response.json();

		mostrarFaixaEtaria(data);
	} catch (error) {
		console.error(error);
	}
}

pegarFaixaEtaria();

function mostrarFaixaEtaria(faixasEtaria) {
	let output = "";

	for (let faixaEtaria of faixasEtaria) {
		output += `<option value="${faixaEtaria.idFaixaEtaria}">${faixaEtaria.idade}</option>`;
	}

	document.querySelector("#faixaEtariaOption").innerHTML = output;
}

//Mostrando e cadastrando conta de empresa (para receber dinheiro)

async function pegarContaEmpresa() {
	try {
		const response = await fetch("http://localhost:4000/contaEmpresa/listarContasPorIdEmpresa/8");

		const data = await response.json();

		mostrarContaEmpresa(data);
	} catch (error) {
		console.error(error);
	}
}

pegarContaEmpresa();

function mostrarContaEmpresa(contasEmpresa) {
	let output = "";

	for (let contaEmpresa of contasEmpresa) {
		output += `<option value="${contaEmpresa.idContaEmpresa}">${contaEmpresa.numeroConta}-${contaEmpresa.digito}</option>`;
	}

	document.querySelector("#contaEmpresaOption").innerHTML = output;
}

//Mostrando e cadastrando assunto do evento

async function pegarAssunto() {
	try {
		const response = await fetch("http://localhost:4000/assunto/listarAssuntos");

		const data = await response.json();

		mostrarAssunto(data);
	} catch (error) {
		console.error(error);
	}
}

pegarAssunto();

function mostrarAssunto(assuntos) {
	let output = "";

	for (let assunto of assuntos) {
		output += `<option value="${assunto.idAssunto}">${assunto.nomeAssunto}</option>`;
	}

	document.querySelector("#assuntoOption").innerHTML = output;
}

//Mostrando e cadastrando celebridade

async function pegarCelebridade() {
	try {
		const response = await fetch("http://localhost:4000/celebridade/listarCelebridades");

		const data = await response.json();

		mostrarCelebridade(data);
	} catch (error) {
		console.error(error);
	}
}

pegarCelebridade();

function mostrarCelebridade(celebridades) {
	let output = "";

	for (let celebridade of celebridades) {
		output += `<option value="${celebridade.idCelebridade}">${celebridade.tblVerificacaoUsuario.nickname}</option>`;
	}

	document.querySelector("#celebridadeOption").innerHTML = output;
}

function next_step1() {
	document.getElementById("step-1").style.display = "none";
	document.getElementById("step-2").style.display = "block";
	// document.getElementById("active2").style.color = "red";
}

function next_step2() {
	document.getElementById("step-2").style.display = "none";
	document.getElementById("step-4").style.display = "block";
	// document.getElementById("active3").style.color = "red";
}

function next_step3() {
	document.getElementById("step-2").style.display = "none";
	document.getElementById("step-3").style.display = "block";
	// document.getElementById("active3").style.color = "red";
}
