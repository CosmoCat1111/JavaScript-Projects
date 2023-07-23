
//while loop
function Call_Loop() {
    var Digit = "";
    var X = 42;
    while (X < 50) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//loop program
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[ Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//array function
function bird_array() {
    var Bird = [];
    Bird[0] = "Eagle";
    Bird[1] = "Robin";
    Bird[2] = "BlueJay";
    Bird[3] = "Stirling";
    Bird[4] = "Raven";
    Bird[5] = "Hawk";
    document.getElementById("Array").innerHTML = "My favorite bird is " + Bird[4] + ".";
}

function truck() {
    let truck = {
        make: "Dodge",
        year: "2022",
        color: "Brown",
    };
    document.getElementById("Truck").innerHTML = "I have a " + truck.year + " " + truck.color + " " + truck.make + " ";
}


    let truck2 = {
        make: "Dodge",
        year: "2032",
        color: "Green",
        description : function() {
        return "The truck is a "  + this.year + this.color + this.make;
    }
};
    document.getElementById("Truck2").innerHTML = truck2.description();
