

//adding in JS
function addition_Function() {
    var addition = 55+63;
    document.getElementById("math").innerHTML="55+63="+addition;
}
//subtracting in JS
function subtraction_Function() {
    var subtraction = 63-55;
    document.getElementById("substraction").innerHTML="63-55="+subtraction;
}
//multiplying in JS
function multiplication_Function() {
    var multiplication = 5*10;
    document.getElementById("multiplication").innerHTML="5*10="+multiplication;
}
//Dividing in JS
function division_Function() {
    var division = 8/8;
    document.getElementById("division").innerHTML="8/8="+division;
}
//Math functions all together
function more_Math() {
    var simple_Math=1+2*10/2-5;
    document.getElementById("simplemath").innerHTML="1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " +simple_Math;
}
//Remainder function 
function modulus_Operator() {
    var simple_Math=25%6;
    document.getElementById("Math").innerHTML="When you divide 25 by 6 you have a remainder of: " +simple_Math;
}
//Negative function
function negative_Operator() {
    var x=10;
    document.getElementById("negative-math").innerHTML=-x;
}
//Incremting function
function increment_Operator(){
    var X=5;
    X++;
    document.getElementById("plus").innerHTML=(X);
}
//Decrementing function
function decrement_Operator(){
    var Y=5.25;
    Y--;
    document.getElementById("minus").innerHTML=(Y);
}
//window alert for random number - fun!
window.alert(Math.random() *200)
//Rounding number up in Math Object function
function  math_Round(){
    document.getElementById("rounding-math").innerHTML = Math.round(8.8);
}





















