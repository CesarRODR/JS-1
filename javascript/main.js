let NombreUsuario = prompt("Ingrese nombre de usuario");

if (NombreUsuario == ""){
    alert("nombre de usuario no valido");

}
else {
    alert("bienvenido " +NombreUsuario);
}



/* let articulos = prompt ("Lista de precios de: \n 1-dvr 16ch\n 2-HDD1TB\n 3-CamaraBullet\n 4-CamaraDomo");

if (articulos == 1){
    alert("Dvr 16ch hikvision full HD $ 98000,99");
}
else if(articulos == 2){
    alert("Disco rigido 1TB WD purple $ 30500,50");
}
else if(articulos == "3"){
    alert("Camara tipo bullet 1080p lente 2,6mm $13299,50");
}
else if(articulos == "4"){
    alert("Camara tipo domo 1080p lente 2,6mm $17999,99");
}
else{
    alert("Codigo invalido");
} */


let productos = prompt("Eleige un producto de la lista para ver precio y descripcion \n 1-dvr \n 2-camara-d \n 3-camara-b \n 4-hdd \n (s - para salir)");

while (productos != "s"){
     switch (productos){
        case "1":
            console.log("dvr 16ch hikvision full hd $88699.99")
            break;
        case "2":
            console.log("camara tipo domo 1080p lente 2,6mm $13500,50")
            break;
        case "3":
            console.log("camara tipo bullet 1080p lente 3,6mm $15500,50")
            break;
        case "4":
            console.log("disco rigido 1TB WD-purple para video vigilancia $23650,99")
            break;   
        default:
            console.log("producto sin stock");
            break;              
     }



     productos = prompt("Eleige un producto de la lista para ver precio y descripcion \n 1-dvr \n 2-camara-d \n 3-camara-b \n 4-hdd \n (s - para salir)");
}

function sumar() { 
   let total = sumaProducto1 + sumaProducto2;
   alert("el total es $ " + total);
   
    
}
 let sumaProducto1 = parseInt(prompt("ingresar precio de producto"));
 let sumaProducto2 = parseInt(prompt("ingresar precio de producto"));
 sumar(sumaProducto1 + sumaProducto2);