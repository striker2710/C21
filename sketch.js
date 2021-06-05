var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     s1 = createSprite(50,580,200,20);
     s1.shapeColor= "red";

     s2 = createSprite(270,580,200,20);
     s2.shapeColor= "yellow";

     s3 = createSprite(490,580,200,20);
     s3.shapeColor= "green";

     s4 = createSprite(720,580,200,20);
     s4.shapeColor= "blue";

     box = createSprite(random(50,750),50,20,20);
     box.shapeColor= "white";
     box.velocityX = 10;
     box.velocityY = 5;
     edge = createEdgeSprites();


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
drawSprites(); 
box.bounceOff(edge);
if(s1.isTouching(box)&& box.bounceOff(s1)){
    box.shapeColor= "red";
}

if(s2.isTouching(box)&& box.bounceOff(s2)){
    box.shapeColor= "yellow";
}

if(s3.isTouching(box)&& box.bounceOff(s3)){
    box.shapeColor= "green";
}

if(s4.isTouching(box)&& box.bounceOff(s4)){
    box.shapeColor= "blue";
}


    //add condition to check if box touching surface and make it box
}
