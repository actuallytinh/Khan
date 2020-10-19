fill(255, 0, 255);

draw = function() {
    background(255, 255, 255);
    
    var coords = mouseX + ", " + mouseY;
    
    fill(0, 0, 0);
    text(coords, mouseX, mouseY);
    
    ellipse(mouseX, mouseY, 5, 5); 
};
