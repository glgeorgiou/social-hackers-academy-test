//Define button variable
var conButton = document.getElementById("clickToConsole");

//Add the event and the function for the button
conButton.addEventListener("click",msgToConsole);

function msgToConsole() {
    console.log("You clicked me!");
}