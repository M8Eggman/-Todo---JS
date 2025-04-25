// récupère le body
let body = document.getElementsByTagName("body")[0];

// création de tout les élément de base qui vont être injecté au début
let newH1 = document.createElement("h1");
let newInputText = document.createElement("input");
let newInputButton = document.createElement("input");
let buttonAll = document.createElement("button");
let buttonFini = document.createElement("button");
let buttonPasFini = document.createElement("button");
let divInput = document.createElement("div");
let divButton = document.createElement("div");

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
divButton.appendChild(buttonAll)
divButton.appendChild(buttonFini)
divButton.appendChild(buttonPasFini)
