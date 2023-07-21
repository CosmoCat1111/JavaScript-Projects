

function my_Dictionary() {
    var animal = {
        Species:"Dog",
        Color:"Chocolate",
        Breed:"Lab",
        Age: 3,
        Sound:"Bark!"
    };
    delete animal.Sound; //deletes the key and returns a 'undefined' response
    document.getElementById("DogDictionary").innerHTML = animal.Sound;
}

function my_Dictionary2() {
    var animal = {
        Species:"Cat",
        Color:"Blue",
        Color:"Grey",
        Breed:"Russian",
        Age: 2,
        Sound:"Meow!"
    };
    document.getElementById("CatDictionary").innerHTML = animal.Color;
}