// récupère le body
export let body = document.getElementsByTagName("body")[0];

// création de tout les élément de base qui vont être injecté au début
export let newH1 = document.createElement("h1");
export let newInputText = document.createElement("input");
export let newInputButton = document.createElement("input");
export let buttonAll = document.createElement("button");
export let buttonFini = document.createElement("button");
export let buttonPasFini = document.createElement("button");
export let header = document.createElement("header");
export let sectionControle = document.createElement("section");
export let sectionToDoList = document.createElement("section");
export let divInput = document.createElement("div");
export let divButton = document.createElement("div");

// changement du contenu ou ajout d'attribut des élément créer dans newElements
newH1.textContent = "To Do List";
newInputText.type = "text";
newInputText.placeholder = "Tâche";
newInputButton.type = "button";
newInputButton.value = "Add";
buttonAll.textContent = "All";
buttonFini.textContent = "Fini";
buttonPasFini.textContent = "Pas Fini";
sectionControle.id = "sectionControle";
sectionToDoList.id = "sectionToDoList";
divInput.id = "divInput";
divButton.id = "divButton";
