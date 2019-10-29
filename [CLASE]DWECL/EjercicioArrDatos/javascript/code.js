var datos = new Array("Linares","Jaen","Ubeda","Baeza","Vilches","Navas");

function verDatos() {
    var cadena = ""
    for(let i=0;i<datos.length;i++) {
       cadena += (i+1)+". "+datos[i]+"\n"; 
    };
    return cadena;
}

function BorraDato(dato){
    for(let i=0;i<datos.length;i++) {
        if(datos[i]==dato){
            datos[i] = datos[datos.length];
            datos.splice(-1,1);
        }
    }
}