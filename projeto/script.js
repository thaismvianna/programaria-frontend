document.getElementById("formInscricao").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const nome = document.getElementById("nome").value;
  const tipo = document.getElementById("tipo").value;

  alert(`Obrigado, ${nome}! Sua inscrição para ${tipo === "curso" ? "um curso" : "um evento/workshop"} foi recebida com sucesso!`);
  
  this.reset(); 
});
