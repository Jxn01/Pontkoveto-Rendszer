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
            class: student.class,
            email: student.email,
            name: student.name,
            task1: student.task1,
            task2: student.task2,
            task3: student.task3,
            task4: student.task4,
            task5: student.task5,
            task6: student.task6,
            teacher: student.teacher
        };
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return new Student(data.badge1, data.badge2, data.badge3, data.class, data.email, data.name, data.task1, data.task2, data.task3, data.task4, data.task5, data.task6, data.teacher);
    }
};

var teacherConverter = {
    toFirestore: function (teacher) {
        return {
            class: teacher.class,
            email: teacher.email,
            name: teacher.name,
            teacher: teacher.teacher
        };
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return new Teacher(data.class, data.email, data.name, data.teacher);
    }
};

var taskConverter = {
    toFirestore: function (task) {
        return {
            deadline: task.deadline,
            points: task.points,
            students: task.students
        };
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return new Task(data.deadline, data.points, data.students);
    }
};

var checkboxError = false;

var studentData;

var student;

var students = new Array();

var tasks = [];

var studentCount = 0;

setTimeout(function () {
    taskConstructor();
}, 1000);


function $(id) {
    return document.getElementById(id);
}

function init() {
    myTimer();
    const form = document.querySelector("#login");
    form.addEventListener("submit", login);
    $("toRegPageButton").addEventListener("click", backToRegPage);
    $("logoutButtonStudent").addEventListener("click", logout);
    $("logoutButtonTeacher").addEventListener("click", logout);
    $("homeButton").addEventListener("click", function () { taskHandler(0); });
    $("task1Button").addEventListener("click", function () { taskHandler(1); });
    $("task2Button").addEventListener("click", function () { taskHandler(2); });
    $("task3Button").addEventListener("click", function () { taskHandler(3); });
    $("task4Button").addEventListener("click", function () { taskHandler(4); });
    $("task5Button").addEventListener("click", function () { taskHandler(5); });
    $("task6Button").addEventListener("click", function () { taskHandler(6); });
    $("taskDoneButton").addEventListener("click", function () { writePoints(); });
    $("homeButton2").addEventListener("click", function () { taskHandler2(0); });
    $("task1Button2").addEventListener("click", function () { taskHandler2(1); });
    $("task2Button2").addEventListener("click", function () { taskHandler2(2); });
    $("task3Button2").addEventListener("click", function () { taskHandler2(3); });
    $("task4Button2").addEventListener("click", function () { taskHandler2(4); });
    $("task5Button2").addEventListener("click", function () { taskHandler2(5); });
    $("task6Button2").addEventListener("click", function () { taskHandler2(6); });
}

function login(event) {
    checkboxError = false;
    event.preventDefault();
    var email = document.querySelector("#inputEmailLogin").value;
    var password = document.querySelector("#inputOMLogin").value;
    var UID = "";
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            UID = firebase.auth().currentUser.uid;
            database.collection("teachers").doc(UID)
                .withConverter(teacherConverter)
                .get().then(function (doc) {
                    if (!doc.exists) {
                        console.log("No such document!");
                        throw "Tanulói fióktípus";
                    }
                }).catch(function (error) {
                    console.log("Error getting document:", error);
                    checkboxError = true;
                });
            setTimeout(function () {
                if (!checkboxError) {
                    loggedIn(true, UID);
                } else {
                    loggedIn(false, UID);
                }
            }, 1000);
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

function logout() {
    firebase.auth().signOut().then(function () {
        $("timerDiv").style.visibility = "hidden";
        $("taskDoneButton").style.visibility = "hidden";
        $("teacherDiv").style.visibility = "hidden";
        $("studentDiv").style.visibility = "hidden";
        $("loginDiv").style.visibility = "visible";
        $("gold").style.visibility = "hidden";
        $("silver").style.visibility = "hidden";
        $("bronze").style.visibility = "hidden";
        $("taskName").innerHTML = "Kedves tanuló!";
        $("taskDesc").innerHTML = "Ezen a felületen a feladataidat tudod teljesíteni, minden feladatért meghatározott mennyiségű pont jár, amit a feladatoknál láthatsz. Ezen felül az összes pontszámodat a profilodban, az összesített teljesítményt fentebb, az adott feladathoz tartozó időt majd lentebb láthatod. Ha kiemelkedően jól teljesítesz, a tanárod elérhetőve tehet számodra bizonyos badge-eket, ezeket fentebb láthatod majd.";
        $("taskDescSmall").innerHTML = "";
        $("homeButton").className = "dropdown-item active";
        $("taskDoneButton").style.visibility = "hidden";
        $("timerDiv").style.visibility = "hidden";
        $("task1Button").className = "dropdown-item";
        $("task2Button").className = "dropdown-item";
        $("task3Button").className = "dropdown-item";
        $("task4Button").className = "dropdown-item";
        $("task5Button").className = "dropdown-item";
        $("task6Button").className = "dropdown-item";
        $("task1Button2").className = "dropdown-item";
        $("task2Button2").className = "dropdown-item";
        $("task3Button2").className = "dropdown-item";
        $("task4Button2").className = "dropdown-item";
        $("task5Button2").className = "dropdown-item";
        $("task6Button2").className = "dropdown-item";
        $("homeButton2").className = "dropdown-item active";
        $("taskName2").innerHTML = "Kedves tanár úr/tanárnő!";
        $("taskDesc2").innerHTML = "Ezen a felületen az Önhöz rendelt tanulók feladatainak megoldásait tudja követni. Lentebb a nevük mellett az egyes feladatokhoz kapott pontokat láthatja, illetve, hogy késedelmesen, vagy még a határidő lejárta előtt adta be megoldását. Jobbra a badge gombbal badge-ekkel jutalmazhatja a tanulókat kiemelkedő teljesítményükért. A feladatokhoz tartozó információkat a lentebb található feladatok menü alatt találhatja.";
        $("taskDescSmall2").innerHTML = "";
    }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        $("failedLogout").innerHTML = errorMessage;
        $("failedLogout").style.visibility = "visible";
        setTimeout(function () { $("failedLogout").style.visibility = "hidden"; }, 4000);
    });
}

function loggedIn(teacher, UID) {
    if (teacher) {
        $("loginDiv").style.visibility = "hidden";
        $("teacherDiv").style.visibility = "visible";
        database.collection("teachers").doc(UID)
            .withConverter(teacherConverter)
            .get().then(function (doc) {
                if (doc.exists) {
                    var teacherData = doc.data();
                    generateProfile(teacherData);
                    classSpecificStudentConstructorForTeacher(teacherData);
                } else {
                    console.log("No such document!");
                }
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });
    } else {
        $("loginDiv").style.visibility = "hidden";
        $("studentDiv").style.visibility = "visible";
        var userDoc = database.collection("students").doc(UID);

        database.collection("students").doc(UID)
            .withConverter(studentConverter)
            .get().then(function (doc) {
                if (doc.exists) {
                    studentData = doc.data();
                    generateProfile(studentData);
                    classSpecificStudentConstructor(studentData);
                } else {
                    console.log("No such document!");
                }
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });
    }

}

function classSpecificStudentConstructor(studentData) {
    database.collection("students").where("class", "==", studentData.class).get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            student = new Student(doc.data().badge1, doc.data().badge2, doc.data().badge3, doc.data().class, doc.data().email, doc.data().name, doc.data().task1, doc.data().task2, doc.data().task3, doc.data().task4, doc.data().task5, doc.data().task6, doc.data().teacher);
            generateBoard(student);
        });
    });
}

function classSpecificStudentConstructorForTeacher(teacherData) {
    let student;
    database.collection("students").where("class", "==", teacherData.class).get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            student = new Student(doc.data().badge1, doc.data().badge2, doc.data().badge3, doc.data().class, doc.data().email, doc.data().name, doc.data().task1, doc.data().task2, doc.data().task3, doc.data().task4, doc.data().task5, doc.data().task6, doc.data().teacher);
            generateBoardTeacher(student);
            studentCount++;
        });
    });
    setTimeout(function () { $("tanuloDbTanar").innerHTML += studentCount; }, 1000);
}

class Student {
    constructor(badge1, badge2, badge3, sClass, email, sName, task1, task2, task3, task4, task5, task6, teacher) {
        this.badge1 = badge1;
        this.badge2 = badge2;
        this.badge3 = badge3;
        this.class = sClass;
        this.email = email;
        this.name = sName;
        this.task1 = task1;
        this.task2 = task2;
        this.task3 = task3;
        this.task4 = task4;
        this.task5 = task5;
        this.task6 = task6;
        this.teacher = teacher;
    }

    toString() {
        return this.badge1 + ", " + this.badge2 + ", " + this.badge3 + ", " + this.class + ", " + this.email + ", " + this.name + ", " + this.task1 + ", " + this.task2 + ", " + this.task3 + ", " + this.task4 + ", " + this.task5 + ", " + this.task6 + ", " + this.teacher;
    }

    sumPoints() {
        return this.task1 + this.task2 + this.task3 + this.task4 + this.task5 + this.task6;
    }

    sumBadges() {
        let badgeCount = 0;
        if (this.badge1) {
            badgeCount++;
        }
        if (this.badge2) {
            badgeCount++;
        }
        if (this.badge3) {
            badgeCount++;
        }
        return badgeCount;
    }
}

class Teacher {
    constructor(tClass, email, tName, teacher) {
        this.class = tClass;
        this.email = email;
        this.name = tName;
        this.teacher = teacher;
    }
    toString() {
        return this.class + ", " + this.email + ", " + this.name + ", " + this.teacher;
    }
}