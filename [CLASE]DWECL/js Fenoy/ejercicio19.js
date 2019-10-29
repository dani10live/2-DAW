var array = ["Antes de llover chispea","A falta de pan, buenas son las tortas","A todo se aconstumbra uno menos a no comer","Si ya sabes como me pongo para que me invitas","El vino hay que beberselo rápido que pierde vitaminas","Vivimos en una sociedad que de día sale el sol","A caballo regalado no le mires el diente","Si ya sabes como me invitas para que me pongo","Antes de meter, prometer","Si hay cesped se juega el partido"];

var fotos = ["1.png","2.png","3.png","4.png","5.png"];
var img1,img2,img3,pa1,pa2,pa3,pa4,pa5;
function cambiar(){
    pa1=Math.floor(Math.random() * 10);
    pa2=Math.floor(Math.random() * 10);
    pa3=Math.floor(Math.random() * 10);
    pa4=Math.floor(Math.random() * 10);
    pa5=Math.floor(Math.random() * 10);
    
    document.getElementById("p1").textContent=array[pa1];
    document.getElementById("p2").textContent=array[pa2];
    document.getElementById("p3").textContent=array[pa3];
    document.getElementById("p4").textContent=array[pa4];
    document.getElementById("p5").textContent=array[pa5];
    console.log("----------------------------");
    console.log("el valor de pa1 es de "+pa1);
    console.log("el valor de pa2 es de "+pa2);
    console.log("el valor de pa3 es de "+pa3);
    console.log("el valor de pa4 es de "+pa4);
    console.log("el valor de pa5 es de "+pa5);
    console.log("----------------------------");
    
    img1 = Math.floor(Math.random()*5);
    img2 = Math.floor(Math.random()*5);
    img3 = Math.floor(Math.random()*5);
    document.getElementById("imagen1").src=""+fotos[img1];
    document.getElementById("imagen2").src=""+fotos[img2];
    document.getElementById("imagen3").src=""+fotos[img3];
}

function iniciar(){
    setInterval(cambiar,5000);
}

window.onload = iniciar();