var firebaseConfig = {
    apiKey: "AIzaSyD9YNIhkl9msLIA8-Q0ND0k41CWY4gSo3w",
    authDomain: "pontkoveto.firebaseapp.com",
    projectId: "pontkoveto",
    storageBucket: "pontkoveto.appspot.com",
    messagingSenderId: "1095203857581",
    appId: "1:1095203857581:web:f94ec69a0931212ba19224",
    measurementId: "G-BGPH18HJK0"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var database = firebase.database();

window.addEventListener("load", init);

function $(id) {
    return document.getElementById(id);
}

function init() {
    const form = document.querySelector("#registration");
    form.addEventListener("submit", registration);
    $("backToLoginButton").addEventListener("click", backToLoginPage);
}

function registration(event) {
    event.preventDefault();
    var email = document.querySelector("#inputEmailReg").value;
    var password = document.querySelector("#inputOMReg").value;
    var name = document.querySelector("#inputNameReg").value;
    var sClass = document.querySelector("#inputClassReg").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            location.href = "index.html";
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            $("failedReg").style.visibility = "visible";
            switch (errorCode) {
                case "auth/invalid-email":
                    $("failedReg").innerHTML = "A megadott e-mail cím nem megfelelő.";
                    break;

                case "auth/weak-password":
                    $("failedReg").innerHTML = "A jelszónak minimum 6 karakter hosszúnak kell lennie.";
                    break;

                case "auth/email-already-in-use":
                    $("failedReg").innerHTML = "Ez az e-mail cím már használatban van.";
                    break;

                default:
                    $("failedReg").innerHTML = errorMessage;
                    break;
            }
        });
}

function backToLoginPage() {
    location.href = "index.html";
}