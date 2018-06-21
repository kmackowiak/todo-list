







function getText() {

    var pushButton = document.getElementById("pushButton");
    var taskText = document.getElementById("taskText");
    var writedText = "";
    var taskPriority = document.getElementById("taskPriority");

    pushButton.addEventListener("click", function(){
        writedText = taskText.value;
        taskPriorityValue = taskPriority.value;
        console.log(taskPriorityValue);
        
        createListItem(writedText, taskPriorityValue);
    });
}




function createListItem(writedText, taskPriorityValue) {

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
    
    //    Merge elements for list item
    listItem.appendChild(listItemSpan);
    listItem.appendChild(listItemButton);
    
    //    Add list item to list
    list.appendChild(listItem);
}




getText();
