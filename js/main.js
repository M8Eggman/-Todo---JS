// mes imports
import { body, newH1, newInputText, newInputButton, buttonAll, buttonFini, buttonPasFini, divInput, divButton, header, sectionControle, sectionToDoList } from "./modules/newElements.js";

// changement du contenu des élément créer dans newElements
newH1.textContent = "To Do List";
newInputText.type = "text";
newInputText.placeholder = "Tâche";
newInputButton.type = "button";
newInputButton.value = "Add";
buttonAll.textContent = "All";
buttonFini.textContent = "Fini";
buttonPasFini.textContent = "Pas Fini";
sectionControle.id = "sectionControle"
sectionToDoList.id = "sectionToDoList"
divInput.id = "divInput";
divButton.id = "divButton";

// injection d'élément dans mon Body
body.appendChild(header)
body.appendChild(sectionControle)
body.appendChild(sectionToDoList)

// injection d'élément dans section controle
sectionControle.appendChild(divInput);
sectionControle.appendChild(divButton);

// injection d'élément dans mon header
header.appendChild(newH1);

// injection d'élément dans ma div input
divInput.appendChild(newInputText);
divInput.appendChild(newInputButton);

// injection d'élément dans ma div button
divButton.appendChild(buttonAll);
divButton.appendChild(buttonFini);
divButton.appendChild(buttonPasFini);
