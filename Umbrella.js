class Umb {
    constructor(x,y) {
        var options = {
            isStatic: true
        }
        this.umb = Bodies.circle(x, y, 50, options)
        this.image = loadImage("Walking Frame/walking_1.png")
        World.add(world, this.umb)
        
    }
    update() {

    }
    display() {
        fill("blue")
        imageMode(CENTER)
        image(this.image, this.umb.position.x, this.umb.position.y, 400, 550)
    }
}