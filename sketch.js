var  boy, backgroundIMG, ground, boyIMG, back,roof,obstaclesGroup,gameState;

function preload() {
    backgroundIMG=loadImage("Background.jpg")
    boyIMG=loadImage("boy.png");
}

function setup(){
    createCanvas(1480,1000)
    back=createSprite(100,500,1000,1000)
    boy=createSprite(200, 800,10,10)
    boy.scale=0.2
    back.addImage(backgroundIMG)
    back.scale=2
    ground= createSprite(750, 900, 1500, 10);
    ground.visible=false;
    roof = createSprite(740,0,1500,10)
    obstaclesGroup=new Group();
}

function draw(){
    //background(backgroundIMG)

    if(gameState==0){
        back.velocityX=2
        back.x=back.width/2
        ground.velocityX=3
        ground.x=ground.width/2
        boy.addImage("boy",boyIMG)
        if(keyDown(UP_ARROW)){
            boy.velocityY=-20
        }
        boy.velocityY=boy.velocityY+0.8
        boy.collide(ground);
        boy.bounceOff(roof);


        if(obstaclesGroup.isTouching(boy)){
            gameState=1
        }
    }
    if(gameState==1){
        obstaclesGroup.setVelocityXEach(0);
        starGroup.setVelocityXEach(0);
        boy.velocityY=0;
        back.velocityX=0
        ground.velocityX=0
        fill("red");
        textFont("Algerian");
        textSize(30);
        text("Game Over",740,500);
    }

    spawnObstacles();       
    drawSprites();
}

function spawnObstacles(){
    if(frameCount % 80 === 0){
        var obstacle=createSprite(1550, 800,20,20)
        
        obstacle.velocityX=-4
        var position=Math.round(random(1,2))
        if(position==1){
            obstacle.y=boy.y-Math.round(random(10,20))
        }
        if(position==2){
            obstacle.y=boy.y+Math.round(random(10,20))
        }
        obstaclesGroup.add(obstacle);
    }

    
}

