// função para limpar os campos do formulário
function cleanFields() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("company").value = "";  
  //remove borda
  document.getElementById("name").style.borderStyle = "none";
  document.getElementById("email").style.borderStyle = "none";
}

function confirmSendEmail() {
  
  //testa se o campo nome , email estão preenchidos
  if (document.getElementById("name").value == "" || document.getElementById("email").value == "") {
    alert("Preencha os campos nome e email");
    //faz o foco ir para o campo nome
    document.getElementById("name").focus();
    //adiciona borda solid e muda a bordercolor do campo name e email para red
    document.getElementById("name").style.borderStyle = "solid";
    document.getElementById("email").style.borderStyle = "solid";

    document.getElementById("name").style.borderColor = "#C00000";
    document.getElementById("email").style.borderColor = "#C00000";
  } else {
    //alerta mostrando o nome da pessoa confirmando o envio do email e limpa os campos do formulário
    alert("Obrigado " + document.getElementById("name").value + " pelo seu contato. Logo te darei retorno.");
    cleanFields();
  }
}