if (document.getElementsByClassName("link--edit disabled") || document.getElementsByClassName("link--edit disabled").length > 0) {
  document.getElementsByClassName("btn btn-danger button--cancelar")[0].click();
}

const selectByText = (selectId, textValue) => {
  let el = document.getElementById(selectId);
  for(let i=0; i<el.options.length; i++) {
    if ( el.options[i].text.includes(textValue) ) {
      el.selectedIndex = i;
      break;
    }
  }
}

const clickEdit = (formId) => {
  let editButton = document.getElementById(formId).getElementsByClassName("link--edit")[0];
  editButton.click();
}

clickEdit("personalData");
document.getElementById("dados_pessoais_data_de_nascimento").value = '02/03/1991';
document.getElementById("dados_pessoais_genero_masculino").checked = true;
selectByText("dados_pessoais_estado_civil", "Casad");