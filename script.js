//henter ut informajon fra HTML
const inputField  = document.querySelector("#inputField");
const addBtn = document.querySelector ("#addBtn");
const todoList = document.querySelector("#todoList");

//sjekker at vi har fått ut ønskete elementer
console.log (inputField, addBtn, todoList)

 //Genererer funksjon for å sette in gjøremål i liste
 //Registrerer når knapp har blik klicket.
addBtn.addEventListener("click", function (){
    console.log ("AddBtn Clicked");

    const inputFieldValue = inputField.value; 
    console.log(inputFieldValue);

    //Legger til element i liste med Informasjon fra inputfelt etter knappe tryk.
    const todoItem = document.createElement("li");
    todoItem.textContent = inputFieldValue;
    todoList.appendChild(todoItem);

    // Ferdig knapp
    const finishedBtn = document.createElement("button");
    finishedBtn.textContent = "Ferdig";
    todoItem.appendChild(finishedBtn);
    console.log(finishedBtn);

    finishedBtn.addEventListener("click", function (){
        console.log("finishedBtn clicked");
        if (todoItem.style.textDecoration === "line-through") {
            todoItem.style.textDecoration = "none";} 
        
        else {todoItem.style.textDecoration = "line-through";}
    });

    // Slett knapp
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Slett";
    todoItem.appendChild(deleteBtn);
    console.log(deleteBtn);

    deleteBtn.addEventListener("click", function (){
        console.log("deleteBtn clicked");
        todoItem.remove();
    });

});