var taskID = 0;
function taskHandler(taskId) {

    clearInterval(timer);
    timer = setInterval(myTimer, 1000);

    $("homeButton").className = "dropdown-item";
    $("task1Button").className = "dropdown-item";
    $("task2Button").className = "dropdown-item";
    $("task3Button").className = "dropdown-item";
    $("task4Button").className = "dropdown-item";
    $("task5Button").className = "dropdown-item";
    $("task6Button").className = "dropdown-item";

    if (taskId == 0) {
        $("homeButton").className = "dropdown-item active";
        $("taskDoneButton").style.visibility = "hidden";
        $("timerDiv").style.visibility = "hidden";
    }
    else {
        $("task" + taskId + "Button").className = "dropdown-item active";
        $("timerDiv").style.visibility = "visible";
        $("taskDoneButton").style.visibility = "visible";
    }

    switch (taskId) {
        case 0:
            $("taskName").innerHTML = "Kedves tanuló!";
            $("taskDesc").innerHTML = "Ezen a felületen a feladataidat tudod teljesíteni, minden feladatért meghatározott mennyiségű pont jár, amit a feladatoknál láthatsz. Ezen felül az összes pontszámodat a profilodban, az összesített teljesítményt fentebb, az adott feladathoz tartozó időt majd lentebb láthatod. Ha kiemelkedően jól teljesítesz, a tanárod elérhetőve tehet számodra bizonyos badge-eket, ezeket fentebb láthatod majd.";
            $("taskDescSmall").innerHTML = "Itt találhatod a feladatokat, sok szerencsét kíván a megoldáshoz a Soluzioni Italiane csapata!";
            taskID = 0;
            break;
        case 1:
            $("taskName").innerHTML = "Első feladat";
            $("taskDesc").innerHTML = "Egy 6 g tömegű ruhaanyag 91% vizet tartalmaz . Az anyag tömege száradás után lecsökken 3 g-ra. Hány százalék nedvesség van most az anyagban?";
            taskID = 1;

            if (studentData.task1 == 0) {
                $("taskDoneButton").removeAttribute("disabled");
                $("taskDescSmall").innerHTML = "Ezt a feladatot még nem teljesítetted, 10 pontot kaphatsz a teljesítéséért.";
                rawLeft = calcTime(new Date(2021, 1, 2));

            } else {
                $("taskDescSmall").innerHTML = "Ezt a feladatot sikeresen teljesítetted, 10 pont a jutalmad.";
                $("taskDoneButton").setAttribute("disabled", "true");
                rawLeft = 0;
            }
            break;
        case 2:
            $("taskName").innerHTML = "Második feladat";
            $("taskDesc").innerHTML = "Anna, Bea és Cili elmentek almát szedni. Mindegyiknek saját kosara volt. Amikor végeztek, Anna belenézett a többiek kosarába és ezt mondta: 'Ha Bea elvesz tőlem annyi almát, amennyi már a kosarában van, majd Cili elvesz Beától szintén annyit, amennyi már a kosárban van, végezetül én is elveszek Cilitől annyi almát, amennyi a kosaramban maradt, akkor a végén mindannyiunknak ugyanannyi almája lesz.' Mennyi volt az eredeti alma mennyiség a kosarakban, ha együtt összesen 240 almájuk volt és a csere után mindenkinek80almája lett a kosarában?";
            taskID = 2;

            if (studentData.task2 == 0) {
                $("taskDoneButton").removeAttribute("disabled");
                $("taskDescSmall").innerHTML = "Ezt a feladatot még nem teljesítetted, 20 pontot kaphatsz a teljesítéséért.";
                rawLeft = calcTime(new Date(2021, 3, 5));
            } else {
                $("taskDescSmall").innerHTML = "Ezt a feladatot sikeresen teljesítetted, 20 pont a jutalmad.";
                $("taskDoneButton").setAttribute("disabled", "true");
                rawLeft = 0;
            }
            break;
        case 3:
            $("taskName").innerHTML = "Harmadik feladat";
            $("taskDesc").innerHTML = "Egy 30 g tömegű ruhaanyag 82% vizet tartalmaz . Az anyag tömege száradás után lecsökken 18 g-ra. Hány százalék nedvesség van most az anyagban?";
            taskID = 3;

            if (studentData.task3 == 0) {
                $("taskDoneButton").removeAttribute("disabled");
                $("taskDescSmall").innerHTML = "Ezt a feladatot még nem teljesítetted, 30 pontot kaphatsz a teljesítéséért.";
                rawLeft = calcTime(new Date(2021, 5, 1));
            } else {
                $("taskDescSmall").innerHTML = "Ezt a feladatot sikeresen teljesítetted, 30 pont a jutalmad.";
                $("taskDoneButton").setAttribute("disabled", "true");
                rawLeft = 0;
            }
            break;
        case 4:
            $("taskName").innerHTML = "Negyedik feladat";
            $("taskDesc").innerHTML = "Két város között a távolság 320 km. Egy időben indul egymással szembe két vonat, az egyik 45 km/h a másik 35 km/h sebességgel. Az első városból ugyanakkor elindult egy szürkefejű albatrosz is, 50 km/h sebességgel. Elrepült a szembe jövő vonatig, ott visszafordult, és repült az első vonattal szemben. Ezzel találkozva ismét visszafordult, és repült a másik vonattal szemben és így tovább. Milyen távolságot repül be a szürkefejű albatrosz, míg a vonatok találkoznak?";
            taskID = 4;

            if (studentData.task4 == 0) {
                $("taskDoneButton").removeAttribute("disabled");
                $("taskDescSmall").innerHTML = "Ezt a feladatot még nem teljesítetted, 40 pontot kaphatsz a teljesítéséért.";
                rawLeft = calcTime(new Date(2021, 0, 13));
            } else {
                $("taskDescSmall").innerHTML = "Ezt a feladatot sikeresen teljesítetted, 40 pont a jutalmad.";
                $("taskDoneButton").setAttribute("disabled", "true");
                rawLeft = 0;
            }
            break;
        case 5:
            $("taskName").innerHTML = "Ötödik feladat";
            $("taskDesc").innerHTML = "Egy farmernadrág árát 20 %-kal felemelték, majd amikor nem volt elég nagy a forgalom, a megemelt árat 25 %-kal csökkentették. Most 3600 Ft-ért lehet a farmert megvenni. Mennyi volt az eredeti ára? ";
            taskID = 5;

            if (studentData.task5 == 0) {
                $("taskDoneButton").removeAttribute("disabled");
                $("taskDescSmall").innerHTML = "Ezt a feladatot még nem teljesítetted, 50 pontot kaphatsz a teljesítéséért.";
                rawLeft = calcTime(new Date(2021, 0, 25));
            } else {
                $("taskDescSmall").innerHTML = "Ezt a feladatot sikeresen teljesítetted, 50 pont a jutalmad.";
                $("taskDoneButton").setAttribute("disabled", "true");
                rawLeft = 0;
            }
            break;
        case 6:
            $("taskName").innerHTML = "Hatodik feladat";
            $("taskDesc").innerHTML = "Egy díszfaiskolában háromféle fát nevelnek (juhar, fenyő, platán) három téglalap elrendezésű parcellában. A fenyőfák parcellájában 4-gyel kevesebb sor van, mint a juharfákéban, és minden sorban 5-tel kevesebb fa van, mint ahány fa a juhar parcella egy sorában áll. 360-nal kevesebb fenyőfa van, mint juharfa. A platánok telepítésekor a juharokéhoz viszonyítva a sorok számát 3-mal, az egy sorban lévő fák számát 2-vel növelték. Így 228-cal több platánfát telepítettek, mint juhart. Hány sor van a juharfák parcellájában? Hány juharfa van egy sorban?";
            taskID = 6;

            if (studentData.task6 == 0) {
                $("taskDoneButton").removeAttribute("disabled");
                $("taskDescSmall").innerHTML = "Ezt a feladatot még nem teljesítetted, 60 pontot kaphatsz a teljesítéséért.";
                rawLeft = calcTime(new Date(2021, 1, 24));
            } else {
                $("taskDescSmall").innerHTML = "Ezt a feladatot sikeresen teljesítetted, 60 pont a jutalmad.";
                $("taskDoneButton").setAttribute("disabled", "true");
                rawLeft = 0;
            }
            break;
    }
}

function taskHandler2(taskId) {

    $("homeButton2").className = "dropdown-item";
    $("task1Button2").className = "dropdown-item";
    $("task2Button2").className = "dropdown-item";
    $("task3Button2").className = "dropdown-item";
    $("task4Button2").className = "dropdown-item";
    $("task5Button2").className = "dropdown-item";
    $("task6Button2").className = "dropdown-item";

    if (taskId != 0) {
        $("task" + taskId + "Button2").className = "dropdown-item active";
    }
    else {
        $("homeButton2").className = "dropdown-item active";
    }

    switch (taskId) {
        case 0:
            $("taskName2").innerHTML = "Kedves tanár úr/tanárnő!";
            $("taskDesc2").innerHTML = "Ezen a felületen az Önhöz rendelt tanulók feladatainak megoldásait tudja követni. Lentebb a nevük mellett az egyes feladatokhoz kapott pontokat láthatja, illetve, hogy késedelmesen, vagy még a határidő lejárta előtt adta be megoldását. Jobbra a badge gombbal badge-ekkel jutalmazhatja a tanulókat kiemelkedő teljesítményükért. A feladatokhoz tartozó információkat a lentebb található feladatok menü alatt találhatja.";
            $("taskDescSmall2").innerHTML = "Eredményes munkát kíván a Soluzioni Italiane csapata!";
            break;
        case 1:
            $("taskName2").innerHTML = "Első feladat";
            $("taskDesc2").innerHTML = "Egy 6 g tömegű ruhaanyag 91% vizet tartalmaz . Az anyag tömege száradás után lecsökken 3 g-ra. Hány százalék nedvesség van most az anyagban?";
            $("taskDescSmall2").innerHTML = "Ezért a feladatért 10 pont jár.";
            break;
        case 2:
            $("taskName2").innerHTML = "Második feladat";
            $("taskDesc2").innerHTML = "Anna, Bea és Cili elmentek almát szedni. Mindegyiknek saját kosara volt. Amikor végeztek, Anna belenézett a többiek kosarába és ezt mondta: 'Ha Bea elvesz tőlem annyi almát, amennyi már a kosarában van, majd Cili elvesz Beától szintén annyit, amennyi már a kosárban van, végezetül én is elveszek Cilitől annyi almát, amennyi a kosaramban maradt, akkor a végén mindannyiunknak ugyanannyi almája lesz.' Mennyi volt az eredeti alma mennyiség a kosarakban, ha együtt összesen 240 almájuk volt és a csere után mindenkinek80almája lett a kosarában?";
            $("taskDescSmall2").innerHTML = "Ezért a feladatért 20 pont jár.";
            break;
        case 3:
            $("taskName2").innerHTML = "Harmadik feladat";
            $("taskDesc2").innerHTML = "Egy 30 g tömegű ruhaanyag 82% vizet tartalmaz . Az anyag tömege száradás után lecsökken 18 g-ra. Hány százalék nedvesség van most az anyagban?";
            $("taskDescSmall2").innerHTML = "Ezért a feladatért 30 pont jár.";
            break;
        case 4:
            $("taskName2").innerHTML = "Negyedik feladat";
            $("taskDesc2").innerHTML = "Két város között a távolság 320 km. Egy időben indul egymással szembe két vonat, az egyik 45 km/h a másik 35 km/h sebességgel. Az első városból ugyanakkor elindult egy szürkefejű albatrosz is, 50 km/h sebességgel. Elrepült a szembe jövő vonatig, ott visszafordult, és repült az első vonattal szemben. Ezzel találkozva ismét visszafordult, és repült a másik vonattal szemben és így tovább. Milyen távolságot repül be a szürkefejű albatrosz, míg a vonatok találkoznak?";
            $("taskDescSmall2").innerHTML = "Ezért a feladatért 40 pont jár.";
            break;
        case 5:
            $("taskName2").innerHTML = "Ötödik feladat";
            $("taskDesc2").innerHTML = "Egy farmernadrág árát 20 %-kal felemelték, majd amikor nem volt elég nagy a forgalom, a megemelt árat 25 %-kal csökkentették. Most 3600 Ft-ért lehet a farmert megvenni. Mennyi volt az eredeti ára? ";
            $("taskDescSmall2").innerHTML = "Ezért a feladatért 50 pont jár.";
            break;
        case 6:
            $("taskName2").innerHTML = "Hatodik feladat";
            $("taskDesc2").innerHTML = "Egy díszfaiskolában háromféle fát nevelnek (juhar, fenyő, platán) három téglalap elrendezésű parcellában. A fenyőfák parcellájában 4-gyel kevesebb sor van, mint a juharfákéban, és minden sorban 5-tel kevesebb fa van, mint ahány fa a juhar parcella egy sorában áll. 360-nal kevesebb fenyőfa van, mint juharfa. A platánok telepítésekor a juharokéhoz viszonyítva a sorok számát 3-mal, az egy sorban lévő fák számát 2-vel növelték. Így 228-cal több platánfát telepítettek, mint juhart. Hány sor van a juharfák parcellájában? Hány juharfa van egy sorban?";
            $("taskDescSmall2").innerHTML = "Ezért a feladatért 60 pont jár.";
            break;
    }
}

function writePoints() {
    let currentStudent = database.collection("students").doc(firebase.auth().currentUser.uid);
    switch (taskID) {

        case 1:
            rawLeft = 0;
            $("taskDoneButton").setAttribute("disabled", "true");
            $("taskDescSmall").innerHTML = "Ezt a feladatot sikeresen teljesítetted, 10 pont a jutalmad.";
            studentData = new Student(studentData.badge1, studentData.badge2, studentData.badge3, studentData.class, studentData.email, studentData.name, 10, studentData.task2, studentData.task3, studentData.task4, studentData.task5, studentData.task6);
            generateProfile(studentData);
            setTimeout(function () { classSpecificStudentConstructor(studentData); }, 500);
            return currentStudent.update({
                task1: 10
            });
        case 2:
            rawLeft = 0;
            $("taskDoneButton").setAttribute("disabled", "true");
            $("taskDescSmall").innerHTML = "Ezt a feladatot sikeresen teljesítetted, 20 pont a jutalmad.";
            studentData = new Student(studentData.badge1, studentData.badge2, studentData.badge3, studentData.class, studentData.email, studentData.name, studentData.task1, 20, studentData.task3, studentData.task4, studentData.task5, studentData.task6);
            generateProfile(studentData);
            setTimeout(function () { classSpecificStudentConstructor(studentData); }, 500);
            return currentStudent.update({
                task2: 20
            });

        case 3:
            rawLeft = 0;
            $("taskDoneButton").setAttribute("disabled", "true");
            $("taskDescSmall").innerHTML = "Ezt a feladatot sikeresen teljesítetted, 30 pont a jutalmad.";
            studentData = new Student(studentData.badge1, studentData.badge2, studentData.badge3, studentData.class, studentData.email, studentData.name, studentData.task1, studentData.task2, 30, studentData.task4, studentData.task5, studentData.task6);
            generateProfile(studentData);
            setTimeout(function () { classSpecificStudentConstructor(studentData); }, 500);
            return currentStudent.update({
                task3: 30
            });

        case 4:
            rawLeft = 0;
            $("taskDoneButton").setAttribute("disabled", "true");
            $("taskDescSmall").innerHTML = "Ezt a feladatot sikeresen teljesítetted, 40 pont a jutalmad.";
            studentData = new Student(studentData.badge1, studentData.badge2, studentData.badge3, studentData.class, studentData.email, studentData.name, studentData.task1, studentData.task2, studentData.task3, 40, studentData.task5, studentData.task6);
            generateProfile(studentData);
            setTimeout(function () { classSpecificStudentConstructor(studentData); }, 500);
            return currentStudent.update({
                task4: 40
            });

        case 5:
            rawLeft = 0;
            $("taskDoneButton").setAttribute("disabled", "true");
            $("taskDescSmall").innerHTML = "Ezt a feladatot sikeresen teljesítetted, 50 pont a jutalmad.";
            studentData = new Student(studentData.badge1, studentData.badge2, studentData.badge3, studentData.class, studentData.email, studentData.name, studentData.task1, studentData.task2, studentData.task3, studentData.task4, 50, studentData.task6);
            generateProfile(studentData);
            setTimeout(function () { classSpecificStudentConstructor(studentData); }, 500);
            return currentStudent.update({
                task5: 50
            });

        case 6:
            rawLeft = 0;
            $("taskDoneButton").setAttribute("disabled", "true");
            $("taskDescSmall").innerHTML = "Ezt a feladatot sikeresen teljesítetted, 60 pont a jutalmad.";
            studentData = new Student(studentData.badge1, studentData.badge2, studentData.badge3, studentData.class, studentData.email, studentData.name, studentData.task1, studentData.task2, studentData.task3, studentData.task4, studentData.task5, 60);
            generateProfile(studentData);
            setTimeout(function () { classSpecificStudentConstructor(studentData); }, 500);
            return currentStudent.update({
                task6: 60
            });
    }
}