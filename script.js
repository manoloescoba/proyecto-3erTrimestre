
/*Función de la calculadora*/

function calcular() {
      const precioUnitario =
        parseFloat(document.getElementById("producto").value) || 0;

      const cantidad =
        parseInt(document.getElementById("cantidad").value) || 0;

      const iva =
        (parseFloat(document.getElementById("iva").value) || 0) / 100;

      const subtotalSinIva = precioUnitario * cantidad;
      const subtotalConIva = subtotalSinIva * (1 + iva);

      document.getElementById("precioSinIva").textContent =
        subtotalSinIva.toFixed(2) + " €";

      document.getElementById("precioConIva").textContent =
        subtotalConIva.toFixed(2) + " €";
    }

    /*Recalcula automáticamente los valores*/
    document
      .getElementById("producto")
      .addEventListener("change", calcular);

    document
      .getElementById("cantidad")
      .addEventListener("input", calcular);

    document
      .getElementById("iva")
      .addEventListener("input", calcular);


/*  
    La función realiza las siguientes tres operaciones:

    1. Convierte el producto seleccionado a un número (flotante o íntegro)
    2. La cantidad a un número (flotante o íntegro)
    3. El IVA introducido a un número (flotante o íntegro)

    Con estos 3 números:

    1. Multiplica el precio unitario por la cantidad para obtener el precio sin IVA
    2. Multiplica el precio sin IVA por el porcentaje de IVA para obtener el precio con IVA

    Devuelve el número obtenido en forma de texto
  
*/

      
/*parseFloat convierte el string a un número de coma flotante*/
/*parseInt convierte el string a número íntegro*/


/*Cálculo inicial*/

  calcular();



/*------------------------*/

    /*Función de cambio de imágenes/**/

    function cambiarImagen(nuevaImagen) {
    /*Selecciona la imagen principal*/
    const imagenPrincipal = document.getElementById("mainImage");

    /*Reemplaza la imagen por la imagen seleccionada*/
    imagenPrincipal.src = nuevaImagen;
  }

/*Función para evitar el reset de la página al hacer click en el formulario de envio*/

document.getElementById("envio").addEventListener("click", function(event){
  event.preventDefault()
});