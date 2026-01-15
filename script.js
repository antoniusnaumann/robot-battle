let battleField;

function setup() {
    createCanvas(windowWidth, windowHeight);
    battleField = new BattleField(random(width), random(height));
    noLoop();
    redraw();
}

function draw(){
    background(0);
    battleField.draw();
    text("r to randomize, c to center. +/- to increase/decrease diameter", 10, 10);
}

function keyPressed(){
    if (key === 'r' || key === 'R') {
        battleField.refresh_center();
    }
    if (key === 'c' || key === 'C') {
        battleField.center();
    }
    if (key === '=' || key === '+') {
        battleField.diameter += 1000;
    }
    if (key === '-') {
        battleField.diameter -= 1000;
    }
    redraw();
}

class BattleField {
    constructor(x, y) {
        this.cx = x;
        this.cy = y;
        this.num_circle = 55;
        this.diameter = max(width, height) * 6;
        this.color = 0;
    }
    draw() {
        this.color = 0;
        for (let i = 0; i < this.num_circle; i++) {
            let d = this.diameter / this.num_circle;
            this.switch_color();
            strokeWeight(0);
            ellipse(this.cx, this.cy,
                this.diameter - d * i, this.diameter - d * i)
        }
    }
    switch_color() {
        switch (this.color) {
            case 0:
                fill(0);
                this.color = 1;
                break;
            case 1:
                fill(172);
                this.color = 2;
                break;
            case 2:
                fill(255);
                this.color = 0;
                break;
            default:
                console.error("something went wrong");
                break;
        }
    }
    get_color_at_point(px, py) {
        let d = sqrt((px - this.cx) * (px - this.cx) +
            (py - this.cy) * (py - this.cy));
        let t = this.diameter / this.num_circle / 2;
        let r = d / t;
        return parseInt(3 - r % 3);
    }

    center(){
        this.cx = width/2;
        this.cy = height/2;
    }

    refresh_center(){
        this.cx = random(width);
        this.cy = random(height);
    }


}
