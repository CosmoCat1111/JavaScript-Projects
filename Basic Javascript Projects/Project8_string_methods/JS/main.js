

//concat() method
function full_sentence() {
    var part_1 = "My favourite day ";
    var part_2 = "is coming up....";
    var part_3 = "and it's April Fools!";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("StringMethod").innerHTML = whole_sentence;
}

//slice() method
function slice_Method() {
    var sentence = "Slice thick or thinly";
    var section = sentence.slice(7, 18);
    document.getElementById("Sliceup").innerHTML = section;
}

//toString() method
function string_Method(){
    var X = 555;
    document.getElementById("Numbersbyme").innerHTML = X.toString();
}


//calling .toPrecision method
function precision_Method() {
    var X = 234.5678901
    document.getElementById("Precise").innerHTML = X.toPrecision(8);
}

