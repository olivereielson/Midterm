// confirm that the user inputs are all valid
function valid(name, number, email, message) {
    let error_count = 0;
    // if there is an error, iterate error_count and notify user
    if(name == null){
        error_count++;
        alert("Please provide a name")
    }
    if(number == null){
        error_count++;
        alert("Please provide a phone number")
    }if(email == null){
        error_count++;
        alert("Please provide a valid email address")
    }
    if(message == null){
        error_count++;
        alert("Please provide a message")
    }
    if(error_count === 0){
       window.open("message.html")
}
}
// function that is run in response to user changes
$(document).ready(function () {
    // store the required input fields in variables and then call
    // the validate fcn when the user submits
    let name, number, email, message;
    $("input[id = name]").change(function () {
        name = this.value;
    });
    $("input[id = number]").change(function () {
        number = this.value;
    });
    $("input[id = email]").change(function () {
        email = this.value;
    });
    $("textarea[id = message]").change(function () {
        message = this.value;
    });
    $("button[type=submit]").click(function () {
        valid(name, number, email, message);
    });
});