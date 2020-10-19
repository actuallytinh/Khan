background(89, 216, 255);

var fish = function(num1, num2, bodyW, bodyH, r, g, b) {
    var centerX = num1;
    var centerY = num2;
    var bodyLength = bodyW;
    var bodyHeight = bodyH;
    var bodyColor = color(r, g, b);
    
    
    noStroke();
    fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    var tailWidth = bodyLength/4;
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY,
             centerX-bodyLength/2-tailWidth, centerY-tailHeight,
             centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};
         
fish(200, 100, 118, 74, 3, 161, 352); // Parameters (posX, posY, bodyW, bodyH, r, g, b)
fish(251, 212, 118, 74, 41, 94, 211);
fish(144, 281, 118, 74, 252, 3, 132);
fish(310, 297, 118, 74, 44, 252, 3);
