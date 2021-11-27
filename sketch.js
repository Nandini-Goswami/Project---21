var canvas;
var music;
var boxedges;
var square1,square2,square3,square4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1000,600);

    //create 4 different surfaces
    square1 = createSprite(200,580,100,20);
    square1.shapeColor = "red"
    square2 = createSprite(400,580,100,20);
    square2.shapeColor = "yellow"
    square3 = createSprite(600,580,100,20);
    square3.shapeColor = "blue"
    square4 = createSprite(800,580,100,20);
    square4.shapeColor = "green"

   


    //create box sprite and give velocity
    box = createSprite(random(100,800),50,20,20);
    box.shapeColor = "white"
    box.velocityX = 7;
    box.velocityY = 8;

}

function draw() {
    background(rgb(169,169,169));
    drawSprites();
   
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges)

    if(box.isTouching(square1)){
        box.shapeColor = "red"
        box.velocityX = 0;
        box.velocityY = 0;
    }

    if(box.isTouching(square2)){
        box.shapeColor = "yellow"
        box.velocityX = 0;
        box.velocityY = 0;
    }
    if(box.isTouching(square3)){
        box.shapeColor = "blue"
        box.velocityX = 0;
        box.velocityY = 0;
    }
    if(box.isTouching(square4)&&box.bounceOff(square4)){
        box.shapeColor = "green"
       // box.velocityX = 0;
       // box.velocityY = 0;
    }
    //add condition to check if box touching surface and make it box
}
