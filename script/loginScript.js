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

var students = new Array();

var tasks = [];

setTimeout(function () {
    taskConstructor();
}, 1000);


function $(id) {
    return document.getElementById(id);
}

function init() {
    const form = document.querySelector("#login");
    form.addEventListener("submit", login);
    $("toRegPageButton").addEventListener("click", backToRegPage);
    $("logoutButtonStudent").addEventListener("click", logout);
    $("logoutButtonTeacher").addEventListener("click", logout);
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
        var userDoc = database.collection("teachers").doc(UID);

        database.collection("teachers").doc(UID)
            .withConverter(teacherConverter)
            .get().then(function (doc) {
                if (doc.exists) {
                    var teacherData = doc.data();
                    userSetterTeacher(teacherData);
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
                    userSetterStudent(studentData);
                    classSpecificStudentConstructor(studentData);
                } else {
                    console.log("No such document!");
                }
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });
    }

}

function userSetterStudent(studentData) {
    $("student-name").innerHTML = studentData.name;
    generateProfile(studentData);
    $("progress-bar").innerHTML = Math.floor((studentData.sumPoints() / 210) * 100) +"%";
    $("progress-bar").style.width = Math.floor((studentData.sumPoints() / 210) * 100) +"%";
    if(studentData.badge1){
        $("bronze").style.visibility = "visible";
    }
    if(studentData.badge2){
        $("silver").style.visibility = "visible";
    }
    if(studentData.badge3){
        $("gold").style.visibility = "visible";
    }
}

function userSetterTeacher(teacherData) {
    $("teacher-name").innerHTML = teacherData.name;
    generateProfile(teacherData);
}

function pointWriter() {
    
}

function taskConstructor() {
    for (var i = 1; i < 7; i++) {
        database.collection("tasks").doc("task" + i)
            .withConverter(taskConverter)
            .get().then(function (doc) {
                if (doc.exists) {
                    tasks.push(doc.data());
                } else {
                    throw "A dokumentum nem létezik."
                }
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });
    }
}

function classSpecificStudentConstructor(studentData) {
    let student;
    database.collection("students").where("class", "==", studentData.class).get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            student = new Student(doc.data().badge1, doc.data().badge2, doc.data().badge3, doc.data().class, doc.data().email, doc.data().name, doc.data().task1, doc.data().task2, doc.data().task3, doc.data().task4, doc.data().task5, doc.data().task6, doc.data().teacher);
                generateBoard(student);
        });
    });
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

class Task {
    constructor(deadline, points, students) {
        this.deadline = deadline;
        this.points = points;
        this.students = students;
    }
}