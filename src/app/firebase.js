// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqxlDZT2mczHnACP_t-G0O36bp2FkX05A",
  authDomain: "ing-auth.firebaseapp.com",
  projectId: "ing-auth",
  storageBucket: "ing-auth.appspot.com",
  messagingSenderId: "386459937029",
  appId: "1:386459937029:web:ab97ee550913d38efd6f6c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
