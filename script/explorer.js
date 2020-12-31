var taskID = 0;
function taskHandler(taskId) {

    clearInterval(timeLeft);
    timeLeft = setInterval(myTimer, 1000);
    baseSeconds = 5;
    baseMinutes = 1; //percek+1
    baseHours = 2; //órák+1
    baseDays = 0;

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
            $("taskDesc").innerHTML = "Curabitur vitae aliquam velit. Etiam rhoncus ac nibh aliquam mattis. Phasellus sem nisl, consequat vel porta id, rhoncus quis justo. Nunc id est eget mauris interdum aliquet in sit amet libero. Cras hendrerit turpis ex, ut sodales risus consectetur in. In dapibus fringilla gravida. Donec eu varius nisi, a luctus justo. Proin eu enim in massa tempor suscipit ut in est. Curabitur laoreet turpis convallis, volutpat erat venenatis, pellentesque turpis. Integer est dolor, ullamcorper vel tempus et, auctor nec mi. Duis porta rhoncus euismod. Vivamus nisl nisi, sodales non ullamcorper sit amet, maximus id lorem. Nullam quis sollicitudin est.";
            taskID = 1;
            if (studentData.task1 == 0) {
                $("taskDoneButton").removeAttribute("disabled");
                $("taskDescSmall").innerHTML = "Ezt a feladatot még nem teljesítetted, 10 pontot kaphatsz a teljesítéséért.";
                

            } else {
                $("taskDescSmall").innerHTML = "Ezt a feladatot sikeresen teljesítetted, 10 pont a jutalmad.";
                $("taskDoneButton").setAttribute("disabled", "true");
                baseDays = -1;
            }
            break;
        case 2:
            $("taskName").innerHTML = "Második feladat";
            $("taskDesc").innerHTML = "Suspendisse mattis vel dui a aliquet. Nam lectus dolor, rutrum sit amet tristique eget, hendrerit at erat. Suspendisse potenti. Aenean gravida vestibulum rutrum. Nulla quis ex quis lectus facilisis lacinia. Etiam ultricies, tellus ac posuere bibendum, tellus justo porttitor ex, non sagittis dui tortor at diam. Nulla pretium lectus eget consectetur placerat. Donec sodales pellentesque lectus, eget tempus enim faucibus ut. Suspendisse mollis sem odio, ut convallis metus facilisis at.";
            taskID = 2;
            if (studentData.task2 == 0) {
                $("taskDoneButton").removeAttribute("disabled");
                $("taskDescSmall").innerHTML = "Ezt a feladatot még nem teljesítetted, 20 pontot kaphatsz a teljesítéséért.";
            } else {
                $("taskDescSmall").innerHTML = "Ezt a feladatot sikeresen teljesítetted, 20 pont a jutalmad.";
                $("taskDoneButton").setAttribute("disabled", "true");
                baseDays = -1;
            }
            break;
        case 3:
            $("taskName").innerHTML = "Harmadik feladat";
            $("taskDesc").innerHTML = "Integer hendrerit, ipsum et vulputate posuere, eros lacus pellentesque enim, nec sagittis turpis nisl eget tortor. Vivamus fringilla, quam id pellentesque euismod, dolor tortor blandit purus, pellentesque interdum odio urna et ex. Phasellus nec nisl scelerisque, elementum purus vitae, semper sem. Integer dictum, nibh a dictum varius, libero odio rutrum mi, sit amet congue urna velit at dui. Sed risus ligula, venenatis eget maximus nec, iaculis nec tellus. In quis malesuada eros. Proin ac elit non tellus finibus tristique. Phasellus lacinia nisl posuere sem consectetur cursus. Integer id fringilla magna, quis sagittis massa. Nullam a malesuada enim, eget eleifend massa. In faucibus rhoncus scelerisque. Aenean mi sapien, pharetra quis cursus vitae, interdum at quam. Donec pharetra ullamcorper libero, et laoreet lacus vehicula eu. Aliquam semper mi nec tempor vestibulum. Morbi accumsan sit amet nunc at finibus.";
            taskID = 3;
            if (studentData.task3 == 0) {
                $("taskDoneButton").removeAttribute("disabled");
                $("taskDescSmall").innerHTML = "Ezt a feladatot még nem teljesítetted, 30 pontot kaphatsz a teljesítéséért.";
            } else {
                $("taskDescSmall").innerHTML = "Ezt a feladatot sikeresen teljesítetted, 30 pont a jutalmad.";
                $("taskDoneButton").setAttribute("disabled", "true");
                baseDays = -1;
            }
            break;
        case 4:
            $("taskName").innerHTML = "Negyedik feladat";
            $("taskDesc").innerHTML = "Fusce efficitur pulvinar leo, eu aliquet felis tincidunt sed. Morbi aliquet nulla augue, lacinia gravida velit auctor non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque dapibus ante diam, vitae sagittis justo vestibulum sit amet. Integer id neque id diam eleifend tempus vel at ex. Donec lacinia nisl sed pellentesque congue. Curabitur ullamcorper efficitur sodales. Mauris vestibulum laoreet massa, laoreet rutrum est fermentum posuere. Quisque ornare, justo ac consectetur blandit, nibh sem accumsan urna, ac tristique tellus dolor in nisi. Pellentesque sed tempus urna. Maecenas egestas gravida nisi sit amet aliquet. Phasellus porta tortor at eros tempus, nec posuere mauris venenatis. Sed bibendum molestie neque, eget porta tortor pharetra ac.";
            taskID = 4;
            if (studentData.task4 == 0) {
                $("taskDoneButton").removeAttribute("disabled");
                $("taskDescSmall").innerHTML = "Ezt a feladatot még nem teljesítetted, 40 pontot kaphatsz a teljesítéséért.";
            } else {
                $("taskDescSmall").innerHTML = "Ezt a feladatot sikeresen teljesítetted, 40 pont a jutalmad.";
                $("taskDoneButton").setAttribute("disabled", "true");
                baseDays = -1;
            }
            break;
        case 5:
            $("taskName").innerHTML = "Ötödik feladat";
            $("taskDesc").innerHTML = "Phasellus egestas bibendum ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut in luctus odio. Sed in nibh quis dui interdum consequat. Nunc faucibus congue ipsum quis faucibus. Nulla at molestie urna. Nulla facilisi. Proin sit amet lobortis nunc, nec rhoncus erat. Quisque ut aliquet neque. Etiam vel felis felis. Phasellus congue magna nec dignissim finibus. Etiam sit amet iaculis ipsum, sit amet hendrerit arcu. Proin massa mauris, lobortis ornare nisi sed, lacinia iaculis libero.";
            taskID = 5;
            if (studentData.task5 == 0) {
                $("taskDoneButton").removeAttribute("disabled");
                $("taskDescSmall").innerHTML = "Ezt a feladatot még nem teljesítetted, 50 pontot kaphatsz a teljesítéséért.";
            } else {
                $("taskDescSmall").innerHTML = "Ezt a feladatot sikeresen teljesítetted, 50 pont a jutalmad.";
                $("taskDoneButton").setAttribute("disabled", "true");
                baseDays = -1;
            }
            break;
        case 6:
            $("taskName").innerHTML = "Hatodik feladat";
            $("taskDesc").innerHTML = "Maecenas molestie dui at magna dapibus, eu viverra arcu cursus. Morbi nibh massa, luctus non suscipit vel, ultrices vitae est. Mauris volutpat consectetur tellus id commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus porttitor quam nec leo auctor, et ornare erat vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In velit ante, lobortis eget feugiat vitae, scelerisque id libero. Sed pellentesque scelerisque leo. In quis erat urna. Vivamus semper non nisl quis sagittis.";
            taskID = 6;
            if (studentData.task6 == 0) {
                $("taskDoneButton").removeAttribute("disabled");
                $("taskDescSmall").innerHTML = "Ezt a feladatot még nem teljesítetted, 60 pontot kaphatsz a teljesítéséért.";
            } else {
                $("taskDescSmall").innerHTML = "Ezt a feladatot sikeresen teljesítetted, 60 pont a jutalmad.";
                $("taskDoneButton").setAttribute("disabled", "true");
                baseDays = -1;
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
            $("taskDesc2").innerHTML = "Curabitur vitae aliquam velit. Etiam rhoncus ac nibh aliquam mattis. Phasellus sem nisl, consequat vel porta id, rhoncus quis justo. Nunc id est eget mauris interdum aliquet in sit amet libero. Cras hendrerit turpis ex, ut sodales risus consectetur in. In dapibus fringilla gravida. Donec eu varius nisi, a luctus justo. Proin eu enim in massa tempor suscipit ut in est. Curabitur laoreet turpis convallis, volutpat erat venenatis, pellentesque turpis. Integer est dolor, ullamcorper vel tempus et, auctor nec mi. Duis porta rhoncus euismod. Vivamus nisl nisi, sodales non ullamcorper sit amet, maximus id lorem. Nullam quis sollicitudin est.";
            $("taskDescSmall2").innerHTML = "Ezért a feladatért 10 pont jár.";
            break;
        case 2:
            $("taskName2").innerHTML = "Második feladat";
            $("taskDesc2").innerHTML = "Suspendisse mattis vel dui a aliquet. Nam lectus dolor, rutrum sit amet tristique eget, hendrerit at erat. Suspendisse potenti. Aenean gravida vestibulum rutrum. Nulla quis ex quis lectus facilisis lacinia. Etiam ultricies, tellus ac posuere bibendum, tellus justo porttitor ex, non sagittis dui tortor at diam. Nulla pretium lectus eget consectetur placerat. Donec sodales pellentesque lectus, eget tempus enim faucibus ut. Suspendisse mollis sem odio, ut convallis metus facilisis at.";
            $("taskDescSmall2").innerHTML = "Ezért a feladatért 20 pont jár.";
            break;
        case 3:
            $("taskName2").innerHTML = "Harmadik feladat";
            $("taskDesc2").innerHTML = "Integer hendrerit, ipsum et vulputate posuere, eros lacus pellentesque enim, nec sagittis turpis nisl eget tortor. Vivamus fringilla, quam id pellentesque euismod, dolor tortor blandit purus, pellentesque interdum odio urna et ex. Phasellus nec nisl scelerisque, elementum purus vitae, semper sem. Integer dictum, nibh a dictum varius, libero odio rutrum mi, sit amet congue urna velit at dui. Sed risus ligula, venenatis eget maximus nec, iaculis nec tellus. In quis malesuada eros. Proin ac elit non tellus finibus tristique. Phasellus lacinia nisl posuere sem consectetur cursus. Integer id fringilla magna, quis sagittis massa. Nullam a malesuada enim, eget eleifend massa. In faucibus rhoncus scelerisque. Aenean mi sapien, pharetra quis cursus vitae, interdum at quam. Donec pharetra ullamcorper libero, et laoreet lacus vehicula eu. Aliquam semper mi nec tempor vestibulum. Morbi accumsan sit amet nunc at finibus.";
            $("taskDescSmall2").innerHTML = "Ezért a feladatért 30 pont jár.";
            break;
        case 4:
            $("taskName2").innerHTML = "Negyedik feladat";
            $("taskDesc2").innerHTML = "Fusce efficitur pulvinar leo, eu aliquet felis tincidunt sed. Morbi aliquet nulla augue, lacinia gravida velit auctor non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque dapibus ante diam, vitae sagittis justo vestibulum sit amet. Integer id neque id diam eleifend tempus vel at ex. Donec lacinia nisl sed pellentesque congue. Curabitur ullamcorper efficitur sodales. Mauris vestibulum laoreet massa, laoreet rutrum est fermentum posuere. Quisque ornare, justo ac consectetur blandit, nibh sem accumsan urna, ac tristique tellus dolor in nisi. Pellentesque sed tempus urna. Maecenas egestas gravida nisi sit amet aliquet. Phasellus porta tortor at eros tempus, nec posuere mauris venenatis. Sed bibendum molestie neque, eget porta tortor pharetra ac.";
            $("taskDescSmall2").innerHTML = "Ezért a feladatért 40 pont jár.";
            break;
        case 5:
            $("taskName2").innerHTML = "Ötödik feladat";
            $("taskDesc2").innerHTML = "Phasellus egestas bibendum ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut in luctus odio. Sed in nibh quis dui interdum consequat. Nunc faucibus congue ipsum quis faucibus. Nulla at molestie urna. Nulla facilisi. Proin sit amet lobortis nunc, nec rhoncus erat. Quisque ut aliquet neque. Etiam vel felis felis. Phasellus congue magna nec dignissim finibus. Etiam sit amet iaculis ipsum, sit amet hendrerit arcu. Proin massa mauris, lobortis ornare nisi sed, lacinia iaculis libero.";
            $("taskDescSmall2").innerHTML = "Ezért a feladatért 50 pont jár.";
            break;
        case 6:
            $("taskName2").innerHTML = "Hatodik feladat";
            $("taskDesc2").innerHTML = "Maecenas molestie dui at magna dapibus, eu viverra arcu cursus. Morbi nibh massa, luctus non suscipit vel, ultrices vitae est. Mauris volutpat consectetur tellus id commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus porttitor quam nec leo auctor, et ornare erat vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In velit ante, lobortis eget feugiat vitae, scelerisque id libero. Sed pellentesque scelerisque leo. In quis erat urna. Vivamus semper non nisl quis sagittis.";
            $("taskDescSmall2").innerHTML = "Ezért a feladatért 60 pont jár.";
            break;
    }
}

function init() {
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
window.addEventListener("load", init, false);

function writePoints() {
    let currentStudent = database.collection("students").doc(firebase.auth().currentUser.uid);
    switch (taskID) {

        case 1:
            baseDays = -1;
            $("taskDoneButton").setAttribute("disabled", "true");
            $("taskDescSmall").innerHTML = "Ezt a feladatot sikeresen teljesítetted, 10 pont a jutalmad.";
            studentData = new Student(studentData.badge1, studentData.badge2, studentData.badge3, studentData.class, studentData.email, studentData.name, 10, studentData.task2, studentData.task3, studentData.task4, studentData.task5, studentData.task6);
            generateProfile(studentData);
            return currentStudent.update({
                task1: 10
            });
        case 2:
            baseDays = -1;
            $("taskDoneButton").setAttribute("disabled", "true");
            $("taskDescSmall").innerHTML = "Ezt a feladatot sikeresen teljesítetted, 20 pont a jutalmad.";
            studentData = new Student(studentData.badge1, studentData.badge2, studentData.badge3, studentData.class, studentData.email, studentData.name, studentData.task1, 20, studentData.task3, studentData.task4, studentData.task5, studentData.task6);
            generateProfile(studentData);
            return currentStudent.update({
                task2: 20
            });

        case 3:
            baseDays = -1;
            $("taskDoneButton").setAttribute("disabled", "true");
            $("taskDescSmall").innerHTML = "Ezt a feladatot sikeresen teljesítetted, 30 pont a jutalmad.";
            studentData = new Student(studentData.badge1, studentData.badge2, studentData.badge3, studentData.class, studentData.email, studentData.name, studentData.task1, studentData.task2, 30, studentData.task4, studentData.task5, studentData.task6);
            generateProfile(studentData);
            return currentStudent.update({
                task3: 30
            });

        case 4:
            baseDays = -1;
            $("taskDoneButton").setAttribute("disabled", "true");
            $("taskDescSmall").innerHTML = "Ezt a feladatot sikeresen teljesítetted, 40 pont a jutalmad.";
            studentData = new Student(studentData.badge1, studentData.badge2, studentData.badge3, studentData.class, studentData.email, studentData.name, studentData.task1, studentData.task2, studentData.task3, 40, studentData.task5, studentData.task6);
            generateProfile(studentData);
            return currentStudent.update({
                task4: 40
            });

        case 5:
            baseDays = -1;
            $("taskDoneButton").setAttribute("disabled", "true");
            $("taskDescSmall").innerHTML = "Ezt a feladatot sikeresen teljesítetted, 50 pont a jutalmad.";
            studentData = new Student(studentData.badge1, studentData.badge2, studentData.badge3, studentData.class, studentData.email, studentData.name, studentData.task1, studentData.task2, studentData.task3, studentData.task4, 50, studentData.task6);
            generateProfile(studentData);
            return currentStudent.update({
                task5: 50
            });

        case 6:
            baseDays = -1;
            $("taskDoneButton").setAttribute("disabled", "true");
            $("taskDescSmall").innerHTML = "Ezt a feladatot sikeresen teljesítetted, 60 pont a jutalmad.";
            studentData = new Student(studentData.badge1, studentData.badge2, studentData.badge3, studentData.class, studentData.email, studentData.name, studentData.task1, studentData.task2, studentData.task3, studentData.task4, studentData.task5, 60);
            generateProfile(studentData);
            return currentStudent.update({
                task6: 60
            });
    }
}