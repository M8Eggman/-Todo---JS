// mes imports
import { body, newH1, newInputText, newInputButton, buttonAll, buttonFini, buttonPasFini, divInput, divButton, header, sectionControle, sectionToDoList } from "./modules/newElements.js";

// injection d'élément dans mon Body
body.append(header, sectionControle, sectionToDoList);
// injection d'élément dans section controle
sectionControle.append(divInput, divButton);
// injection d'élément dans mon header
header.append(newH1);
// injection d'élément dans ma div input
divInput.append(newInputText, newInputButton);
// injection d'élément dans ma div button
divButton.append(buttonAll, buttonFini, buttonPasFini);

// création d'un compteur de tâche créé
let count = 1;

// mes event listener
// création de nouvelle tache au click du input add
newInputButton.addEventListener("click", () => {
  // si l'utilisateur n'a rien entré ou qu'il a entré que des espaces il n'y a pas de nouvelle tâche créé
  if (newInputText.value.trim().length == 0) {
    alert("Vous n'avez rien entré veuillez entré une tâche");
  } else {
    // création de tous les éléments nécessaire pour faire une nouvelle tâche
    let newDivTache = document.createElement("div");
    let newDivCheckbox = document.createElement("div");
    let newDivOptions = document.createElement("div");
    let checkboxLabel = document.createElement("label");
    let checkboxInput = document.createElement("input");
    let newPTache = document.createElement("p");
    let newButtonModifier = document.createElement("button");
    let newButtonSupprimer = document.createElement("button");

    // changement du contenu ou ajout d'attribut des élément créer précedemment
    newDivTache.className = "divTache pasFinis";
    newDivCheckbox.className = "divCheckbox";
    newDivOptions.className = "divOptions";
    checkboxLabel.textContent = "Done";
    checkboxLabel.htmlFor = `checkbox${count}`;
    checkboxInput.type = "checkbox";
    checkboxInput.id = `checkbox${count}`;
    newPTache.textContent = newInputText.value;
    newButtonModifier.textContent = "Modifier";
    newButtonSupprimer.textContent = "Supprimer";

    // injection d'élément dans section to do list
    sectionToDoList.append(newDivTache);
    // injection d'élément dans div tache
    newDivTache.append(newDivCheckbox, newPTache, newDivOptions);
    // injection d'élément dans div checkbox
    newDivCheckbox.append(checkboxLabel, checkboxInput);
    // injection d'élément dans div options
    newDivOptions.append(newButtonModifier, newButtonSupprimer);

    // se lance a chaque click de la div mais ne fait rien tant qu'on a pas cliqué a un endroit précis
    newDivTache.addEventListener("click", (e) => {
      switch (e.target.tagName) {
        // si click sur input il change la classe selon la checkbox
        case "INPUT":
          if (checkboxInput.checked) {
            newDivTache.className = "divTache finis";
          } else {
            newDivTache.className = "divTache pasFinis";
          }
          break;
        // sinon effectue des actions selon le bouton pressé
        case "BUTTON":
          if (e.target.textContent == "Modifier") {
          } else {
            // enlève la divTache une fois le bouton supprimer appuyé
            newDivTache.remove();
            count--;

            // récupère toute les divTache restante
            let allTache = sectionToDoList.querySelectorAll(".divTache");
            // initialise un nouveau compteur
            let count2 = 1;

            allTache.forEach((element) => {
              // pour chaque div tache récupère leur label et leur input
              let labelFor = element.querySelector("label");
              let inputId = element.querySelector("input[type='checkbox']");

              // et change leurs id et leur for avec le nouveau compteur pour pas avoir de gap
              labelFor.htmlFor = `checkbox${count2}`;
              inputId.id = `checkbox${count2}`;
              count2++;
            });
          }
          break;
      }
    });
    // ajout au compteur d'une tâche
    count++;
    // vide l'input pour créer de nouvelle tâche
    newInputText.value = "";
  }
});
