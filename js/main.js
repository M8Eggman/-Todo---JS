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

    // changement du contenu ou ajout d'attribut des élément créer dans précedemment
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

    
    // ajout au compteur d'une tâche
    count++;
    // vide l'input pour créer de nouvelle tâche
    newInputText.value = "";
  }
});
