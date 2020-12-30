function $(id){
    return document.getElementById(id);
}

var profileSource = ["bela@gmail.com","12/D","5"];

function generateProfile(source){
    let email = source[0];
    let osztaly = source[1];
    if(source.length == 4){
        let keszDb = source[2];
        let badgeDb = source[3];
        $("emailDiak").innerHTML="E-mail cím: "+email;
        $("osztalyDiak").innerHTML="Osztály: "+osztaly;
        $("keszDbDiak").innerHTML="Kész feladatok száma: "+keszDb;
        $("badgeDbDiak").innerHTML="Megszerzett badge-ek száma: "+badgeDb;
    }
    else if(source.length == 3){
        let tanuloDb = source[2];
        $("emailTanar").innerHTML="E-mail cím: "+email;
        $("osztalyTanar").innerHTML="Osztály: "+osztaly;
        $("tanuloDbTanar").innerHTML="Beosztott tanulók száma: "+tanuloDb;
    }
    else{
        console.log("Tesó kurva nagy baj van");
    }
}

function init(){
    generateProfile(profileSource);
}

window.addEventListener("load",init,false);