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

var studentConverter = {
    toFirestore: function (student) {
        return {
            badge1: student.badge1,
            badge2: student.badge2,
            badge3: student.badge3,
            sClass: student.sClass,
            email: student.email,
            sName: student.sName,
            task1: student.task1,
            task2: student.task2,
            task3: student.task3,
            task4: student.task4,
            task5: student.task5,
            task6: student.task6
        };
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return new Student(data.badge1, data.badge2, data.badge3, data.class, data.email, data.name, data.task1, data.task2, data.task3, data.task4, data.task5, data.task6);
    }
};

var teacherConverter = {
    toFirestore: function (teacher) {
        return {
            tClass: teacher.tClass,
            email: teacher.email,
            tName: teacher.tName
        };
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return new Teacher(data.class, data.email, data.name);
    }
};

var checkboxError = false;

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
    var teacher = document.querySelector("#inputTeacherLogin").checked;
    var UID = "";
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            UID = firebase.auth().currentUser.uid;
            if (teacher) {
                database.collection("teachers").doc(UID)
                    .withConverter(teacherConverter)
                    .get().then(function (doc) {
                        if (!doc.exists) {
                            console.log("No such document!");
                            throw "Rossz fióktípus!";
                        }
                    }).catch(function (error) {
                        console.log("Error getting document:", error);
                        checkboxError = true;
                    });
                setTimeout(function () {
                    if (!checkboxError) {
                        loggedIn(teacher, UID);
                        console.log(checkboxError);
                    } else {
                        logout();
                        $("failedLogin").style.visibility = "visible";
                        $("failedLogin").innerHTML = "A te fióktípusod nem tanári!";
                        setTimeout(function () { $("failedLogin").style.visibility = "hidden"; }, 4000);
                    }
                }, 1000);
            } else {
                database.collection("students").doc(UID)
                    .withConverter(studentConverter)
                    .get().then(function (doc) {
                        if (!doc.exists) {
                            console.log("No such document!");
                            throw "Rossz fióktípus!";
                        }
                    }).catch(function (error) {
                        console.log("Error getting document:", error);
                        checkboxError = true;
                    });
                setTimeout(function () {
                    if (!checkboxError) {
                        loggedIn(teacher, UID);
                    } else {
                        logout();
                        $("failedLogin").style.visibility = "visible";
                        $("failedLogin").innerHTML = "A te fióktípusod nem tanulói!";
                        setTimeout(function () { $("failedLogin").style.visibility = "hidden"; }, 4000);
                    }
                }, 1000);
            }
            document.querySelector("#inputEmailLogin").value = "";
            document.querySelector("#inputOMLogin").value = "";
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
        $("timerDiv").style.visibility = "hidden";
        $("taskDoneButton").style.visibility = "hidden";
        $("teacherDiv").style.visibility = "hidden";
        $("studentDiv").style.visibility = "hidden";
        $("loginDiv").style.visibility = "visible";
    }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        $("failedLogout").innerHTML = errorMessage;
        $("failedLogout").style.visibility = "visible";
        setTimeout(function () { $("failedLogout").style.visibility = "hidden"; }, 4000);
    });
}

function loggedIn(teacher, UID) {
    var teacherData = "";
    var studentData = "";
    if (teacher) {
        $("loginDiv").style.visibility = "hidden";
        $("teacherDiv").style.visibility = "visible";
        var userDoc = database.collection("teachers").doc(UID);

        database.collection("teachers").doc(UID)
            .withConverter(studentConverter)
            .get().then(function (doc) {
                if (doc.exists) {
                    teacherData = doc.data();
                } else {
                    console.log("No such document!");
                }
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });
            $("teacher-name").innerHTML = teacherData.tName; 

    } else {
        $("loginDiv").style.visibility = "hidden";
        $("studentDiv").style.visibility = "visible";
        var userDoc = database.collection("students").doc(UID);

        database.collection("students").doc(UID)
            .withConverter(studentConverter)
            .get().then(function (doc) {
                if (doc.exists) {
                    studentData = doc.data();
                } else {
                    console.log("No such document!");
                }
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });     
            $("student-name").innerHTML = studentData.sName;  
            console.log(studentData);
            console.log(studentData.toString());
    }
    
}

class Student {
    constructor(badge1, badge2, badge3, sClass, email, sName, task1, task2, task3, task4, task5, task6) {
        this.badge1 = badge1;
        this.badge2 = badge2;
        this.badge3 = badge3;
        this.sClass = sClass;
        this.email = email;
        this.sName = sName;
        this.task1 = task1;
        this.task2 = task2;
        this.task3 = task3;
        this.task4 = task4;
        this.task5 = task5;
        this.task6 = task6;
    }
    toString() {
        return this.badge1 + ", " + this.badge2 + ", " + this.badge3 + ", " + this.sClass + ", " + this.email + ", " + this.sName + ", " + this.task1 + ", " + this.task2 + ", " + this.task3 + ", " + this.task4 + ", " + this.task5 + ", " + this.task6;
    }
}

class Teacher {
    constructor(tClass, email, tName) {
        this.tClass = tClass;
        this.email = email;
        this.tName = tName;
    }
    toString() {
        return this.tClass + ", " + this.email + ", " + this.tName;
    }
}