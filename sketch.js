var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    surface1 = createSprite(90,570,190,20);
    surface2 = createSprite(295,570,190,20);
    surface3 =  createSprite(495,570,190,20);
    surface4 = createSprite(700,570,200,20);
   
    surface1.shapeColor = "blue";
    surface2.shapeColor = "orange";
    surface3.shapeColor = "magenta";
    surface4.shapeColor = "green";

    //create box sprite and give velocity
    box = createSprite(400,100,30,30);
    box.setVelocity(4,5);
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    var edges = createEdgeSprites();
    box.bounceOff(edges);

    if(box.isTouching(surface1) || box.isTouching(surface2) || box.isTouching(surface3) || box.isTouching(surface4)){
        music.loop();
    }
    //add condition to check if box touching surface and make it box
    if(box.isTouching(surface1) && box.bounceOff(surface1)){
        box.shapeColor = surface1.shapeColor;
    }
    if(box.isTouching(surface2) && box.collide(surface2)){
        box.shapeColor = surface2.shapeColor;
        box.setVelocity(0,0);
        music.stop();
    }
    if(box.isTouching(surface3) && box.bounceOff(surface3)){
        box.shapeColor = surface3.shapeColor;
    }
    if(box.isTouching(surface4) && box.bounceOff(surface4)){
        box.shapeColor = surface4.shapeColor;
    }


    drawSprites();
}
