
class Quiz{
    constructor(){
    
    }
// to find the current state of the game from the database
    getState()
    {
        var gameStateref = database.ref("gameState")
        gameStateref.on("value", function(data)
        {
            gameStateref = data.val()
        });
    }
// to update the value of the gameState node in the database 
    update(state)
    {
        gameStateref.ref("/").update( {
            gameStateref:state
        }); 
    }

    async start()
    {
        if(gameState == 0){
            contestant = new Contestant()
            var contestantCountref = await database.ref("contestantCount").once("value")
            if(contestantCountref.exists()){
                contestantCount = contestantCountref.val()
                contestant.getCount()
            }
            question = new Question()
            question.display()
        }
    }

    play()
    {

    }
}