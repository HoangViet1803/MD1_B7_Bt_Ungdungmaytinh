let result = '';

function display(input) {
    let a = document.getElementById(input).value;
    result += a;
    document.getElementById('result').innerHTML = result;
}

function cal() {
    let ketQua = eval(result);
    result = ketQua;
    document.getElementById('result').innerHTML = ketQua;

}

function dele() {
    document.getElementById('result').innerHTML = '0';
    result = '';
}