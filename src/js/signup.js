//Estas importaciones están presentes por si alguien se loguea pueda cerrar sesión
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
//Importacion para la autenticación de cuenta nueva.
import { auth } from "../app/firebase.js"
//importamos para checar si alguien esta logeado o no.
import { loginCheck } from '../app/loginCheck.js'

//importacion para crear cuenta.
import '../app/signupForm.js'
//importacion para cerrar sesion.
import '../app/logout.js'

onAuthStateChanged(auth, async (user) => {
    loginCheck(user)
    /* if(user){
        loginCheck(user)
    } else {
        loginCheck(user)
    } */
})  