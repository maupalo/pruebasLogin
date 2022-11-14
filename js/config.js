  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBxgxeDMfgSczwT2CoNiFeiJu2fmhpxs_M",
    authDomain: "analisisdedatos-a01be.firebaseapp.com",
    projectId: "analisisdedatos-a01be",
    storageBucket: "analisisdedatos-a01be.appspot.com",
    messagingSenderId: "582224655295",
    appId: "1:582224655295:web:138c2440bfe751bef7670a",
    measurementId: "G-2R5SJFHC3N"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export{app}