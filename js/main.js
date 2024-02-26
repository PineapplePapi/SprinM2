const nombre = document.getElementById("nombre");
const correo = document.getElementById("usuario");
const tel = document.getElementById("telefono");
const pass = document.getElementById("contrasena");

//LOGIN

// Creación la lista de usuarios
const usuarios = [];

// Creación algunos objetos de usuario
const usuario1 = {
  nombre: "juan@gmail.com",
  password: "1234",
};
const usuario2 = {
  nombre: "maria@gmail.com",
  password: "1234",
};

// Los agregamos a la lista
usuarios.push(usuario1);
usuarios.push(usuario2);

// Acceder a un usuario específico
// const usuario = usuarios[0];
// console.log(usuario.nombre);

const page = window.location.pathname;

$(document).ready(function () {
  $("#registro").submit(function (event) {
    event.preventDefault();

    registrarUsuario();

    console.log(usuarios);

    function registrarUsuario() {
      usuarios.push({
        nombre: $("#usuario").val(),
        password: $("#contrasena").val(),
      });
    }
    //Elimina todos los valores dentro de los input.
    tel.value = "";
    nombre.value = "";
    correo.value = "";
    pass.value = "";
    Toastify({
      text: "Registro realizado con éxito",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
    window.location.hash = "#";
  });
});

//Accede al boton de "Inicar Sesión del formulario"
const btn = document.getElementById("login");

//Escucha el evento "click" del botón
btn.addEventListener("click", () => {
  //Declaracion de constante "form" que hace referencia al formulario de Login.
  const form = document.getElementById("form_login");

  //Escucha el evento "Submit" del formulario a travez del boton para interceptarlo.
  form.addEventListener("submit", function (event) {
    //Prevee el envío por defecto del formulario y así no se recarga a página al presionar el botón
    event.preventDefault();

    //Obtencion de los datos ingresador en los input del formulario.
    const correo = document.getElementById("exampleInputEmail1").value;
    const password = document.getElementById("exampleInputPassword1").value;

    //Condicional if que verifica si el correo y la contraseña ingresadas pertenecen a algún usuario en la lista usuarios.
    if (
      usuarios.find(
        (user) => user.nombre === correo && user.password === password
      )
    ) {
      //Condicional si es que las credenciales son correctas.

      Toastify({
        text: "Inicio de sesión con éxito",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
      //Va hacia el archivo "control-panel-html"
      setTimeout(function () {
        window.location.href = "control-panel.html";
      }, 2000);
    } else {
      //Condicional si es que las credenciales son incorrectas.
      console.log("Falló");
    }
  });
});

//registro de usuarios//

// registrar usuario ? sirve, obvio que si :)
