let crear = document.getElementById("btn-crear");
let email =document.getElementById("correo");
let password =document.getElementById("password");
let entrar = document.getElementById("btn-entrar");
let salir = document.getElementById("btn-salir");
let google = document.getElementById("btn-google");
let facebook = document.getElementById("btn-facebook");
let twitter = document.getElementById("btn-twitter");
let boton = document.getElementById("boton");
let fecha = document.getElementById("fecha");


import { getAuth, createUserWithEmailAndPassword, TwitterAuthProvider, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, signOut  } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";

const auth = getAuth();
const provider = new GoogleAuthProvider();
const providerFB = new FacebookAuthProvider();
const providerTW = new TwitterAuthProvider();

crear.addEventListener("click", function(){
    alert("Creando")
    
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert(user +" ha sido registrado");
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
    });
});
entrar.addEventListener("click", function(){
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Inició sesión")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error.message)
      });
});

google.addEventListener("click", function(){
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});
facebook.addEventListener("click", function(){
    signInWithPopup(auth, providerFB)
    .then((result) => {
// The signed-in user info.
      const user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      alert("Inició sesión")
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      alert(error.code)
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
      // ...
    });
});

twitter.addEventListener("click", function(){
  signInWithPopup(auth, providerTW)
  .then((result) => {
    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    const credential = TwitterAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const secret = credential.secret;

    // The signed-in user info.
    const user = result.user;
    alert(user)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = TwitterAuthProvider.credentialFromError(error);
    alert(errorMessage)
    // ...
  });
});
boton.addEventListener("click", function(){
  console.log(fecha.value)
});