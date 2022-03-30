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
  //Asignamos precio
  var preciTam = 0; //creamos una varible de precio a 0
  //comprobamos que tamaño está seleccionado y adjudicamos el precio
  if (tamano.includes("Pequeña")) {
    preciTam += 5;
  } else if (tamano.includes("Mediana")) {
    preciTam += 10;
  } else if (tamano.includes("Grande")) {
    preciTam += 15;
  }

  //Validamos los ingredientes
  if (!york.checked && !bacon.checked && !champ.checked && !pina.checked) {
    //si no hay ningun ingrediente seleccionado, soltamos un alert
    alert("Debe seleccionar algún ingrediente");
    return false; //devolvemos false
  }
  //Comprobamos que ingredientes están marcados
  var ingr = 0; //Variable del precio de los ingredientes a 0
  var addIngre = []; //creamos un array vacio para guardar los ingredientes marcados
  var checks = document.getElementsByClassName("inputCheck"); // creamos un array con los checks de los ingredientes
  for (let i = 0; i < checks.length; i++) {
    //recorremos el array de los ingredientes
    if (checks[i].checked) {
      //si alguno está seleccinado
      ingr++; //subimos 1 el valor de ingredientes
      addIngre.push(checks[i].value); //añadimos el ingrediente al array de los ingredentes seleccioados
    }
  }
  var precioFinal = preciTam + ingr; //Sumamos el precio del tamaño y la suma de los ingredientes
  //Soltamos un alert con el tamaño, los ingredintes seleccionados y el precio final
  alert(
    `Tu pizza ${tamano} de ${addIngre} vale ${precioFinal}€, ya está en camino!`
  );
}
window.onload = function () {
  formulario.onsubmit = validar;
};
