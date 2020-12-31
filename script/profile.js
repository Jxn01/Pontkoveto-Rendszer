function generateProfile(user) {
    let taskDoneCount = 0;
    if (!user.teacher) {
        if (user.task1 != 0) {
            taskDoneCount++;
        }
        if (user.task2 != 0) {
            taskDoneCount++;
        }
        if (user.task3 != 0) {
            taskDoneCount++;
        }
        if (user.task4 != 0) {
            taskDoneCount++;
        }
        if (user.task5 != 0) {
            taskDoneCount++;
        }
        if (user.task6 != 0) {
            taskDoneCount++;
        }
        $("student-name").innerHTML = user.name;
        $("emailDiak").innerHTML = "E-mail cím: " + user.email;
        $("osztalyDiak").innerHTML = "Osztály: " + user.class;
        $("keszDbDiak").innerHTML = "Kész feladatok száma: " + taskDoneCount;
        $("badgeDbDiak").innerHTML = "Megszerzett badge-ek száma: " + user.sumBadges();
        $("progress-bar").innerHTML = Math.floor((user.sumPoints() / 210) * 100) +"%";
        $("progress-bar").style.width = Math.floor((user.sumPoints() / 210) * 100) +"%";
        if(user.badge1){
            $("bronze").style.visibility = "visible";
        }
        if(user.badge2){
            $("silver").style.visibility = "visible";
        }
        if(user.badge3){
            $("gold").style.visibility = "visible";
        }
    }
    else {
        $("teacher-name").innerHTML = user.name;
        $("emailTanar").innerHTML = "E-mail cím: " + user.email;
        $("osztalyTanar").innerHTML = "Osztály: " + user.class;
        $("tanuloDbTanar").innerHTML = "Beosztott tanulók száma: " + "";
    }
}