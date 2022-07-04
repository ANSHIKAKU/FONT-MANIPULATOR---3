noseX=0;
noseY=0;
diffrence = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500)

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#5196e3');
    textSize(diffrence);
    fill('FFE787');
    text('Anshika',50,400);
}

function modelLoaded() {
    console.log = ('PoseNet Is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        diffrence = floor(leftWristX - rightWristX);

        
    }
}