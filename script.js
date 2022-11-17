let inputTask = document.querySelector("#input-task");
let btnAdd = document.querySelector(".btn-add");
let block = document.querySelector(".task-block");

// DISPLAY ALREADY AVAIABLE TODO TASKS FUNCTION
displayList();

// ADD A NEW TASK WHILE CLICK ON ADD BUTTON
btnAdd.onclick = function() {
    let task = inputTask.value;
    if(!task) {
        alert("Please insert a value first.");
        return;
    } else {
        //CALLING ADD TASK FUNCTION
        addTask(task);
        inputTask.value = "";
        displayList();
    }
}

// ADD TASK FUNCTION TO ADD TASK TO THE LIST
function addTask(task) {
    let avaialbleList = localStorage.getItem("list");
    // PARSING AVAILABLE TASKS IN THE LIST
    if(avaialbleList == null) {
        getList = [];
    } else {
        getList = JSON.parse(avaialbleList);
    } 
    // PUSHING ITEMS TO THE LIST
    getList.push(task);
    localStorage.setItem("list", JSON.stringify(getList));
}

// DISPLAY LIST VALUES FUNCTION
function displayList() {
    let notesList = localStorage.getItem("list");
    if(notesList == null) {
        // SHOWING EMPTY LIST MESSAGE
        getNotesList = [];
    } else {
        getNotesList = JSON.parse(notesList);
    }
    // PARSE LIST AND DISPLAY IN THE DIV
    let createBlock = "";
    for(i = 0; i < getNotesList.length; i++) {
        // CREATING DYNAMIC BLOCK
        createBlock += '<div class="show-block"><input type="text" id="text" value="' + getNotesList[i] + '"><button class="btn-delete" onclick="deleteTask(this.id);" id="' + i + '">Delete</button></div>';
    }
    if(getNotesList.length != 0) {
        block.innerHTML = createBlock;
    } else {
        block.innerHTML = "<p style='margin: 10px 0px; font-size: 20px'>Wooooaahhaa...!! Nothing to do.";
    }
}
    
// DELETING THE TASK FROM THE LIST
function deleteTask(index) {
    let notesList = JSON.parse(localStorage.getItem("list"));
    notesList.splice(index, 1);
    localStorage.setItem("list", JSON.stringify(notesList));
    displayList();
}
