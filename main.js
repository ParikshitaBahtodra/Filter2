var nose_x=0;
var nose_y=0;

function preload(){
 big_red_nose=loadImage("https://i.postimg.cc/rpX6YGdt/1649398.jpg");
}

function setup(){
canvas=createCanvas(300,300);
canvas.position(525,300);

 video=createCapture(VIDEO);
video.size(300,400)
video.position(525,250);

 poseNet=ml5.poseNet(video,modelLoade);

poseNet.on('pose',gotposes);
}

function draw(){
image(video,525,250,300,300);
fill(255,0,0);
stroke(255,0,0);
circle(nose_x,nose_y,20);
image(big_red_nose,nose_x,nose_y,30,30);
}

function takesnapshot(){
    save("red_nose_image.png");
}

function modelLoade(){
    console.log("mode loaded");
}

function gotposes(results){
if (results.length>0){
    console.log(results);
   nose_x=results[0].pose.nose.x;
   nose_y=results[0].pose.nose.y;
}
}