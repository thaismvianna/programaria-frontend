/* campo de nome estiver preenchido e (operador e = &&) campo de email estiver preenchido
    envie os dados
   senao
    peça a usuaria para preencher os campos nome e email
*/

document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario() {
    if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != "") {
    alert("Pronto! Você receberá as novidades por email.")
    }else {
    alert("Por favor, preencha os campos nome, email e telefone")
    }
}


