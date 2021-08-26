class Question{
  constructor(){
    this.title = createElement("h1")
    this.question = createElement("h2")
    this.option1 = createElement("h3")
    this.option2 = createElement("h3")
    this.option3 = createElement("h3")
    this.option4 = createElement("h3")
    this.Input1 = createInput("Enter your name here...")
    this.Input2 = createInput("Enter correct option no.")
    this.button = createButton("Submit")
  }
  hide(){
    this.title.hide()
    this.Input1.hide()
    this.Input2.hide()
    this.button.hide()
  }
  setElementsPosition(){
    this.title.position(350,50)
    this.question.position(width/2, height/2-100,)
    this.option1.position(width/2-75, height/2-75)
    this.option2.position(width/2-75, height/2-50)
    this.option3.position(width/2-75, height/2-25)
    this.option4.position(width/2-75, height/2)
    this.Input1.position(width/2-125, height/2+40)
    this.Input2.position(width/2, height/2+40)
    this.button.position(width/2-40, height/2+70)
  }
  handleMousePressed(){
    this.button.mousePressed(  ()=> {
      this.button.hide()
      this.Input1.hide()
      this.Input2.hide()
      contestant.name = this.Input1.value()
      contestand.answer =  this.Input2.value()
      contestantCount = contestantCount+1
      contestant.index = contestantCount
      contestant.update()
      contestant.updateCount(contestantCount)
    }
    )
  }

  display(){
    this.question.html("what starts and ends with letter E?")
    this.option1.html("1:Everyone")
    this.option2.html("2:Envelope")
    this.option3.html("3:Estimate")
    this.option4.html("4:Example")
    this.handleMousePressed()
    //this.hide()
    this.setElementsPosition()

  }
}