var contestantCount, allPlayers, database, contestant, quiz, question, answer;
var gameState = 0
function setup(){
    createCanvas(850,400)
    database = firebase.database()
    quiz = new Quiz();
    quiz.getState();
    quiz.start();

}


function draw(){
    background("pink");
    if(contestantCount == 2)
    {
        quiz.update(1)
    }

   
}