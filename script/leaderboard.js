function generateBoard(element) {
    $("leaderboard").innerHTML += "<li class='list-group-item'>" + element.name + ": 1. feladat: " + element.task1 + " pont; 2. feladat: " + element.task2 + " pont; 3. feladat: " + element.task3 + " pont; 4. feladat: " + element.task4 + " pont; 5. feladat: " + element.task5 + " pont; 6. feladat: " + element.task6 + " pont; összesen: " + sumScore(element) + " pont</li>";
}

function sumScore(element) {
    let sum;
    sum = element.task1 + element.task2 + element.task3 + element.task4 + element.task5 + element.task6;
    return sum;
}

var counter = 0;

function generateBoardTeacher(element) { //szégyellje magát aki ezt írta
    counter++;
    $("leaderboardTeacher").innerHTML += "<li class='list-group-item'>" + element.name + ": 1. feladat: " + element.task1 + " pont; 2. feladat: " + element.task2 + " pont; 3. feladat: " + element.task3 + " pont; 4. feladat: " + element.task4 + " pont; 5. feladat: " + element.task5 + " pont; 6. feladat: " + element.task6 + " pont; összesen: " + sumScore(element) + " pont</li>" +
        "<div class='btn-group d-flex justify-content-end menu'>" +
        "<button type='button' class='btn btn-primary dropdown-toggle' data-toggle='dropdown'>" +
        "Badge kiosztása" +
        "</button>" +
        "<div class='dropdown-menu'>" +
        "<button onClick='badge(" + 1 + ", " + counter + " )' type='button' class='dropdown-item' id='badgeButtonBronze" + counter + "'>Bronz érem</button>" +
        "<button onClick='badge(" + 2 + ", " + counter + " )' type='button' class='dropdown-item' id='badgeButtonSilver" + counter + "'>Ezüst érem</button>" +
        "<button onClick='badge(" + 3 + ", " + counter + " )' type='button' class='dropdown-item' id='badgeButtonGold" + counter + "'>Arany érem</button>" +
        "</div>" +
        "</div>";
}

function badge(color, number) {
    let teacherData;
    let studentCount = 0;
    database.collection("teachers").doc(firebase.auth().currentUser.uid)
        .withConverter(teacherConverter)
        .get().then(function (doc) {
            teacherData = doc.data();
            database.collection("students").where("class", "==", teacherData.class).get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    studentCount++;
                    if (studentCount == number) {
                        if (color == 1) {
                            return database.collection("students").doc(doc.id).update({
                                badge1: true
                            });
                        }
                        if (color == 2) {
                            return database.collection("students").doc(doc.id).update({
                                badge2: true
                            })
                        }
                        if (color == 3) {
                            return database.collection("students").doc(doc.id).update({
                                badge3: true
                            })
                        }
                    }
                });
            });
        });
}