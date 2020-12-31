function generateBoard(element) {
    $("leaderboard").innerHTML += "<li class='list-group-item'>" + element.name + ": 1. feladat: " + element.task1 + " pont; 2. feladat: " + element.task2 + " pont; 3. feladat: " + element.task3 + " pont; 4. feladat: " + element.task4 + " pont; 5. feladat: " + element.task5 + " pont; 6. feladat: " + element.task6 + " pont; összesen: " + sumScore(element) + " pont</li>";
}
 
function sumScore(element) {
    let sum;
    sum = element.task1 + element.task2 + element.task3 + element.task4 + element.task5 + element.task6;
    return sum;
}
