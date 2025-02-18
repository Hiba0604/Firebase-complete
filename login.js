  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCg1I98wXHuP03siUYfNzli7u_1krJTRyc",
    authDomain: "authentication-3a2c8.firebaseapp.com",
    projectId: "authentication-3a2c8",
    storageBucket: "authentication-3a2c8.firebasestorage.app",
    messagingSenderId: "19040559708",
    appId: "1:19040559708:web:a7f784ad6d1d4675523c99",
    measurementId: "G-N8CV1W5SPS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

        const submit=document.getElementById("submit")
        submit.addEventListener("click", function(){
            event.preventDefault()
            const email=document.getElementById("email").value
        const password=document.getElementById("password").value
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Log In Successfully!")
            window.location.href="http://127.0.0.1:5500/success.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})