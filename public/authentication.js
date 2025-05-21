// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLF6YlDnCpqPAjMslRGAyYhamNB0BrGOo",
  authDomain: "tpf-2-cf7db.firebaseapp.com",
  projectId: "tpf-2-cf7db",
  storageBucket: "tpf-2-cf7db.firebasestorage.app",
  messagingSenderId: "800690693004",
  appId: "1:800690693004:web:d3275b55f7e7a4a6442ca9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const provider = new GoogleAuthProvider();

const signInButton = document.querySelector("#signInButton");
const signOutButton = document.querySelector("#signOutButton");

const userSignIn = async () => {
    signInWithPopup(auth, provider).then((result) => {
        const user = result.user;
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
};

const userSignOut = async () => {
    signOut(auth).then(() => {
        alert("You have been signed out!");
        document.getElementById("name").textContent = '';
        document.getElementById("email").textContent = '';
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
};

onAuthStateChanged(auth, (user) => {
    if (user) {
        alert("You are authenticated withGoogle");
        console.log(user);
        document.getElementById("name").textContent = user.displayName;
        document.getElementById("email").textContent = user.email;
    }
});

signInButton.addEventListener("click", userSignIn);
signOutButton.addEventListener("click", userSignOut);




