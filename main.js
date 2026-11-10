alert("Bienvenido")

function saludarAprendices(){
    let estudiantes = ["Juanfer","Lenadro","Juan Jose","Andres Guillen","Richard","Dany Robles","Daniel Barbosa","Erika","Triviño","Santiago","Juan Pablo","Paula","Yen","juan Diego","Camilo","Julian","Angely","Amarillo","Tinoco","Rojas","Cedeño"];

 console.log("Arreglo completo:");
 console.log(estudiantes);

 console.log("Primer estudiante:", estudiantes[0]);

 console.log("Tercer estudiante:", estudiantes[2]);

 console.log("Último estudiante:", estudiantes[estudiantes.length - 1]);

 console.log("Cantidad de estudiantes:", estudiantes.length);

 console.log("Listado de estudiantes:");
 for (let i = 0; i < estudiantes.length; i++) {
    console.log("Posición " + i + ": " + estudiantes[i]);
 }

 let nuevo = prompt("Ingrese un nuevo estudiante:");
 estudiantes.push(nuevo);

 console.log("Nueva cantidad:", estudiantes.length);

 let buscar = prompt("Ingrese el estudiante a buscar:");

 if (estudiantes.includes(buscar)) {
    console.log("El estudiante sí está registrado.");
 } else {
    console.log("El estudiante no está registrado.");
 }

 console.log("Listado actualizado:");
 console.log(estudiantes);
    
    
}


function administracionProductos(){
    let productos = ["Arroz", "Azúcar", "Aceite", "Leche", "Huevos"];

 console.log("Productos registrados:");
 console.log(productos);
 //console.log("modificar el segundo producto")
 productos[1] = "Café";
 //console.log("agregar un producto al final utilizando push")
 productos.push("Galletas");
 //console.log("agregar un producto al inicio utilizando unshift")
 productos.unshift("Pan");

 console.log("Arreglo actualizado:");
 console.log(productos);

 let buscar = prompt("Ingrese un producto:");

 if (productos.includes(buscar)) {
    console.log("Producto encontrado.");
    console.log("Posición:", productos.indexOf(buscar));
 } else {
    console.log("Producto no registrado.");
 }

 let posicion = Number(prompt("Posición del producto a modificar:"));
 let nuevoProducto = prompt("Nuevo nombre:");

 productos[posicion] = nuevoProducto;

 productos.pop();

 console.log("Cantidad de productos:", productos.length);

 console.log("Listado final:");
 console.log(productos);
}


function eliminacionElementos(){
    let ciudades = ["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena", "Pasto"];
 //console.log("eliminar la ultima ciudad utilizando pop")
 ciudades.pop();
 //console.log("mostrar el arreglo actualizado")
 console.log(ciudades);
 //console.log("eliminar la primera ciudad utilizando shift")
 ciudades.shift();

 console.log(ciudades);

 ciudades.splice(3, 1);

 console.log(ciudades);

 ciudades.push("Bucaramanga");
 ciudades.push("Villavicencio");

 console.log("Cantidad:", ciudades.length);

 for (let i = 0; i < ciudades.length; i++) {
    console.log((i + 1) + ". " + ciudades[i]);
 }

 let buscar = prompt("Ingrese una ciudad:");

 if (ciudades.includes(buscar)) {
    console.log("La ciudad sí está registrada.");
 } else {
    console.log("La ciudad no está registrada.");
 }
}


function busquedaEstudiante(){
    let estudiantes = ["Juanfer","Lenadro","Juan Jose","Andres Guillen","Richard","Dany Robles","Daniel Barbosa","Erika","Triviño","Santiago","Juan Pablo","Paula","Yen","juan Diego","Camilo","Julian","Angely","Amarillo","Tinoco","Rojas","Cedeño"];

 let nombre = prompt("Ingrese un estudiante:");

 if (estudiantes.includes(nombre)) {
    console.log("El estudiante fue encontrado.");
    console.log("Posición:", estudiantes.indexOf(nombre));
 } else {
    console.log("No fue encontrado.");
 }

 let nombre2 = prompt("Ingrese otro estudiante:");

 if (estudiantes.includes(nombre2)) {
    console.log("Encontrado.");
 } else {
    console.log("No encontrado.");
 }

 let letra = prompt("Ingrese una letra:");

 let contador = 0;

 for (let estudiante of estudiantes) {
    if (estudiante.startsWith(letra)) {
        contador++;
    }
 }

 console.log("Cantidad de estudiantes que comienzan por esa letra:", contador);

 console.log("Listado:");

 for (let estudiante of estudiantes) {
    console.log(estudiante);
 }

 let nuevo = prompt("Nuevo estudiante:");

 if (!estudiantes.includes(nuevo)) {
    estudiantes.push(nuevo);
    console.log("Estudiante agregado.");
 } else {
    console.log("Ya existe.");
 }

 console.log(estudiantes);

 console.log("Cantidad total:", estudiantes.length);
}


function analisisNumeros(){
    let numeros = [12, -5, 8, 0, 25, -10, 18, 7, 3, 15];

 let suma = 0;
 let pares = 0;
 let impares = 0;
 let positivos = 0;
 let negativos = 0;
 let ceros = 0;

 let mayor = numeros[0];
 let menor = numeros[0];

 console.log("Números:");

 for (let i = 0; i < numeros.length; i++) {

    console.log(numeros[i]);

    suma += numeros[i];

    if (numeros[i] % 2 == 0) {
        pares++;
    } else {
        impares++;
    }

    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }

    if (numeros[i] < menor) {
        menor = numeros[i];
    }

    if (numeros[i] > 0) {
        positivos++;
    } else if (numeros[i] < 0) {
        negativos++;
    } else {
        ceros++;
    }

 }

 let promedio = suma / numeros.length;

 console.log("Suma:", suma);

 console.log("Promedio:", promedio);

 console.log("Pares:", pares);

 console.log("Impares:", impares);

 console.log("Mayor:", mayor);

 console.log("Menor:", menor);

 console.log("Positivos:", positivos);

 console.log("Negativos:", negativos);

 console.log("Ceros:", ceros);

 console.log("Mayores que el promedio:");

 for (let numero of numeros) {
    if (numero > promedio) {
        console.log(numero);
    }
 }

 let buscar = parseFloat(prompt("Ingrese un número:"));

 if (numeros.includes(buscar)) {
    console.log("El número existe.");
 } else {
    console.log("El número no existe.");
 }

 console.log("Orden inverso:");

 let inverso = [...numeros];
 inverso.reverse();
 console.log(inverso);

 console.log("Orden ascendente:");

 let ordenados = [...numeros];
 ordenados.sort(function(a, b) {
    return a - b;
 });
 console.log(ordenados);

 console.log("Arreglo original:");
 console.log(numeros);
}


function proyectoInmobiliaria(){
   let inmuebles=["casa en el centro","apartamento en Villeta","finca en payande","lote en cayunda","casa en san jorge","finca en bagazal","lote en la zona urbana","apartamento en opalo"];

   console.log("inmuebles disponibles");
   for(let i=0;i<inmuebles.length;i++){
      console.log(i + ". " + inmuebles[i]);
   }
   let posicion = parseFloat(prompt("ingrese la posicion del inmueble que desea consultar"));

   if(posicion>=0 && posicion<inmuebles.length){
      console.log("inmueble "+ inmuebles[posicion]);
   }else{
      console.log("posicion invalida");
   }
   
   console.log("cantidad de inmuebles disponibles "+ inmuebles.length)
   let inmuebles2=["casa en el centro - 3 habitaciones","apartamento en Villeta - 2 habitaciones","finca en payande - piscina y zonas verdes","lote en cayunda - 200 m2","casa en san jorge - 2 baños","finca en bagazal - amplia zona rural","lote en la zona urbana - 150 mt2","apartamento en opalo - 1 habitacion"];
   console.log("recorrido de inmuebles");
   for(let i=0; i<inmuebles.length;i++){
      console.log("inmuebles: "+ i +": " + inmuebles2[i]);
   }

   nuevo = prompt("ingrese el inmuble que desea vender o arrendar");
   inmuebles.push(nuevo)
   for(let i=0;i<inmuebles.length;i++){
      console.log(i + ". " + inmuebles[i]);
      
   }
   console.log("inmueble agregado correctamente");

   console.log("modificacion de inmueble");
   inmuebles[0]="finca las palmas";
   for(let i=0;i<inmuebles.length;i++){
      console.log(i + ". " + inmuebles[i]);
   }

   console.log("eliminacion de un inmueble en el indice 5");
   inmuebles.splice(5,1);
   for(let i=0;i<inmuebles.length;i++){
      console.log(i + ". " + inmuebles[i]);
   }

   console.log("busqueda de inmuebles");
   let buscar = prompt("Ingrese el inmueble que desea buscar:");

   if (inmuebles.includes(buscar)) {
    console.log("inmueble "+ buscar +" se encuentra registrado");
   } else {
    console.log("inmueble "+ buscar +" no se encuentra registrado");
   }

   console.log("listado actualizado");
   for(let i=0;i<inmuebles.length;i++){
      console.log(i + ". " + inmuebles[i]);
   }

   inmuebles.sort();
   console.log("inmuebles ordenados alfabeticamente");
   for(let i=0;i<inmuebles.length;i++){
      console.log(inmuebles[i]);
   }

   let listaInmuebles = inmuebles.join(", ");
   console.logS("lista de inmuebles "+ listaInmuebles);

}


//introduccion a objetos y JavaScript

function inventarioProductos(){
   const producto={
      nombre:"computador",
      marca:"DELL",
      precio:35000000,
      cantidad:25,
   }
   console.log(producto);
   console.log("nombre: "+ producto.nombre + " - marca: "+ producto.marca + " - precio: "+ producto.precio + " - cantidad: "+ producto.cantidad);

   const producto2={
      nombre2:"celular",
      marca2:"Apple",
      precio2:4000000,
      cantidad2:10,
   }
   console.log("nombre: "+ producto2.nombre2 + " - marca: "+ producto2.marca2 + " - precio: "+ producto2.precio2 + " - cantidad: "+ producto2.cantidad2);
}


function NombreEstudiante(){
   const estudiante={
      nombre:"Andres",
      apellido:"Guillen",
      edad:17,
      programa:"Analisis y desarrollo de software",
      ficha:353362,
      correo:"andresguillenmiranda@gmail.com"
   }
   //mostrar el objeto completo
   console.log(estudiante);
   //consultar el nombre y el apellido utilizando la notacion de un punto
   console.log(estudiante.nombre);
   console.log(estudiante.apellido);
   //consultar el programa de formacion utilizando corchetes
   console.log(estudiante["programa"]);
   //modificar la edad de un estudiante
   estudiante.edad=18;
   console.log(estudiante.edad);
   //agregar una propiedad llamada ciudad
   estudiante.ciudad="Villeta"
   console.log(estudiante.ciudad);
   //eliminar la propiedad del correo
   delete estudiante.correo;
   console.log(estudiante);
   //recorrer las propiedades de un objeto utilizando for...in
   for(let propiedad in estudiante){
      console.log(propiedad + " : "+ estudiante[propiedad]);
   }

   //mostrar el objeto actualizado
    for(let propiedad in estudiante){
      console.log(propiedad + " : "+ estudiante[propiedad]);
   }
}



function registroProducto(){
   let producto={
      codigo:201,
      nombre:"coca cola",
      categoria:"bebidas",
      precio:3500,
      cantidad:20,

      mostrarInformacion:function() {  
         console.log("informacion del producto");
         console.log("codigo: "+ producto.codigo + " - nombre: "+ producto.nombre + " - marca: "+ producto.marca + " - precio: "+ producto.precio + " - cantidad: "+ producto.cantidad + " - categoria: "+ producto.categoria)
      }
   }
   //mostrar la informacion completa de cada producto
   console.log(producto);
   //calcular el valor total del inventario multiplicando el precio por la cantidad disponible
   let inventario=producto.precio*producto.cantidad;
   console.log("el precio del inventario es $"+ inventario);
   //modificar el precio del producto
   producto.precio=4500;
   console.log(producto.precio);
   //actualizar la cantidad disponble
   producto.cantidad=15;
   console.log(producto.cantidad);
   //agregar una propiedad llamada marca
   producto.marca="supermarket";
   console.log(producto.marca);
   //Crear un método llamado mostrarInformacion() que permita mostrar los datos principales del producto. 
   
   producto.mostrarInformacion()
   console.log(producto);
}


function gestionarPersona(){
   let persona={
      nombre:"Andres",
      edad:17,
      genero:"masculino",
      saludar:function(){
         console.log("Hola,Soy "+ this.nombre + " tengo "+ this.edad + " años soy de genero "+ this.genero );
      }
   }
   console.log(persona);
   persona.saludar()
}


function gestionarProductos(){
   let producto={
      nombre:"mouse",
      precio:50000,
      cantidad:12,
      mostrarinfo:function(){
         console.log("nombre: "+ this.nombre)
         console.log("precio: "+ this.precio)
         console.log("disponibles: "+ this.cantidad)
         console.log("total inventario: "+ producto.precio*producto.cantidad);
      }
   }
   producto.mostrarinfo();
}


function gestionarEmpleados(){
   const empleado={
      nombre:"Christian",
      cargo:"contador",
      salarioMensual:2500000,  
      diasTrabajados:27,
      porcentajeDescuento:0.04,
      calculoSalario:function(){
         let salarioDia=this.salarioMensual/30;
         let salarioSD=salarioDia*this.diasTrabajados;
         console.log("salario de un dia "+ this.salarioMensual/30); 
         console.log("el total del salario sin el descuento es "+  (this.salarioMensual/30)*this.diasTrabajados);
         return parseInt(salarioDia);
      },
      calculoDescuento:function(){
         let porcentajeD=(this.salarioMensual/30)*this.diasTrabajados*0.04;
         console.log("el porcentaje de descuento es "+ porcentajeD);
         console.log("el porcentaje de descuento es "+ (this.salarioMensual/30)* this.diasTrabajados*this.porcentajeDescuento);
         return parseInt(porcentajeD);
      },
      calculoTotalApagar:function(){
         let porcentajeD=(this.salarioMensual/30)*this.diasTrabajados*0.04;
         let total=  (this.salarioMensual/30)*this.diasTrabajados-porcentajeD;
         console.log("el total a pagar del salario del empleado es "+ total);
      }
   }
   empleado.calculoSalario()
   empleado.calculoDescuento()
   empleado.calculoTotalApagar()
}


//arreglo de objetos


function calcularSalarioEmpleado2(){
   const empleado={
      nombre :prompt("ingrese su nombre"),
      cargo :prompt("ingrese su cargo"),
      salarioMensual :parseInt(prompt("ingrese su salario mensual")),
      diasTrabajados: parseInt(prompt("ingrese la cantidad de dias que trabajo en el mes")),
      porcentajeDescuento:0.04,
      calculoSalario:function(){
         let salarioDia=this.salarioMensual/30;
         let salarioSD=salarioDia*this.diasTrabajados;
         console.log("salario de un dia "+ this.salarioMensual/30); 
         console.log("el total del salario sin el descuento es "+  (this.salarioMensual/30)*this.diasTrabajados); 
      },
      calculoDescuento:function(){
         let porcentajeD=(this.salarioMensual/30)*this.diasTrabajados*0.04;
         console.log("el porcentaje de descuento es "+ porcentajeD);
         console.log("el porcentaje de descuento es "+ (this.salarioMensual/30)* this.diasTrabajados*this.porcentajeDescuento);
         return parseInt(porcentajeD);
      },
      calculoTotalApagar:function(){
         let porcentajeD=(this.salarioMensual/30)*this.diasTrabajados*0.04;
         let total=  (this.salarioMensual/30)*this.diasTrabajados-porcentajeD;
         console.log("el total a pagar del salario del empleado es "+ total);
      }
   }
   alert(empleado.calculoSalario());
   alert(empleado.calculoDescuento());
   alert(empleado.calculoTotalApagar());
}