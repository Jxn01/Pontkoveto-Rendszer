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
    const form = document.querySelector("#login");
    form.addEventListener("submit", login);
    $("toRegPageButton").addEventListener("click", backToRegPage);
    $("diakButton").addEventListener("click", toDiakPage);
    $("tanarButton").addEventListener("click", toTanarPage);
}

function login(event) {
    event.preventDefault();
    var email = document.querySelector("#inputEmailLogin").value;
    var password = document.querySelector("#inputOMLogin").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            if (document.querySelector("#inputTeacherLogin").checked) {
                location.href = "teacher.html"
            } else {
                location.href = "student.html"
            }
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            $("failedLogin").style.visibility = "visible";
            switch (errorCode) {
                case "auth/invalid-email":
                    $("failedLogin").innerHTML = "A megadott e-mail cím nem megfelelő.";
                    break;

                case "auth/user-not-found":
                    $("failedLogin").innerHTML = "Nincs ilyen regisztrált felhasználó.";
                    break;

                case "auth/wrong-password":
                    $("failedLogin").innerHTML = "A jelszó helytelen.";
                    break;
            }
            setTimeout(function(){ $("failedLogin").style.visibility = "hidden"; }, 4000);

        });
}

function backToRegPage() {
    location.href = "registration.html";
}

function toDiakPage() {
    location.href = "student.html"
}

function toTanarPage() {
    location.href = "teacher.html"
}
