let add = document.getElementById('add');
let sub = document.getElementById('sub');
let mul = document.getElementById('mul');
let division = document.getElementById('division');
let result = document.querySelector('#result');
add.addEventListener('click', addFn);
function addFn(){
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    result.innerHTML = `Result: ${num1 +num2}`;
}
sub.addEventListener('click',subFn);
function subFn() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    result.innerHTML = `Result: ${num1 - num2}`;
}
mul.addEventListener('click',mulFn);
function mulFn() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    result.innerHTML = `Result: ${num1 * num2}`;
}
division.addEventListener('click',divisionFn);
function divisionFn() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    result.innerHTML = `Result: ${num1 / num2}`;
}