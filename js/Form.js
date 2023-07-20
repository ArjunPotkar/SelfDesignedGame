class Form{
    constructor(){
        this.input=createInput("").attribute("placeholder", "Enter your name");
        this.playButton = createButton("Play");
        this.question=createElement("h1")
        this.singlePlayerButton=createButton("Single Player");
        this.twoPlayerButton=createButton("2 Players");
        this.titleImg = createImg("./assets/title.png", "game title");
        this.greeting = createElement("h2");

    }
    setElementsPosition(){
        this.titleImg.position(120, 50);
        this.question.position(width/2-250,height/2-200);
        this.singlePlayerButton.position(width / 2 - 200, height / 2 - 80);
        this.twoPlayerButton.position(width/2, height/2-80);
    }
    setElementsStyle(){
        this.titleImg.class("gameTitle")
        this.question.class("greeting")
        this.singlePlayerButton.class("customButton");
        this.twoPlayerButton.class("customButton");
    }
    handleTwoPlayer(){
        this.twoPlayerButton.mousePressed(()=>{
            this.question.hide();
            this.singlePlayerButton.hide();
            this.twoPlayerButton.hide();
            this.input.position(width / 2 - 110, height / 2 - 80);
            this.playButton.position(width / 2 - 90, height / 2 - 20);
            this.input.class("customInput");
            this.playButton.class("customButton");
        })
    }
    handlePlayButton(){
        this.playButton.mousePressed(()=>{
            this.playButton.hide();
            this.input.hide();
            this.greeting.position(width / 2 - 300, height / 2 - 100);
            this.greeting.class("greeting"); 
            var message = `Hello ${this.input.value()}
            </br>wait for another player to join...`;
            this.greeting.html(message);
            playerCount+=1;
            player.updateCount(playerCount);
        })
    }
    handleSinglePlayer(){
         this.singlePlayerButton.mousePressed(()=>{
            this.question.hide();
            this.singlePlayerButton.hide();
            this.twoPlayerButton.hide();  
            playerCount+=2;
            player.updateCount(playerCount);
        })
    }
    display(){
        this.setElementsPosition();
        this.setElementsStyle();
        this.question.html("2 Player or Single Player?");
        this.handleTwoPlayer();
        this.handlePlayButton();
        this.handleSinglePlayer();
    }
}