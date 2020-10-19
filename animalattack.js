var bodyX = 200;
var bodyY = 220;
var bodyW = 145;
var faceW = bodyW/2;
var eyeSize = faceW/10;

draw = function() {
    background(207, 254, 255);
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, bodyW, bodyW); // body?
    ellipse(bodyX, bodyY-80, faceW, faceW); // face?
    bodyW += 1;
    faceW += 1;
    
    // eyes
    fill(0, 0, 0);
    ellipse(190, 135, eyeSize, eyeSize);
    ellipse(212, 135, eyeSize, eyeSize);
    
    fill(255, 132, 0);
    ellipse(201, 152, 41, 10);
};
