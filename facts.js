const in_mail =document.querySelector("#in_mail");
const in_password =document.querySelector("#in_password");
const btn_send =document.querySelector("#btn_send");

// Import the functions you need from the SDKs you need0
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getFirestore, collection, doc , setDoc } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4raevewgJxUoQbeU3gOBJCAS1LuLSnZo",
  authDomain: "proyect-f1d45.firebaseapp.com",
  projectId: "proyect-f1d45",
  storageBucket: "proyect-f1d45.appspot.com",
  messagingSenderId: "683799734474",
  appId: "1:683799734474:web:d05742a245b80bb1e0ac33",
  measurementId: "G-MD696Y3DKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


btn_send.addEventListener("click", (event)=>{

  let mail = in_mail.value;
  
  let password = in_password.value;

  if(mail == ""){
    alert("Complete the email please")
    }else if(password == ""){
    alert("Complete the password please")
    }
    
    if(mail !="" && password !=""){
    

    
    }
  
  setDoc(doc(db, "Users", mail), {
    name: mail,
    passw: password,
  });

  in_mail.value=""; 
  in_password.value=""; 
})


