// récupère le body
let body = document.getElementsByTagName("body")[0];

// création de tout les élément de base qui vont être injecté au début
let newH1 = document.createElement("h1");
let newInputText = document.createElement("input");
let newInputButton = document.createElement("input");
let buttonAll = document.createElement("button");
let buttonFini = document.createElement("button");
let buttonPasFini = document.createElement("button");

// changement du contenu des élément créer précedemment
newH1.textContent = "To Do List";
newInputText.placeholder = "Tâche";
newInputButton.value = "Add";
buttonAll.textContent = "All";
buttonAll.textContent = "Fini";
buttonAll.textContent = "Pas Fini";
