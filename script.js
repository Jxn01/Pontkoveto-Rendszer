var nameUser = "";
var classUser = "";
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

function $(id) {
    return document.getElementById(id);
}

function init() {
    $("loginButton").addEventListener("onclick", login, false);
    $("regButton").addEventListener("onclick", registration, false);
    $("regPageButton").addEventListener("onclick", backToRegPage, false);
    $("loginPageButton").addEventListener("onclick", backToLoginPage, false);
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

function registration(nameUser, emailUser, classUser, omUser, teacherUser) {
    var successful = false;
    nameUser = $("inputNameReg").value;
    emailUser = $("inputEmailReg").value;
    classUser = $("inputClassReg")
    omUser = $("inputOMReg").value;
    teacherUser = $("inputTeacherReg").value;
    if(!teacherUser){
        
        //writing
        if(successful){

        }else{

        }
    }else{
        
        //writing
        if(successful){

        }else{
            
        }
    }
}

function backToRegPage() {
    location.href = "regsztracio.html";
}

function backToLoginPage() {
    location.href = "index.html";
}