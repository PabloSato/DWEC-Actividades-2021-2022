//Funcion para validar el formulario como en AJAX
function validar() {
    //Expresiones regulares a usar
    const nomPrim = /^[A-Z]/; //Q empieze por mayusculas
    const sinNum = /\D/; //--> [0-9]
    const soloDiez = /^\d{10}$/; //ACEPTAMOS TELEFONOS DE 10 DIGITOS
    const soloNueve = /^\d{9}$/; //ACEPTAMOS TELEFONOS DE 9 DIGITOS
    const prefijNue = /^9/; //Que empiece por el 9
    const prefijOcho = /^8/; //Que empiece por el 8
    const prefijMov = /^6/; //Que empiece por el 6
    const mailRe = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]/; // expresion regular para email
    const espacioBlanco = /\s/; //que haya espacios en blanco entre los caracteres
  
    //Validacion de input nombre
    if (nombre.value.trim() == "" || !nomPrim.test(nombre.value.trim())) {
      //Si no está vacio el input, ni empieza con minusculas, soltamos un alert
      alert("Debe introducir su nombre, la primera letra con mayuscula");
      nombre.focus(); //Hacemos foco sobre el input nombre
      return false; // devolvemos false
    }
    //Validacion de input direccion
    if (direc.value.trim() == "") {
      //Si no está vacio el input, soltamos un alert
      alert("Debe introducir su direccion");
      direc.focus(); //Hacemos foco sobre el input de direccion
      return false; // devolvemos false
    }
    //Validacion de input Telefono
    if (
      (!prefijNue.test(telf.value.trim()) && //si no empieza por 9 (prefijo)
        !prefijOcho.test(telf.value.trim()) && //y si no empieza por 8 (prefijo)
        !prefijMov.test(telf.value.trim())) || //y si no empieza por 6 (prefijo)
      telf.value.trim() == "" || //o si está vacío
      sinNum.test(telf.value.trim()) || //o tiene carctéres no numéricos
      (!soloNueve.test(telf.value.trim()) && !soloDiez.test(telf.value.trim())) //o no es un numero entre 9 y 10 cifras
    ) {
      //Soltamos un alert
      alert("Debe introducir su telefono");
      telf.focus(); //Hacemos foco sobre el input de teefono
      telf.value = ""; //Vaciamos el input
      return false; // devolvemos false
    }
    //Validacion de email
    if (
      mail.value.trim() == "" || //si no está vacio
      !mailRe.test(mail.value.trim()) || // si no cumple la expresión regular para el mail
      espacioBlanco.test(mail.value.trim()) // si tiene espacios en blanco
    ) {
      //Soltamos un alert
      alert("Debe introducir su email");
      mail.focus(); //Hacemos foco sobre el input mail
      return false; // devovlemos un false
    }
    //Comprobamos que solo haya un @
    var arroba = 0;
    var str = mail.value.trim();
    for (let i = 0; i < str.length; i++) {
      //recorremos el input
      if (str[i].includes("@")) {
        //si algun carctér es un @
        arroba++; //subimos el contador
      }
    }
    if (arroba > 1) {
      //si hay mas de 1
      //soltamos un alert
      alert("Debe introducir su email, con una @ crack!");
      mail.focus(); //Hacemos foco sobre el input mail
      return false; // devovlemos un false
    }
    //Validamos que haya escogido un tamaño de la pizza
    let size = document.getElementsByName("size"); //guardamos en un array todos los input radio
    let mark = false; //creamos una bandera
    let tamano = ""; //creamos una variable vacia para guardar el valor
    for (let i = 0; i < size.length; i++) {
      //recorremos el array de tamaños
      if (size[i].checked) {
        //si algun tamaño está seleccionado
        mark = true; //ponemos la bandera en true
        tamano = size[i].value; //guardamos el valor del input en la variable
        break;
      }
    }
    if (!mark) {
      //Si ningun tamaño está marcado, soltamos un alert
      alert("Debe de elegir el tamaño de la pizza");
      return false; //devolvemos un false
    }
    //Validamos los ingredientes
    if (!york.checked && !bacon.checked && !champ.checked && !pina.checked) {
      //si no hay ningun ingrediente seleccionado, soltamos un alert
      alert("Debe seleccionar algún ingrediente");
      return false; //devolvemos false
    }
  }

const URL_DESTINO = "http://localhost:5500/"; //direccion del HTML
const DATOS = "pizza.json"; //direccion del JSON

$(inicio);

//funcion arranca una vez cargada la página.  window.onload=function inicio()
function inicio() {
    miPeticionAjax();
    $("#sacarPrecio").click(procesarPedido); //sacar precio al pulsar procesar pedido
    $("#reset").click(resetear); //borrar parametro y empezar de cero
    $("#refrescar").click(miPeticionAjax); //refrescar página
    formulario.onsubmit=validar; //validar datos del fomulario antes de mandar los datos
}

//XMLHttpRequest() en JQuery 
function miPeticionAjax(){
    $.ajax({
        'type': 'GET', //o POST, DELETE, PUT
        'url': URL_DESTINO + DATOS,  //DATOS = http://localhost:5500/pizza.json
        'async': true //PUEDE BORRAR AL NO PERMITIR SINCRONO
    }).done(mostrarDatos).fail(procesarError);
}

//si salta el Fail nos retorna el alert de ERROR
function procesarError(){
    alert('ERROR')
}
//metemos los datos del JSON en los input
function mostrarDatos(pizza){
    var listaSize = pizza.PIZZA.SIZE;
    var listaIngre = pizza.PIZZA.INGRE;
    console.log(listaSize)
    console.log(listaIngre)
    resetear();
    $("#tam").html(""); //vaciamos el HTML dentro del <DIV id="tam">

    //Creamos un for para poner los input con su texto del tamaño de la pizza
    $.each(listaSize,function(i, ele){
        let input = $('<input>');
        let textInput = ele.TAM;
        //usamos la posicion 0 siempre del array
        input[0].type="radio";
        input[0].className = "inputRadio";
        input[0].name = "size";
        input[0].id = `size_${ele.TAM}`; //alternativa concatenamos String + JSON "size_" + ele.TAM
        input[0].value = ele.TAM;
        input[0].precio = ele.PRECIO; //creamos un atributo de precio ..no es muy limpio pero funciona
        //metemos los textos de las etiquetas
        tam.append(input[0]); //Etiqueta input con sus atributos
        tam.append(textInput); //el texto entre las etiquetas <input>
    })
//Creamos un for para poner los input con su texto de los ingredientes de las pizzas
    $("#ingre").html("");
    $.each(listaIngre, function(i,ele){
        let input = $('<input>');
        let textInput = ele.NOMBRE;

        input[0].type="checkbox";
        input[0].className="inputCheck";
        input[0].name = ele.NOMBRE;
        input[0].id = ele.NOMBRE;
        input[0].value = ele.NOMBRE;
        input[0].precio = ele.PRECIO; //creamos un atributo de precio para cada ingrediente

        ingre.append(input[0]); //escribimos <input type="checkbox"......value=" York">
        ingre.append(textInput); //escribimos el Nombre ingrediente
        console.log(input[0]);
    })
}
//creamos funcion para meter texto debajo del <form> para sacar 
//las casracteristicas selecionadas en los input
    function procesarPedido(){
        $("#parrafo").html("");
        let inputRadio = $("input[type=radio]:checked");
        let pizzaPrecio = 0;
        let inputCheckbox = $("input[type=checkbox]:checked");
        let ingredientePrecio = 0;
        let ingredientes = [];
//recorremos con el for el precio de las pizzas y la añadimos a un array
        $.each(inputRadio, function(i, ele){
            pizzaPrecio=inputRadio[0].precio;
        });
//recorremos con for el precio e ingrediente de los ingredientes
        $.each(inputCheckbox, function(i, ele){
            ingredientePrecio += inputCheckbox[i].precio;//sumamos los precios para el total
            //creamos variable string con (ingrediente+precio+€)
            let string=inputCheckbox[i].value + " " + inputCheckbox[i].precio+"€";
            ingredientes.push(string); //pasamos el array al string
        });
//vamos con el paso de sumar todos los precios y dar un total
        let precioTotal=pizzaPrecio+ingredientePrecio; //variable con el total
//insertamos en un <p> el texto con la frase de todos los datos a sacar       
        parrafo.append(`Tu pizza ${inputRadio[0].value} vale ${pizzaPrecio} € 
        de ${ingredientes}con precio total de ${precioTotal}€.`);
    }
//funcion para borrar el parrafo de la linea 188 para no duplicar resultados
    function resetear(){
        $(`#parrafo`).html("");
    }
