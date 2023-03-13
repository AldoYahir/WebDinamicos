import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js" 
import { auth } from './firebase.js'
import { messageAlert } from "./messageAlert.js";

const signinForm = document.querySelector('#signIn-form');

signinForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    try {
        const data = await signInWithEmailAndPassword(auth, email, password)
        document.getElementById('signin-email').value = "";
        document.getElementById('signin-password').value = "";
        Swal.fire({
            icon: 'success',
            title: 'Sesión Iniciada',
            text: 'Hola ' + data.user.email + '!, es bueno verte de nuevo, confirme para continuar.',
            showDenyButton: false,
            showCancelButton: false,
            confirmButtonText: `¡Entendido!`,
        }).then((result) => {
            //Read more about isConfirmed, isDenied below
            if (result.isConfirmed) {
                document.location.href = 'pokedex.html'; //Aquí abrimos un archivo en html
            }
        })

    } catch (error) {

        if (error.code === 'auth/user-not-found') {
            messageAlert('error', '¡El correo no existe!', 'Ingrese una cuenta existente o crea una nueva.', false, 3000);
            document.getElementById('signin-email').value = "";
        document.getElementById('signin-password').value = "";
        } else if (error.code === 'auth/wrong-password') {
            messageAlert('warning', '¡Contraseña incorrecta!', 'La contraseña que ingreso no es correcta, intentelo nuevamente.', false, 3500);
            document.getElementById('signin-password').value = "";
        } else if (error.code) {
            messageAlert('error', '¡Opps!', 'Algo salió mal, intentalo nuevamente', false, 3000);
            document.getElementById('signin-email').value = "";
        document.getElementById('signin-password').value = "";
        }
    }
})