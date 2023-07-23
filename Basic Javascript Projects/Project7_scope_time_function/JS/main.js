
//global variable program
var X = 10;
function Add_numbers_1() {
    var X = 99;
    document.write(20 + X + "<br>");
}

function Add_numbers_2() {
    document.write(X + 100);
    console.log(X);
}

Add_numbers_1();
Add_numbers_2();

//local variable program
function Add_numbers_1() {
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_2(){
    console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2();




// functions with dates and time
function date_Me() {
    if (new Date().getHours() <23) {
        document.getElementById("Dates").innerHTML = "How are you today?";
    }
}


function drive_with_Me() {
    if(new Date().getHours() <23) {
        document.getElementById("Test_Drive").innerHTML = "Want to go for a spin?";
    }
}


//A function that includes an if statement
function Time_Function1() {
    if (get_Date().getHours() <23) { 
        document.getElementById("What_time_is_it?").innerHTML = "It's before midnight right now!";
    }
}

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is Afternoon!"
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}