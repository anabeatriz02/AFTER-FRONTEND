const form = document.querySelector("#formLogin")

const inputEmail = document.querySelector("#inputEmail")
const inputSenha = document.querySelector("#inputSenha")

const btnEntrar = document.querySelector("#btnEntrar")

form.addEventListener("submit", function (e) {
    e.preventDefault()

    var data = JSON.stringify({
        "email": inputEmail.value,
        "senha": inputSenha.value
    })

    var config = {
        method: 'post',
        url: 'http://localhost:4000/perfil/login',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    }

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));

            localStorage.setItem("token", "Bearer " + response.data.token)
        })
        .catch(function (error) {
            console.log(error);
        })

    window.location.href = "./profile-view-company.html"


})

// btnEntrar.addEventListener('click', window.location.href = "./profile-view-company.html")


const usuarioAutenticado = () => {
    axios.get("http://localhost:4000/perfil/estaLogado", {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    }).then((response) => {
        console.log(response)
    })
}