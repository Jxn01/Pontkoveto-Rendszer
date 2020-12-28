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
    //$("loginbutton").addEventListener("click", login); 
    $("diakButton").addEventListener("click", toDiakPage);
    $("tanarButton").addEventListener("click", toTanarPage);
}

function login() {
    var successful = false;
    var emailUser = $("inputEmailLogin").value;
    var omUser = $("inputOMLogin").value;
    var teacherUser = $("inputTeacherLogin").value;
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

function toDiakPage() {
    location.href = "student.html"
}

function toTanarPage() {
    location.href = "teacher.html"
}

