var firebaseConfig = {
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
firebase.initializeApp(firebaseConfig);

document.getElementById('formReg').addEventListener('submit', function(e){
    e.preventDefault();

    var user = document.getElementById('email');
    var pass = document.getElementById('pwd');

    firebase.auth().createUserWithEmailAndPassword(user.value, pass.value).then(
        function(response){
            console.log(response);
            firebase.database().ref('usersList').push({
                email: user.value,
                password: pass.value,
                uid: firebase.auth().currentUser.uid,
            })
            firebase.auth().signOut();
            user.value = " ";
            pass.value = " ";
        }
    )
    .catch(function(error){
        // handle errors here
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);

        alert(errorMessage);
    })
})