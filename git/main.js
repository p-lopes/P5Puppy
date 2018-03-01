function setup() {
    createCanvas(640,480);
}

function draw() {
    background('#FFFAED');
    var x = width/2;
    var y = height/2;
    
    //body
    noStroke();
    fill('#7F5B0E');
    ellipse(x,y+175, 200, 350);
    fill('#5E440D');
    ellipse(x,y+175, 150, 350);
    
    // face
    fill('#7F5B0E');
    ellipse(x,y, 200, 200);
    fill('#5E440D');
    ellipse(x + 47, y-20, 67, 67);
    ellipse(x - 47, y-20, 67, 67);
    
    //beak
    fill('#9B8211');
    triangle(x-27,y+15, x+27, y+15, x, y+60);
    fill('#EAAC25');
    triangle(x-20,y+15, x+20, y+15, x, y+60);
    
    //eyeLeft
    fill('#E2BB0D');
    ellipse(x + 42, y-26, 64, 64);
    
    //pupilLeft
    fill('#000000');
    ellipse(x + 42, y-26, 40, 40);
    
    //eyeRight
    fill('#E2BB0D');
    ellipse(x - 42, y-26, 64, 64);
    
    //pupilRight
    fill('#000000');
    ellipse(x - 42, y-26, 40, 40);
    
    //earLeft
    fill('#7F5B0E');
    triangle(x-90,y-55,x-100,y-100,x-60,y-85);
    
    //earRight
    fill('#7F5B0E');
    triangle(x+90,y-55,x+100,y-100,x+60,y-85);
    
    
}