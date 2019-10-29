var texto = 0;
    var cache = 0;
        function imprimir(){
            document.getElementById("variable1").value = "texto: "+texto;
            document.getElementById("variable2").value = "cache: "+cache;
        }
        function valor(n){
            if (n<=10){
                if(n==0){
                    texto=0;
                }else{
                    texto=n;
                }   
            }else{
                texto=texto+''+n;
            }
            document.getElementById("pantalla").value = texto;
            imprimir()
        }
        function cuenta(p){
            switch(p){
                case 1:
                    //suma
                    cache = cache + texto;
                    texto = '';
                    document.getElementById("pantalla").value=cache;
                    imprimir()
                    break;
                case 2:
                    //resta
                    document.getElementById("pantalla").value=" ";
                    cache = cache - texto;
                    texto = 0;
                    imprimir()
                    break;
                case 3:
                    //multiplicacion
                    document.getElementById("pantalla").value=" ";
                    cache = cache * texto;
                    texto = 0;
                    imprimir()
                    break;
                case 4:
                    //division
                    document.getElementById("pantalla").value=" ";
                    cache = cache / texto;
                    texto = 0;
                    imprimir()
                    break; 
                case 5:
                    document.getElementById("pantalla").value= cache;
                    imprimir()
                    break;
                case 6:
                    cache= 0;
                    texto= 0;
                    document.getElementById("pantalla").value= cache;
                    imprimir()
                    break;
            }
        }