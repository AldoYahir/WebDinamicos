//Funcion de firebase que permite cerrar sesión desde el fronted.
import { signOut } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
//Hago una importacion de firebase para hacer uso de Auth
import { auth } from './firebase.js';

const cerrarSesion = document.querySelector('#logout');

cerrarSesion.addEventListener('click', async ()=>{
   await signOut(auth)
   console.log('sign logout')
})

