class Polygam {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("polygon.png");
    }
  
    display() {
        imageMode(CENTRE)
        image(polygon_png,polygon.position.x,polygon.position.y,40,40);
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
    }
  }
  