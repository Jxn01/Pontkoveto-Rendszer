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
    $("logoutButton").addEventListener("click", logout);
}

function logout() {
    firebase.auth().signOut().then(function () {
        location.href = "index.html"
    }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        $("failedLogoutStudent").innerHTML = errorMessage;
        $("failedLogoutStudent").style.visibility = "visible";
    });
}




