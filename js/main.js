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
    if (correo == usuarios[0].nombre && password == usuarios[0].password) {
      //Condicional si es que las credenciales son correctas.

      //Va hacia el archivo "control-panel-html"
      window.location.href = "control-panel.html";
    } else {
      //Condicional si es que las credenciales son incorrectas.
      console.log("Falló");
    }
  });
});
