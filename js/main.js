import { body, newH1, newInputText, newInputButton, buttonAll, buttonFini, buttonPasFini, divInput, divButton } from "./modules/newElements.js";

// changement du contenu des élément créer précedemment
newH1.textContent = "To Do List";
newInputText.type = "text";
newInputText.placeholder = "Tâche";
newInputButton.type = "button";
newInputButton.value = "Add";
buttonAll.textContent = "All";
buttonFini.textContent = "Fini";
buttonPasFini.textContent = "Pas Fini";
divInput.id = "divInput";
divButton.id = "divButton";

// injection des éléments dans mon Body
body.appendChild(newH1);
body.appendChild(divInput);
body.appendChild(divButton);

// injection des éléments dans ma div input
divInput.appendChild(newInputText);
divInput.appendChild(newInputButton);

// injection des éléments dans ma div input
divButton.appendChild(buttonAll);
divButton.appendChild(buttonFini);
divButton.appendChild(buttonPasFini);
