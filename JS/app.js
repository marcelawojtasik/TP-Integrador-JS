
function resumen(){
  //Muestro en consola cantidad de entradas a comprar
  let cant = document.getElementById('cantidad').value;
  console.log("Cantidad elegida: "+cant);
    
  //Muestro en consola categoria de entrada elegida 
  var cat = document.getElementById("categoria");
  cat.addEventListener("change",
  function(){
  var selectedOption = this.options[cat.selectedIndex];
  console.log('Categoria: ' + selectedOption.text);
  });

 //Calculo e imprimo por consola precio x entrada en funcion de opcion elegida
  var selected = document.querySelector("select");
  selected.addEventListener('change', (event)=>{
  var seleccionado = event.target.value; 
  
  //Muestro en consola precio por categoria
  let precioEst = 200*0.2;
  console.log ("Precio Estudiantes: $" + precioEst);
  let precioTra = 200*0.5;
  console.log ("Precio Trainees: $" + precioTra);
  let precioJun = 200*0.85;
  console.log ("Precio Juniors: $" + precioJun);
 
  //Muestro en consola precio x cantidad de entradas  
  let total = 0;
  if (seleccionado === 'estudiante'){
    console.log('Precio por entrada: $ '+200*0.2);
    total = (precioEst) * (cant);
    console.log("Total: $" + total)
  }
  else if (seleccionado === 'trainee'){
    console.log('Precio por entrada: $ '+200*0.5)
    ;
    total = parseInt(precioTra) * parseInt(cant);
    console.log("Total: $" + total)}
  else {
    console.log('Precio por entrada: $ '+200*0.85);
    total = parseInt(precioJun) * parseInt(cant);
    console.log("Total: $" + total)}     
    //Muestro en consola el total a pagar  
    console.log(total);    
    document.getElementById('totalAPagar').innerHTML = "Total a pagar: $" + total;      
})
}

