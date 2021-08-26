class Contestant{
  constructor(){
    this.name = null;
    this.index = null;
    this.answer = 0;
  }
  getCount(){
    var contestantCountref = database.ref("contestantCount")
    contestantCountref.on ("value", function(data){
      contestantCount = data.val()
    });
  }
  updateCount(count){
    database.ref("/").updateCount({
      contestantCount:count
    });
  }
  update(){
      var contestantIndex = "contestants/contestant"+ this.index
      database.ref(contestantIndex).set({
        name:this.name,
        answer:this.answer
      })
  }
  //to fetch the information related to the contestant from the database
  getPlayerInfo(){
    var contestantsInforef = database.ref("contestants")
    contestantsInforef.on("value", function(data){
      allPlayers = data.val()
    });
  }
}