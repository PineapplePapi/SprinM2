//registro de usuarios//
const usuario = [{ usuario:"yimijendrix" , contrasena:"123456" }]

console.log(usuario)
// registrar usuario ? sirve
$(document).ready(
    $('.botonRegistro').click(
        function registrarUsuario(){
            usuario.push({
                usuario: $('#usuario').val(),
                contrasena: $('#contraseña').val()
            })
    })
)

$('#registro').submit(function(event) {

    event.preventDefault();
})

//login?? ojalá//
$(document).ready(
    $('.botonLogin').click(
        //cuando hago click en el boton, entonces funcion iniciarSesion
        function iniciarSesion() {
            //creo las variables para buscarla en el diccionario//
            const loginUsuario = $('#loginUsuario').val();
            const loginContraseña = $('#loginContraseña').val();
            // recorro la lista y corroboro que el usuario y contraseña estén en algun elemento de la lista
            const usuarioExistente = usuario.find(user => user.usuario === loginUsuario && user.contrasena === loginContraseña);
            //si existe, abre el perfil.html, si no existe, inténtelo de nuevo
            if (usuarioExistente) {
                alert('Inicio de sesión exitoso.');
                window.location.href = "/perfil.html";
            } else {
                alert('Usuario o contraseña inválida, inténtelo de nuevo');
            }
    })
)
//submit para que no actualice y no me quede sin lista (?) efectivamente me quedo sin lista igual, porque hay que cambiar de pagina, y no estoy usando el localStorage, no es necesario ahora mismo, solo hacerlo con usuarios preexistentes en la lista.
$('#login').submit(function(event) {

    event.preventDefault();

});