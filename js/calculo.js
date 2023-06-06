let precio
let precioFinal
let helado = 900;
let topping = prompt("elija la opcion que desea comprar 1- Oreo, 2- KitKat, 3- Kinder");
if (topping == "Oreo"){
    precio = 10
    alert("el precio del topping Oreo es de $10");
}
else if(topping == "KitKat"){
    precio = 15
    alert("El precio del topping KitKat es de $15");
}
else if(topping == "Kinder"){
    precio = 25
    alert("El precio del topping Kinder es de $25");
}
if (topping == "Oreo" | topping == "KitKat" | topping == "Kinder"){
    precioFinal = (helado + precio);
}else{
    alert("no tenemos este topping");
}
/SWITCH/
let ejercicio = prompt("elija el menu que desea pedir 1- Carne, 2- Pescado, 3- Verdura");
switch (ejercicio){
    case "Carne" :
     alert("se ofrece con vino tinto");
    break;
    case "Pescado" :
     alert("se ofrece con vino blanco");
    break;
    case "Verdura" :
     alert("se ofrece con agua");
    break;
    case "" :
        alert("Elija carne, pescado o verdura")
}
/ARRAY/
let nombre = ["tomate", "lechuga", "cebolla", "pepino"];{
alert(nombre);
alert(nombre[0]);
alert(nombre[1]);
alert(nombre[2]);
alert(nombre[3]);
alert("Cantidad de nombres:", nombre.length);
for(let i = 0; i < nombre.length; i++){
    alert(nombre[i])
}
}