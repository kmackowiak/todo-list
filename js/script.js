

function createObj() {
    var itemsId = 0;
    var itemsId = document.getElementsByClassName("list-group-item").length;


    const ob = {
        'taskText': this.writedText,
        'taskPriority': taskPriority.value,
    };
    localStorage.setItem(itemsId, JSON.stringify(ob));
    const retrievedObject = localStorage.getItem(itemsId);
}



function getText() {

    var pushButton = document.getElementById("pushButton");
    var taskText = document.getElementById("taskText");
    var writedText = "";
    var taskPriority = document.getElementById("taskPriority");

    // The ability to add a task by pressing enter
    taskText.addEventListener("keyup", function(e) {
        e.preventDefault();
        if (e.keyCode === 13) {
            addTask();
        }
    });
    // The ability to add a task by pressing "Add" button
    pushButton.addEventListener("click", function(){
        addTask();
        //getId();
    });
};

function addTask(){
    // Checking if the task is empty
    if (taskText.value == false) {
        taskText.classList.add("red-border");
    }
    // Checking if the priority is unset
    else if (taskPriority.value == "priority") {
        taskPriority.classList.add("red-border");
    }
    else {


        writedText = taskText.value;
        taskPriorityValue = taskPriority.value;

        //localStorage.setItem(writedText, taskPriorityValue);

        taskText.value = "";
        createListItem(writedText, taskPriorityValue);


    }
}


function createListItem(writedText, taskPriorityValue) {
    taskText.classList.remove("red-border");
    taskPriority.classList.remove("red-border");

    var list = document.getElementById("list");

    //    Create blank list item
    var listItem = document.createElement("li");

    //    Add classes for list item
    listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    switch (taskPriorityValue) {
        case "low":
            listItem.classList.add("list-group-item-success");
            break;
        case "medium":
            listItem.classList.add("list-group-item-warning");
            break;
        case "high":
            listItem.classList.add("list-group-item-danger");
            break;
        case "priority":
            listItem.classList.add("list-group-item-warning");
    }

    //    Add text to list item
    var listItemSpan = document.createElement("span");
    listItemSpan.innerHTML = writedText;

    //    Add button X for list item
    var listItemButton = document.createElement("button");
    listItemButton.classList.add("close");
    listItemButton.setAttribute("type", "button");
    listItemButton.setAttribute("aria-label", "Close");
    var listItemButtonSpan = document.createElement("span");
    listItemButton.appendChild(listItemButtonSpan);
    listItemButtonSpan.innerHTML = "&times;";
    listItemButtonSpan.setAttribute("aria-hidden", "True");

    // Add event for delete list item
    listItemButton.addEventListener("click", function() {
        if (confirm("Do you want delete this task?")) {
            listItem.remove();
        }
    });

    //    Merge elements for list item
    listItem.appendChild(listItemSpan);
    listItem.appendChild(listItemButton);

    //    Add list item to list
    list.appendChild(listItem);





    createObj();



}

createObj();
getText();
