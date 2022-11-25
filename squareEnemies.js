class Sqenemies{
    constructor(x, y, w, h){
        this.x = x
        this.y = y
        this.w = random(10, 25)
        this.h = random(10, 25)
        this.xspeed = random(2, -1)
        this.yspeed = random(2, -1)
    }

    display(){
        noStroke();
        rectMode(CENTER)
        fill(0, 244, 255)
        rect(this.x, this.y, this.w, this.h)

    }
    
    contains(px, py){
        let d = dist(posX, posY, this.x, this.y);
        if(d < this.w){
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


}