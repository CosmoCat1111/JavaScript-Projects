
function Ahoy_Matey_Function() {                /*function creating a button event*/
    var str = "Ahoy, This is the button Text!";
    document.getElementById("Button_Text").innerHTML=str;
}


function Puppy_Love_Function() {                /*function creating a touch event response*/
    var str = "Thanks for the love!";
    document.getElementById("Event_Text").innerHTML=str;
}

function myFunction() {
    var sentence = "Puppies are amazing,";              /*first sentense to extent next into next line */
    sentence += " how can anyone resist!";              /*+= operator creates a concatenate string*/
    document.getElementById("Concatenate").innerHTML = sentence;        /*element calling ID within the function*/
}  