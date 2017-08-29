var openWriteForm = document.querySelector(".write-us__send");
var writeForm = document.querySelector(".write-form");
var closeWriteForm = document.querySelector(".write-form__close");

openWriteForm.addEventListener("click", function(event) {
    event.preventDefault();
    writeForm.classList.remove("visible_off");
    writeForm.classList.add("visible_on");
    
});

closeWriteForm.addEventListener("click", function(event) {
    event.preventDefault();
    writeForm.classList.remove("visible_on");
    writeForm.classList.add("visible_off");
});