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
    $("backToLoginButton").addEventListener("click", backToLoginPage);
    $("regButton").addEventListener("click", registration);
}

function registration() {
    var successful = false;
    var nameUser = $("inputNameReg").value;
    var emailUser = $("inputEmailReg").value;
    var classUser = $("inputClassReg").value;
    var omUser = $("inputOMReg").value;
    var teacherUser = $("inputTeacherReg").value;
    if(!teacherUser){
        
        //writing to diakok
        if(successful){
            //href to diak tablazat
        }else{
            //error
        }
    }else{

        //writing to tanarok
        if(successful){
            //href to tanar tablazat
        }else{
            //error
        }
    }
}

function backToLoginPage() {
    location.href = "index.html";
}