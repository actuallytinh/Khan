var xPos = 44;
var yPos = 43;


draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    
    var starScatterX = Math.floor(Math.random() * 500) + 1; 
    var starScatterY = Math.floor(Math.random() * 500) + 1; 
    
    ellipse(starScatterX, starScatterY, 7 , 7);
    
    // Building 1
    fill(38, 38, 38);
    rect(58 ,211 , 90, 191);
    // Windows 1
    fill(255, 251, 0);
    rect(63, 234, 82, 17);
    // Windows 2
    fill(255, 251, 0);
    rect(63, 259, 82, 17);
    // Windows 3
    fill(255, 251, 0);
    rect(63, 286, 82, 17);
    // Windows 4
    fill(255, 251, 0);
    rect(63, 315, 82, 17);
    
    // Building 2
    fill(38, 38, 38);
    rect(195 ,244 , 90, 191);
        // Windows 1
    fill(255, 251, 0);
    rect(200, 263, 82, 17);
    // Windows 2
    fill(255, 251, 0);
    rect(200, 289, 82, 17);
    // Windows 3
    fill(255, 251, 0);
    rect(200, 316, 82, 17);
    // Windows 4
    fill(255, 251, 0);
    rect(200, 340, 82, 17);
    
    xPos += 10;
    yPos += 10;
};
