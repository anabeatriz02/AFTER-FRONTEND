"use-strict"

function realizarCadastroEmpresa() {
    const empresa = getDadosEmpresa()

    console.log(empresa)
}

function getDadosEmpresa() {
    const inputNickname = document.querySelector('#nicknameEmpresa')
    const inputEmail = document.querySelector('#emailEmpresa')
    const inputSenha = document.querySelector('#senhaEmpresa')
    const inputSenhaConfirmar = document.querySelector('#confirmarSenhaEmpresa')

    const inputCnpj = document.querySelector('#cnpj')

    const inputPerfil = document.querySelector('#imagemPerfilEmpresa')
    const inputFundo = document.querySelector('#imagemFundoEmpresa')

    const inputBiografia = document.querySelector('#biografiaEmpresa')

    // cadastrando BANCO junto com empresa

    // const inputBanco = document.querySelector('#banco')
    const selectBanco = document.querySelector('#banco')
    const inputAgencia = document.querySelector('#agencia')
    const inputNumeroConta = document.querySelector('#conta')
    const inputDigito = document.querySelector('#digito')
    // const inputTipoConta = document.querySelector('#tipoConta')
    const selectTipoConta = document.querySelector('#tipoConta')

    if (inputSenhaConfirmar.value !== inputSenha.value) {

        alert("A senha digitada está incorreta")

        const btnSalvar = document.querySelector('#salvarEmpresa')

        btnSalvar.setAttribute('href', "./singup.html")

        return false

    } else {

        const bancoSelecionado = selectBanco.options[selectBanco.selectedIndex].value
        const tipoSelecionado = selectTipoConta.options[selectTipoConta.selectedIndex].value

        const formData = new FormData()

        formData.append("nickname", inputNickname.value)
        formData.append("email", inputEmail.value)
        formData.append("senha", inputSenha.value)
        formData.append("cnpj", inputCnpj.value)
        formData.append("imagemPerfil", inputPerfil.files[0])
        formData.append("imagemFundo", inputFundo.files[0])
        formData.append("biografia", inputBiografia.value)
        formData.append("agencia", inputAgencia.value)
        formData.append("numeroConta", inputNumeroConta.value)
        formData.append("digito", inputDigito.value)
        formData.append("tblBancoContumIdBancoConta", bancoSelecionado)
        formData.append("tblTipoContumIdTipoConta", tipoSelecionado)

        var config = {
            method: 'post',
            url: 'http://localhost:4000/perfil/cadastrarPerfilEmpresaComConta',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

    }

}

async function pegarBanco() {
	try {
		const response = await fetch("http://localhost:4000/bancoConta/listarBancoConta");

		const data = await response.json();

		mostrarBanco(data);
	} catch (error) {
		console.error(error);
	}
}

pegarBanco();

function mostrarBanco(bancos) {
	let output = "";

	for (let banco of bancos) {
		output += `<option value="${banco.idBancoConta}">${banco.nomeBanco}</option>`;
	}

	document.querySelector("#bancoOption").innerHTML = output;
}

async function pegarTipoConta() {
	try {
		const response = await fetch("http://localhost:4000/tipoConta/listarTiposConta");

		const data = await response.json();

		mostrarTipoConta(data);
	} catch (error) {
		console.error(error);
	}
}

pegarTipoConta();

function mostrarTipoConta(tipos) {
	let output = "";

	for (let tipo of tipos) {
		output += `<option value="${tipo.idTipoConta}">${tipo.nomeTipo}</option>`;
	}

	document.querySelector("#tipoContaOption").innerHTML = output;
}