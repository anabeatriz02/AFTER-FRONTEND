// const btn = document.querySelector('#enviarComentario')
// const input = document.querySelector('#inputComentario')
// const form = document.querySelector('#formComentario')

// form.addEventListener('submit', (e) => {
//     // e.preventDefault()

//     const comentario = input.value

//     enviarComentarioParaAPI(comentario)

//     // console.log(evento)

// })

// // function getComentiario(){

// //     const inputPerfilIdPerfil = document.querySelector('#PerfilIdPerfil')
// //     const inputEventoIdEvento = document.querySelector('#EventoIdEvento')
// //     const inputTexto = document.querySelector('#Texto')


// //     }

// async function enviarComentarioParaAPI(Comentario) {
//     try {

//         var raw = JSON.stringify({
//             "texto": Comentario
//           });

//         const resposta = await fetch('http://localhost:4000/comentario/criarComentario/1/1', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: raw
//         })

//     } catch (erro) {
//         console.error(erro)
//      }
// }