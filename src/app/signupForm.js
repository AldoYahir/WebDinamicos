import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import { auth } from './firebase.js'
import { messageAlert } from './messageAlert.js'

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    try {
        const data = await createUserWithEmailAndPassword(auth, email, password)
        document.getElementById('signup-email').value = "";
        document.getElementById('signup-password').value = "";
        Swal.fire({
            icon: 'success',
            title: 'Logueo exitoso.',
            text: 'Bienvenido ' + data.user.email + '!, confirme para continuar.',
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

        if (error.code === 'auth/network-request-failed') {
            messageAlert('error', '¡El correo es inválido o ya existe!', 'Intentelo nuevamente.', false, 3000);
            document.getElementById('signup-email').value = "";
            document.getElementById('signup-password').value = "";
        } else if (error.code === 'auth/weak-password') {
            messageAlert('warning', '¡Contraseña débil!', 'Ingrese una contraseña con mas de 6 caracteres.', false, 3500);
            document.getElementById('signup-password').value = "";
        } else if (error.code) {
            messageAlert('error', '¡Opps!', 'Algo salió mal, intentalo nuevamente', false, 3000);
            document.getElementById('signup-email').value = "";
            document.getElementById('signup-password').value = "";
        }
    }
})