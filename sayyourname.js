var sayName = function() {
    var textX = random(0, 300);
    var textY = random(0, 300);
    
    var yourName = "Your_Name";
    
    fill(255, 0, 0);
    textSize(30);
    text("Hi, " + yourName, textX, textY);
};

sayName();

// Call Function x3
sayName();
sayName();
sayName();
