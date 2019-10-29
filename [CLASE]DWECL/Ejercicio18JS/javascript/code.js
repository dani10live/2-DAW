var lineaInputText1 = ""; //una String en la cual iran todos los numeros a lo que realizar operaciones
var lineaInputText2 = ""; //una String en la cual iran todos los numeros a lo que realizar operaciones
var operacion = ""; //el signo de la operacion que vamos a usar
var memoria = ""; // variable que se ocupa de lo que este en memoria 

//disable + - * /

function numeroPulsado(numero) {//controlar varios puntos
    //lineaInputText1 += numero;//cambiar lineaInputText por ta1.value
    return numero;
}

function operacionPulsada(signo) {//comporbar simbolo si lineaInputText1 esta vacío
    lineaInputText2 = lineaInputText1;
    lineaInputText1 = "";
    operacion = signo;
    return operacion;
}

function resuelveOperacion() {
    var num1 = parseFloat(lineaInputText2);
    var num2 = parseFloat(lineaInputText1);//Controlar la Devolucion de NaN
    switch (operacion) {//resolver operacion antes de mostrar y terminar(si operacion no es vacio resolver)
        case '+':
            lineaInputText1 = String(num1 + num2);
            lineaInputText2 = "";
            operacion = "";
            return lineaInputText1;//optimizar lineas y poner solo una + un return
        case '-':
            lineaInputText1 = String(num1 - num2);
            lineaInputText2 = ""
            operacion = ""
            return lineaInputText1;
        case 'x':
            lineaInputText1 = String(num1 * num2);
            lineaInputText2 = ""
            operacion = ""
            return lineaInputText1;
        case '/'://comprobar la division por 0
            lineaInputText1 = String(num1 / num2);
            lineaInputText2 = ""
            operacion = ""
            return lineaInputText1;
        case '':
            return lineaInputText1;
    }
}

function memoriaCalc(num) {
    if (num == 0) {
        memoria = lineaInputText1
        lineaInputText1 = ""
        return ""
    } else if (num == 1) {//hacer dos funciones esto no 
        if (memoria != "") {
            lineaInputText1 = memoria
            return lineaInputText1
        } else return ""
    }
}

function borraCalc() {
    lineaInputText1 = ""
    lineaInputText2 = ""
    operacion = ""
    return "";
}

function abrirLupa() {
    var myWindow = window.open("xx.html", "XX.html", "width=300,height=200");
    myWindow.document.write('<html><body><p style="font-size: 8em;">' + ta1.value + '</p></body></html>')
}
