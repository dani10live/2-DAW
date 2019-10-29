(function () {
    var numeros = [];
    var indice = 0;
    do {
        var sw = 0;
        var introducir = window.prompt("Introduzca un numero ('fin' para salir):");
        var num = parseInt(introducir, 10);
        if (num == introducir) {
            numeros[indice] = introducir;
            indice += 1;
        } else {
            if (introducir == "fin") {
                sw = 1;
            } else {
                window.alert("No ha introducido un numero.");
            }
        }
    } while (sw === 0);
    numeros.sort();
    var lista = document.createElement('ul');
    document.getElementById('creaElemento').appendChild(lista);
    numeros.forEach(escribir);


    function escribir(objeto, i, arr) {
        var ultimo = arr.length - 1;
        var elementoLista = document.createElement('li');

        switch (i) {
            case 0:
                elementoLista.style.color = "red";
                break;
            case ultimo:
                elementoLista.style.color = "green";
                break;
            default:
                elementoLista.style.color = "black";
                break;
        }
        lista.appendChild(elementoLista);
        var t = document.createTextNode(objeto);
        elementoLista.innerHTML = elementoLista.innerHTML + objeto;
    }
})();
