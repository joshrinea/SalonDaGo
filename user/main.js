// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
import { getDatabase, set, ref, update, get } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAAPLiZplwjx5mN3NQdcJSkj8lXMLjtBYg",
  authDomain: "salondago-4a11c.firebaseapp.com",
  databaseURL: "https://salondago-4a11c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "salondago-4a11c",
  storageBucket: "salondago-4a11c.appspot.com",
  messagingSenderId: "969864103293",
  appId: "1:969864103293:web:ab223a4619c2bbfc55b814",
  measurementId: "G-G5WG31LRZR"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const database = getDatabase(app);

// login process
const loginEmail = document.getElementById('signin-email');
const loginPassword = document.getElementById('signin-password');

// buttons
const signUpButton = document.getElementById('signup-button');
const loginButton = document.getElementById('login-button');


// login process
loginButton.addEventListener('click', (e) => {
    var email = document.getElementById('signin-email').value;
    var password = document.getElementById('signin-password').value;
    var currentDate = new Date();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // signed in
        const user = userCredential.user;
        update(ref(database, 'Users/' + user.uid), {
            last_login: currentDate,
        })
        .then(() => {
            // data saved successfully
            alert('User logged in successfully');
            window.location = "../index.html";
        })
        .catch((error) => {
            // unsuccessful
            alert(error);
        })
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    })
})

// registration process
signUpButton.addEventListener('click', (e) => {
    var firstName = document.getElementById('signup-first-name');
    var lastName = document.getElementById('signup-last-name');
    var userMobile = document.getElementById('signup-mobile');
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;

    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // signed in
        const user = userCredential.user;
        set(ref(database, 'Users/' + user.uid), {
            first_name: firstName.value,
            last_time: lastName.value,
            mobile: userMobile.value,
            password: password,
            email: email,
            avatar: 'https://cdn.dribbble.com/users/924650/screenshots/6606195/robohobo_detailed.png',
        })
        .then(() => {
            // data saved successfully
            alert('User created successfully');
            window.location = "../index.html";
        })
        .catch((error) => {
            // unsuccessful
            alert(error);
        })
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    })
})