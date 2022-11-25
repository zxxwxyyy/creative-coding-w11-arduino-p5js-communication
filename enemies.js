class Enemies{
    constructor(x, y, r){
        this.x = x
        this.y = y
        this.r = random(10, 25)
        this.xspeed = random(1, -1)
        this.yspeed = random(1, -1)
        // this.xspeed = 0
        // this.yspeed = 0
    }

    display(){
        noStroke();
        ellipseMode(CENTER)
        fill(255, 0, 111)
        ellipse(this.x, this.y, this.r * 2)
        // image(enemies[1], this.x, this.y, this.r * 2)

    }
    
    contains(px, py){
        let d = dist(posX, posY, this.x, this.y);
        if(d < this.r){
            return true;
        }else{
            return false;
        }
    }

    // ----- limit the movement of the enemies
    //reference: https://www.youtube.com/watch?v=xkIzsoNkHyA&ab_channel=NIRUPAMTECH
    // ----- update the move function so that it will follow my arraymode whenever user click the button to change mode. 

    move(){
    if(j == 1){
    if(this.x >= windowWidth - 350 || this.x <= 10){
            this.xspeed = -this.xspeed
        }
        this.x += this.xspeed 
        this.y == this.yspeed
    }
    if(j == 2){
        if(this.x >= windowWidth - 350 || this.x <= 20){
            this.xspeed = -this.xspeed
        }
        this.x += this.xspeed * 5
        this.y == this.yspeed
    }
    if(j == 3){
    if(this.x >= windowWidth - 350 || this.x <= 20){
        this.xspeed = -this.xspeed
    }
    this.x += this.xspeed * 8
    this.y == this.yspeed
}
}



    // moveEasy(){
    //     if(this.x >= 790 || this.x <= 10){
    //         this.xspeed = -this.xspeed
    //     }
    //     this.x += this.xspeed 
    //     this.y == this.yspeed
    // }

    // moveMedium(){
    //     if(this.x >= 780 || this.x <= 20){
    //         this.xspeed = -this.xspeed
    //     }
    //     this.x += this.xspeed * 5
    //     this.y == this.yspeed
    // }

    // moveHard(){
    //     if(this.x >= 780 || this.x <= 20){
    //         this.xspeed = -this.xspeed
    //     }
    //     this.x += this.xspeed * 8
    //     this.y == this.yspeed
    // }
}