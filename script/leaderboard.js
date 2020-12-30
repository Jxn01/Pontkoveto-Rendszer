function $(id){
    return document.getElementById(id);
}

var dataSource = [["Béla",1,2,9,4,3,6],["Jani",1,2,3,7,5,6],["Sándor",1,2,3,4,5,6]];

function generateBoard(source){
    let result = "";
    for (let i = 0; i < source.length; i++) {
        result += "<li class='list-group-item'>"+source[i][0]+": "+source[i][1]+"; "+source[i][2]+"; "+source[i][3]+"; "+source[i][4]+"; "+source[i][5]+"; "+source[i][6]+" összesen: "+sumScore(source[i])+"</li>";
    }
    $("leaderboard").innerHTML = result;
}

function sumScore(scores){
    summary = 0;
    
    for(let i=1; i<7; i++){
        summary += scores[i];
    }

    return summary;
}

function init(){
    generateBoard(dataSource);
}

window.addEventListener("load",init,false);