
function sumar() {
    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);
    if(isNaN(num1) || isNaN(num2)){
        document.getElementById("resultado").innerText = "Ingrese solo números para poder operar"
    } else{
        let resultado = num1 + num2;
        document.getElementById("resultado").innerText = resultado;
        console.log(resultado);
    }
}

function restar() {
    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);
    if(isNaN(num1) || isNaN(num2)){
        document.getElementById("resultado").innerText = "Ingrese solo números para poder operar"
    } else{
    let resultado = num1 - num2;
    document.getElementById("resultado").innerText = resultado;
    }
}

function multiplicar() {
    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);
    if(isNaN(num1) || isNaN(num2)){
        document.getElementById("resultado").innerText = "Ingrese solo números para poder operar"
    } else{
    let resultado = num1 * num2;
    document.getElementById("resultado").innerText = resultado;
    }
}

function dividir() {
    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);
    if (num2 == 0) {
        let resultado = document.getElementById("resultado");
        resultado.innerText = "No se puede dividir por cero (0)"
    } else if(isNaN(num1) || isNaN(num2)){
        document.getElementById("resultado").innerText = "Ingrese solo números para poder operar"
    } else {
        let resultado = num1 / num2;
        document.getElementById("resultado").innerText = resultado;
    }

}