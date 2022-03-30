function cargar() {
  //CREACION NODOS
  var form1 = document.createElement("form"); // Creamos nodo Formulario
  form1.action = "gestionForm.php"; //le damos atributo action
  form1.method = "post"; //le damos atributo method
  form1.id = "form1"; //le damos atributo id
  var flst = document.createElement("fieldset"); // Creamos nodo fieldset
  var lgnd = document.createElement("legend"); // Creamos nodo etique legend
  var txtLgnd = document.createTextNode("Rellena el formulario"); // Creamos nodo texto de la etiqueta legend

  var cab = document.createElement("header"); // Creamos nodo Cabecera
  var sect = document.createElement("section"); // Creamos nodo section
  var fot = document.createElement("footer"); // Creamos nodo footer

  //etiquetas label text e inputs text
  // Creamos un array con el nombre de los label de los input texto del formulario
  var txtIn1 = [
    "DNI: ",
    "Nombre: ",
    "Primer Apellido: ",
    "Segundo Apellido: ",
    "Direccion: ",
    "Teléfono: ",
  ];
  var labl1 = []; // Creamos un array vacio que recogerá los nodos label
  var txtLabl1 = []; // Creamos un array vacio que recogera los nodos texto de los label
  var inputTxt = []; //Creamos un array vaco que recogerá los nodos de las etiquetas input de tipo texto
  var br1 = []; //Creamos un array vaco que recogerá los nodos de los saltos de paginas que vamos a generar
  for (let i = 0; i < txtIn1.length; i++) {
    // Con un bucle for que recorra el array de las etiquetas
    labl1[i] = document.createElement("label"); // Creamos nodo label
    txtLabl1[i] = document.createTextNode(txtIn1[i]); // Creamos nodo texto para los label
    labl1[i].appendChild(txtLabl1[i]); // Añadimos el nodo Texto al nodo label
    inputTxt[i] = document.createElement("input"); //Creamos nodo input
    inputTxt[i].type = "text"; // Añadimos atributo type al nodo input
    inputTxt[i].className = "inputTxt"; //Añadimos atributo de clase al nodo input
    inputTxt[i].placeholder = "Escribe " + txtIn1[i] + "..."; //Añadimos atributo placeholed al nodo input
    br1[i] = document.createElement("br"); //Creamos nodo salto de página
  }
  //Creamos label para radio
  // Creamos un array con el nombre de los label de los input radio del formulario
  var txtIn2 = ["Edad: ", "Estación del año preferida: "];
  var labl2 = []; // Creamos un array vacio que recogerá los nodos label
  var txtLabl2 = []; // Creamos un array vacio que recogera los nodos texto de los label
  var br2 = []; //Creamos un array vacio que recogerá los nodos de los saltos de paginas que vamos a generar
  var br2_2 = []; //Creamos un array vaco que recogerá los nodos de los saltos de paginas que vamos a generar
  for (let i = 0; i < txtIn2.length; i++) {
    labl2[i] = document.createElement("label"); // Creamos nodo label
    txtLabl2[i] = document.createTextNode(txtIn2[i]); // Creamos nodo texto para los label
    labl2[i].appendChild(txtLabl2[i]); // Añadimos el nodo Texto al nodo label
    br2[i] = document.createElement("br"); //Creamos nodo salto de página
    br2_2[i] = document.createElement("br"); //Creamos nodo salto de página
  }
  varRadtxt1 = ["<18", "18 a 29", "30 a 64", ">65"]; // Creamos un array con el nombre de los radios del formulario
  varRadtxt2 = ["Invierno", "Primavera", "Verano", "Otoño"]; // Creamos un array con el nombre de los radios del formulario
  var inputRad1 = []; //Creamos un array vacio que recogerá los nodos de las etiquetas input de tipo radio
  var inputRad2 = []; //Creamos un array vacio que recogerá los nodos de las etiquetas input de tipo radio
  var txtRadio1 = []; //Creamos un array vacio que recogerá los nodos texto de los  input de tipo radio
  var txtRadio2 = []; //Creamos un array vacio que recogerá los nodos texto de los  input de tipo radio
  for (let i = 0; i < 4; i++) {
    //Recorremos en un bucle los array
    inputRad1[i] = document.createElement("input"); //Creamos nodo input
    inputRad1[i].type = "radio"; // Añadimos atributo type al nodo input
    inputRad1[i].name = "radio1"; // Añadimos atributo name al nodo input
    inputRad1[i].value = i + 1; // Añadimos atributo value al nodo input
    inputRad1[i].className = "inputRadio"; //Añadimos atributo de clase al nodo input
    txtRadio1[i] = document.createTextNode(varRadtxt1[i]); // Creamos nodo texto para los radio
    inputRad2[i] = document.createElement("input"); //Creamos nodo input
    inputRad2[i].type = "radio"; // Añadimos atributo type al nodo input
    inputRad2[i].name = "radio2"; // Añadimos atributo name al nodo input
    inputRad2[i].value = i + 1; // Añadimos atributo value al nodo input
    inputRad2[i].className = "inputRadio"; //Añadimos atributo de clase al nodo input
    txtRadio2[i] = document.createTextNode(varRadtxt2[i]); // Creamos nodo texto para los radio
  }
  //creamos checkbox
  var labl3 = document.createElement("label"); //Creamos nodo label
  var txtLabl3 = document.createTextNode("Tipo de música: "); //Creamos nodo texto para el label
  labl3.appendChild(txtLabl3); //Añadimos el nodo texto al label
  var checks = []; //Creamos un array vacio que recogerá los nodos de las etiquetas input de tipo chekbox
  var checkTxt = []; //Creamos un array vacio que recogerá los nodos texto de los  input de tipo checkbox
  var txtIn3 = ["Trap", "Rock&Roll", "Tecno", "Reggae"]; // Creamos un array con el nombre de los checkbox del formulario
  for (let i = 0; i < txtIn3.length; i++) {
    //Recorremos en un bucle los array
    checks[i] = document.createElement("input"); //Creamos nodo input
    checks[i].type = "checkbox"; // Añadimos atributo type al nodo input
    checks[i].name = "check" + (i + 1); // Añadimos atributo name al nodo input
    checks[i].value = i + 1; // Añadimos atributo value al nodo input
    checks[i].className = "inputCheck"; //Añadimos atributo de clase al nodo input
    checkTxt[i] = document.createTextNode(txtIn3[i]); // Creamos nodo texto para los checkbox
  }
  var br3 = document.createElement("br"); //Creamos nodo salto de linea

  //creamos dos img
  var labl4 = document.createElement("label"); //Creamos nodo label
  var txtLabl4 = document.createTextNode("Imagenes: "); //Creamos nodo texto para el label
  labl4.appendChild(txtLabl4); //Añadimos el nodo texto al label
  var imgs = []; //Creamos un array vacio que recogerá los nodos de las etiquetas img
  for (let i = 0; i < 2; i++) {
    //Recorremos en un bucle los array
    imgs[i] = document.createElement("img"); //Creamos nodo img
    imgs[i].src = "img/img" + (i + 1) + ".png"; //Añadimos atributo src a la img
    imgs[i].alt = "Imagen " + (i + 1); //Añadimos atributo alt a la img
    imgs[i].className = "imgs"; // Añadimos atributo de clase a la img
  }
  var br4 = document.createElement("br"); //Creamos nodo salto de linea
  var br5 = document.createElement("br"); //Creamos nodo salto de linea

  //Creamos select
  var labl5 = document.createElement("label"); //Creamos nodo label
  var txtLabl5 = document.createTextNode("Selecciona tu estilo de vida: "); //Creamos nodo texto para el label
  labl5.appendChild(txtLabl5); //Añadimos el nodo texto al label
  var br6 = document.createElement("br"); //Creamos nodo salto de linea

  var select1 = document.createElement("select"); //Creamos nodo select
  select1.name = "elige"; //Añadimos atributo name al select
  select1.className = "select"; //Añadimos atributo de clase al select
  var opts = []; //Creamos array vacio que recogerá los nodos option
  var optTxt = [
    // Creamos un array con el nombre de los option del select
    "Angel a Angel",
    "Demonio a Demonio",
    "Angel a Demonio",
    "Demonio a Angel",
    "Inmortal",
  ];
  var txtOpct = []; //Creamos array vacío que recogerá los nodos texto de los option
  for (let i = 0; i < 5; i++) {
    //Recorremos en un bucle los array
    opts[i] = document.createElement("option"); //Creamos nodo option
    opts[i].value = "Opcion " + (i + 1); //Añadimos atributo value al option
    opts[i].className = "opcion"; //Añadimos atributo de clase al option
    txtOpct[i] = document.createTextNode(optTxt[i]); //Creamos nodo de texto
    opts[i].appendChild(txtOpct[i]); //Añadimos el nodo texto al nodo option
  }
  var br7 = document.createElement("br"); //Creamos nodo salto de linea
  //Creamos txtarea
  var br8 = document.createElement("br"); //Creamos nodo salto de linea
  var txtArea = document.createElement("textarea"); //Creamos nodo textarea
  txtArea.id = "text"; //Añadimos atributo id al textarea
  txtArea.name = "texto"; //Añadimos atributo name al textarea
  txtArea.rows = "4"; //Añadimos atributo rows al textarea
  txtArea.cols = "40"; //Añadimos atributo cols al textarea
  txtArea.className = "textArea"; //Añadimos atributo de clase al textarea

  //Creamos botones
  var butSub = document.createElement("input"); //Creamos nodo input
  butSub.type = "submit"; //Añadimos atributo type al input
  butSub.value = "Enviar"; //Añadimos atributo value al input
  butSub.className = "btn"; //Añadimos atributo de clase al input
  butSub.className = "submit"; //Añadimos atributo de clase al input

  var butRest = document.createElement("input"); //Creamos nodo input
  butRest.type = "reset"; //Añadimos atributo type al input
  butRest.value = "Reset"; //Añadimos atributo value al input
  butRest.className = "btn"; //Añadimos atributo de clase al input
  butRest.className = "reset"; //Añadimos atributo de clase al input
  //ADD NODOS

  var cont = document.getElementById("contenedor"); //Guardamos en una variable el nodo con la id contenedor
  cont.appendChild(cab); //Añadimos al contenedor el nodo cabecera
  cont.appendChild(sect); //Añadimos al contenedor el nodo section
  cont.appendChild(fot); //Añadimos al contenedor el nodo footer

  //add label e input text
  for (let i = 0; i < txtIn1.length; i++) {
    //Recorremos con un bucle los arrays
    form1.appendChild(labl1[i]); //Añadimos al formulario el nodo label
    form1.appendChild(inputTxt[i]); //Añadimos al formulario el nodo input de texto
    form1.appendChild(br1[i]); //Añadimos al formulario el nodo salto de línea
  }
  //add label e input radio
  for (let i = 0; i < labl2.length; i++) {
    //Recorremos con un bucle los arrays
    form1.appendChild(labl2[i]); //Añadimos al formulario el nodo label
    form1.appendChild(br2_2[i]); //Añadimos al formulario el nodo salto de línea
    for (let j = 0; j < inputRad1.length; j++) {
      //Recorremos los array con un bucle anidado para dar las distintas radios
      if (i > 0) {
        form1.appendChild(inputRad2[j]); //Añadimos al formulario el nodo radio
        form1.appendChild(txtRadio2[j]); //Añadimos al input radio el nodo texto
      } else {
        form1.appendChild(inputRad1[j]); //Añadimos al formulario el nodo radio
        form1.appendChild(txtRadio1[j]); //Añadimos al input radio el nodo texto
      }
    }
    form1.appendChild(br2[i]); //Añadimos al formulario el nodo salto de línea
  }
  //add checkbox
  form1.appendChild(labl3); //Añadimos al formulario el nodo label
  form1.appendChild(br3); //Añadimos al formulario el nodo salto de línea
  for (let i = 0; i < txtIn3.length; i++) {
    //Recorremos con un bucle los arrays
    form1.appendChild(checks[i]); //Añadimos al formulario el nodo checkbox
    form1.appendChild(checkTxt[i]); //Añadimos al checkbox el nodo texto
  }
  //add imgs
  form1.appendChild(br4); //Añadimos al formulario el nodo salto de línea
  form1.appendChild(labl4); //Añadimos al formulario el nodo label
  form1.appendChild(br5); //Añadimos al formulario el nodo salto de línea
  for (let i = 0; i < imgs.length; i++) {
    //Recorremos con un bucle los arrays
    form1.appendChild(imgs[i]); //Añadimos al formulario el nodo img
  }
  //add select
  form1.appendChild(br6); //Añadimos al formulario el nodo salto de línea
  form1.appendChild(labl5); //Añadimos al formulario el nodo label
  form1.appendChild(select1); //Añadimos al formulario el nodo select
  form1.appendChild(br7); //Añadimos al formulario el nodo salto de línea
  for (let i = 0; i < opts.length; i++) {
    //Recorremos con un bucle los arrays
    select1.appendChild(opts[i]); //Añadimos al select los nodo option
  }
  //add txtArea
  form1.appendChild(txtArea); //Añadimos al formulario el nodo textarea
  form1.appendChild(br8); //Añadimos al formulario el nodo salto de línea
  form1.appendChild(butSub); //Añadimos al formulario el nodo input subit
  form1.appendChild(butRest); //Añadimos al formulario el nodo input reset
  //ADD body
  lgnd.appendChild(txtLgnd); //Añadimos al nodo legend el nodo texto
  flst.appendChild(lgnd); //Añadimos al nodo fieldset el nodo legend
  flst.appendChild(form1); //Añadimos el formulario al nodo fieldset
  sect.appendChild(flst); //Añadimos al nodo section el nodo fieldset
}
