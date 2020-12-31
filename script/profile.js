function generateProfile(user){
    let email = user.email;
    let osztaly = user.class;
    let teacher = user.teacher;
    if(!user.teacher){
        let keszDb = "idk yet";
        let badgeDb = user.sumBadges();
        $("emailDiak").innerHTML="E-mail cím: "+email;
        $("osztalyDiak").innerHTML="Osztály: "+osztaly;
        $("keszDbDiak").innerHTML="Kész feladatok száma: "+keszDb;
        $("badgeDbDiak").innerHTML="Megszerzett badge-ek száma: "+badgeDb;
    }
    else{
        let tanuloDb = "idk yet";
        $("emailTanar").innerHTML="E-mail cím: "+email;
        $("osztalyTanar").innerHTML="Osztály: "+osztaly;
        $("tanuloDbTanar").innerHTML="Beosztott tanulók száma: "+tanuloDb;
    }
}