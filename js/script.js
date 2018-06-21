







function getText() {

    var pushButton = document.getElementById("pushButton");
    var taskText = document.getElementById("taskText");
    var writedText = "";

    pushButton.addEventListener("click", function(){
        writedText = taskText.value;
        console.log(writedText);
    });
}


getText();