// Procurar o botão
const btnAddTime = document.querySelector("#add-time");
btnAddTime.addEventListener("click", cloneField);

//Quando clicar no botão

//Executar a ação
function cloneField() {
  //Duplicar os campos
  // que  campos?
  const fieldClone = document.querySelector(".schedule-item").cloneNode(true);
  const fieldContainer = document.querySelector("#schedule-items");

  //limpar os campos
  //que campos?
  const inputs = fieldClone.querySelectorAll("input");

  inputs.forEach((input) => {
    input.value = "";
  });

  // Colocar na pagina
  //onde?
  fieldContainer.appendChild(fieldClone);
}
