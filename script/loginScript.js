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
var database = firebase.firestore();

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
    $("logoutButtonStudent").addEventListener("click", logout);
    $("logoutButtonTeacher").addEventListener("click", logout);
}

function login(event) {
    event.preventDefault();
    var email = document.querySelector("#inputEmailLogin").value;
    var password = document.querySelector("#inputOMLogin").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            document.querySelector("#inputEmailLogin").value = "";
            document.querySelector("#inputOMLogin").value = "";
            if (document.querySelector("#inputTeacherLogin").checked) {
                $("loginDiv").style.visibility = "hidden";
                $("teacherDiv").style.visibility = "visible";
            } else {
                $("loginDiv").style.visibility = "hidden";
                $("studentDiv").style.visibility = "visible";
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
                    $("failedLogin").innerHTML = "Az OM azonosító helytelen.";
                    break;
            }
            setTimeout(function () { $("failedLogin").style.visibility = "hidden"; }, 4000);

        });
}

function backToRegPage() {
    location.href = "registration.html";
}

function toDiakPage() {
    $("loginDiv").style.visibility = "hidden";
    $("studentDiv").style.visibility = "visible";
    $("teacherDiv").style.visibility = "hidden";
}

function toTanarPage() {
    $("loginDiv").style.visibility = "hidden";
    $("studentDiv").style.visibility = "hidden";
    $("teacherDiv").style.visibility = "visible";
}

function logout() {
    firebase.auth().signOut().then(function () {
        $("loginDiv").style.visibility = "visible";
        $("studentDiv").style.visibility = "hidden";
        $("teacherDiv").style.visibility = "hidden";
    }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        $("failedLogout").innerHTML = errorMessage;
        $("failedLogout").style.visibility = "visible";
        setTimeout(function () { $("failedLogout").style.visibility = "hidden"; }, 4000);
    });
} 
