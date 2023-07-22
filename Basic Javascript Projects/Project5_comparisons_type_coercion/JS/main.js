
//typeof
document.write(typeof 8)

//coercion
document.write("1300"+55);

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

//True result in NaN
function my_Function1() {
document.getElementById("Test1").innerHTML = isNaN('Sunshine and lollipops');
}
//False result in NaN
function my_Function2() {
document.getElementById("Test2").innerHTML = isNaN('555');
} 

document.write(2E310)

document.write(-3E310);

document.write(5E310);

document.write(-5E310);

document.write(22>11);

document.write(22<11);

console.log(2+2);

console.log(2>5);
//triple equals checks for same value and types
document.write(5==5);

//boolen logic for triple equals (checks for same value and types)
s = 22;
a = 22;
document.write(s === a);


m = sarah;
n = 56;
document.write(sarah === 56);

f = ten;
e = 10;
document.write(ten === 10);

x = 55;
y = 33;
document.write(x === y);

//boolen AND and OR logic elements for a true or false

document.write(5 > 1 && 7 > 4); 
document.write(11 > 10 || 10 > 3);

//not function showing false element 
function not_Function1() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}
//not function showing true element
function not_Function2() {
    document.getElementById("Not2").innerHTML = !(20 < 10);
}




