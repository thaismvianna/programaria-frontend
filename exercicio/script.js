/* campo de nome estiver preenchido e (operador e = &&) campo de email estiver preenchido
    envie os dados
   senao
    peça a usuaria para preencher os campos nome e email
*/

if(document.getElementById("nome").value != "" && document.getElementById("email").value != "") {
    alert("Pronto! Você receberá as novidades por email.")
}else {
    alert("Por favor, preencha os campos nome e email.")
}
