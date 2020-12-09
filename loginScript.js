var emailUser = "";
var omUser = "";
var teacherUser = false;
var emailData = "";
var omData = "";

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

window.addEventListener("load", init);

function $(id) {
    return document.getElementById(id);
}

function init() {
    $("toRegPageButton").addEventListener("click", backToRegPage);
    $("loginbutton").addEventListener("click", login); 
}

function login(emailUser, omUser, teacherUser, emailData, omData) {
    var successful = false;
    emailUser = $("inputEmailLogin").value;
    omUser = $("inputOMLogin").value;
    teacherUser = $("inputTeacherLogin").value;
    if (!teacherUser) {
        //logika
        if (successful) {
            location.href = "diaktablazat.html";
        } else {
            //hiba
        }
    } else {
        //logika
        if (successful) {
            location.href = "diaktablazat.html";
        } else {
            //hiba
        }
    }
}

function backToRegPage() {
    location.href = "registration.html";
}


