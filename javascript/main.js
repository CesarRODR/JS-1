let NombreUsuario = prompt("Ingrese nombre de usuario");

if (NombreUsuario == ""){
    alert("nombre de usuario no valido");

}
else {
    alert("bienvenido " +NombreUsuario);
}



let articulos = prompt ("Lista de precios de: \n 1-dvr 16ch\n 2-HDD1TB\n 3-CamaraBullet\n 4-CamaraDomo");

if (articulos == 1){
    alert("Dvr 16ch hikvision full HD $ 98000");
}
else if(articulos == 2){
    alert("Disco rigido 1TB WD purple $ 30000");
}
else if(articulos == "3"){
    alert("Camara tipo bullet 1080p lente 2,6mm $15000");
}
else if(articulos == "4"){
    alert("Camara tipo domo 1080p lente 2,6mm $17999");
}
else{
    alert("Codigo invalido");
}