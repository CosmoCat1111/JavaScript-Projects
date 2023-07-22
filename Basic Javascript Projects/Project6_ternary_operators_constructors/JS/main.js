
//Ternary operator program
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
//example of Ternary operators
function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Vote").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementByIdk("Vote").innerHTML = Can_vote + " to ride.";
}
//constructor program using keywords
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trial Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + 
    Erik.Vehicle_Color + 
    "-colored " + 
    Erik.Vehicle_Model +
    " manufactered in " + 
    Erik.Vehicle_Year;
}

//keyword assignment
function Animal(Bread, Gender, Age, Color) {
    this.Animal_Bread = Bread;
    this.Animal_Gender = Gender;
    this.Animal_Age = Age;
    this.Animal_Color = Color;
}
var Jacob = new Animal("German Shepard", "Pure", 2022, "Black");
var Mila = new Animal("Poodle", "Miniture", 2023, "Chocolate");
var Nora = new Animal("Lab", "Pure short hair", 2023, "Golden");
function myFunction2() {
    document.getElementById("New_and_This").innerHTML =
    "Nora has a " + Nora.Animal_Color + "-colored " + Nora.Animal_Gender +
    " born in the year " + Nora.Animal_Age;
}

//assigning variable same as value

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
const myMother = new Person("Junie", "Bug", 55, "Blue")
document.getElementById("Persons").innerHTML = 
"My Mother is " = "myMother.age" + ".";


//using nested functions

function nesting_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

