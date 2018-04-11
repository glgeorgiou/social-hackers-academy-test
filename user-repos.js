//Variable
var btnUserInput = document.getElementById("btnSearchTerm");
var results = document.getElementById("results");

//Events
btnUserInput.addEventListener("click",checkUserInput);


//Function for user input control
function checkUserInput() {
    var userInput = document.getElementById("InputSearchTerm").value;
        
    //Check user input
    if (userInput.length==0) {
       alert("Null values are not permited");
       return;
    }    
    
    //Call function
    getRequest(userInput);
}

//Function for requests
function getRequest(userRequest) {
    /**
     * Read from repository
     */
    //Define the XMLHttpRequest Object
    var http = new XMLHttpRequest();
    var url = "https://api.github.com/repos/SocialHackersCodeSchool/"

    url+=userRequest;

    //Open url request
    http.open("GET", url);
    http.send();
    
    //Check status
    http.onreadystatechange = function() {
        if (http.status == 404) {
             console.log('Page not found'); 
        } else {console.log('Url is ok');}
    }
    http.onreadystatechange()

    /**
     * Display on webpage;
     */
     results.innerText = http.response; //The contents of the above url should be visible in section below the form
}