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
    var teacher = false;
    try {
        validation();
        var email = document.querySelector("#inputEmailReg").value;
        var password = document.querySelector("#inputOMReg").value;
        var name = document.querySelector("#inputNameReg").value;
        var sClass = document.querySelector("#inputClassReg").value;
        if (document.querySelector("#inputTeacherReg").checked) {
            teacher = true;
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                var userID = firebase.auth().currentUser.uid;
                writeUserData(userID, name, email, sClass, teacher);
                //location.href = "index.html";
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                $("failedReg").style.visibility = "visible";
                switch (errorCode) {
                    case "auth/invalid-email":
                        $("failedReg").innerHTML = "A megadott e-mail cím nem megfelelő.";
                        break;

                    case "auth/email-already-in-use":
                        $("failedReg").innerHTML = "Ez az e-mail cím már használatban van.";
                        break;

                    default:
                        $("failedReg").innerHTML = errorMessage;
                        break;
                }
                setTimeout(function () { $("failedReg").style.visibility = "hidden"; }, 4000);
            });

    } catch (e) {
        $("failedReg").style.visibility = "visible";
        $("failedReg").innerHTML = e;
        setTimeout(function () { $("failedReg").style.visibility = "hidden"; }, 4000);
    }
}

function backToLoginPage() {
    location.href = "index.html";
}

function validation() {
    if (document.querySelector("#inputEmailReg").value == "" || document.querySelector("#inputOMReg").value == "" || document.querySelector("#inputNameReg").value == "" || document.querySelector("#inputClassReg").value == "") {
        throw "Minden mezőt ki kell tölteni!";
    }

    if (document.querySelector("#inputOMReg").value.length != 7) {
        throw "Az OM azonosító hossza 7 karakter kell, hogy legyen!";
    }

    if (document.querySelector("#inputOMReg").value.replaceAll(/[A-ZÍÉŐÚŰÁÓÜÖ]/gi, "").length != document.querySelector("#inputOMReg").value.length) {
        throw "Az OM azonosító csak számokból állhat!";
    }
}

function writeUserData(userId, name, email, sClass, teacher) {
    if (teacher) {
        database.ref('teachers/' + userId).set({
            name: name,
            email: email,
            class: sClass
        });
    } else {
        database.ref('students/' + userId).set({
            name: name,
            email: email,
            class: sClass,
            task1: 0,
            task2: 0,
            task3: 0,
            task4: 0,
            task5: 0,
            task6: 0,
            badge1: false,
            badge2: false,
            badge3: false
        });
    }
}