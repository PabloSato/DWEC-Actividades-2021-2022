//funcion validar del ejercicio anteriorpara validacion del formulario
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
const URL_DESTINO = "http://localhost:5501/"; //direccion HTML
const DATOS = "pizza.json"; //direccion JSON
//HTTP STATUS:
//200: 'OK'
// 403: 'Forbidden'
// 404: 'Not found'

//readeyState values:
//0: Petición no inicializada
//1: Conexion establecida con el servidor
//2: Petición recibida
//3: Procesando la petición
//4: Petición terminada y respuesta preparada
//funcion asincrona
function miFuncionAsync(str) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        if (str === "mostrar") {
          mostrarDatos(this.responseText);
        } else if (str === "procesar") {
          procesarPedido(this.responseText);
        }
      } else {
        alert("ERROR");
      }
    }
  };
  xhr.open("GET", URL_DESTINO + DATOS, true);
  xhr.send(null);
}
//funcion para mostrar todos los datos del JSON
function mostrarDatos(jsonDoc) {
  var json = JSON.parse(jsonDoc); //parseamos los datos de la variable
//variables de tamaño e ingredientes
  var listaSize = json.PIZZA.SIZE;
  var listaIngre = json.PIZZA.INGRE;

  //TAMAÑOS PIZZAS 
  var inputRad = [];
  var inputTxtRad = [];
//recorremos el JSON de SIZE
  for (let i of listaSize) {
    inputRad[i] = document.createElement("input");
    inputRad[i].type = "radio";
    inputRad[i].className = "inputRadio";
    inputRad[i].name = "size";
    inputRad[i].id = `size_${i.TAM}`;
    inputRad[i].value = i.TAM;

    inputTxtRad[i] = document.createTextNode(i.TAM);
//metemos los input y sus textos
    tam.appendChild(inputRad[i]);
    tam.appendChild(inputTxtRad[i]);
  }
  //INGREDINTES
  var inputCheck = [];
  var inputTxtChecks = [];
//recorremos el JSON de INGRE
  for (let i of listaIngre) {
    inputCheck[i] = document.createElement("input");
    inputCheck[i].type = "checkbox";
    inputCheck[i].className = "inputCheck";
    inputCheck[i].name = i.NOMBRE;
    inputCheck[i].id = i.NOMBRE;
    inputCheck[i].value = i.NOMBRE;

    inputTxtChecks[i] = document.createTextNode(i.NOMBRE);
//metemos los input y sus textos
    ingre.appendChild(inputCheck[i]);
    ingre.appendChild(inputTxtChecks[i]);
  }
}
//procesamos la posibles salidas con lo marcado en los input
function procesarPedido(jsonDoc) {
  var json = JSON.parse(jsonDoc);
  var listaSize = json.PIZZA.SIZE;
  var listaIngre = json.PIZZA.INGRE;

  //Validamos que haya escogido un tamaño de la pizza
  let size = document.getElementsByName("size"); //guardamos en un array todos los input radio
  let tamano = ""; //creamos una variable vacia para guardar el valor
  for (let i = 0; i < size.length; i++) {
    //recorremos el array de tamaños
    if (size[i].checked) {
      //si algun tamaño está seleccionado
      tamano = size[i].value; //guardamos el valor del input en la variable
      break;
    }
  }
  var preciTam = 0;
  for (let i of listaSize) {//recorremos los precios
    if (tamano === i.TAM) {
      preciTam = i.PRECIO;
    }
  }
  var addIngre = [];
  let checks = document.getElementsByClassName("inputCheck");
  for (let i = 0; i < checks.length; i++) {
    if (checks[i].checked) {
      addIngre.push(checks[i].value);
    }
  }
  var precioIngre = 0;
  for (let i = 0; i < addIngre.length; i++) {
    for (let j of listaIngre) {
      if (addIngre[i] === j.NOMBRE) {
        precioIngre += j.PRECIO;
      }
    }
  }
  //metemos en variable el precio del tamaño y la suma de los ingredientes
  var precioFinal = preciTam + precioIngre; 
  let tuPedido = `Tu pizza ${tamano} con ${addIngre} tiene un precio total de ${precioFinal}€.`;
  let mensaje = document.createTextNode(tuPedido); //creamos <p>
  parrafo.appendChild(mensaje); //metemos el mensaje
}
//funcion que salta una vez cargada la página web
window.onload = function () {
  formulario.onsubmit = validar;//validar antes de mandar <form>
  let mostrar = "mostrar";
  miFuncionAsync(mostrar); //función asincrona
//poner a 0 datos metidos en los input
  refrescar.addEventListener("click", function () {
    tam.innerHTML = "";
    ingre.innerHTML = "";
    miFuncionAsync(mostrar);
    console.log("REFRESSSHCADO");//verificar que refresca
  });
//sacar precio en un parrafo aparte
  sacarPrecio.addEventListener("click", function () {
    let procesar = "procesar";
    parrafo.innerHTML = "";
    miFuncionAsync(procesar);
  });
};
