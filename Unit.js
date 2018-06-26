var DEFAULT_SPEED = 3;

function getUnitGraphics(radius, color) {
    var sprite = new PIXI.Sprite(discTexture);
    sprite.scale.set((radius*2)/sprite.width);
    unitLayer.addChild(sprite);

    sprite.tint = color;
    sprite.anchor.set(0.5);
    return sprite;
}


class Unit {

    constructor(x, y, health, radius, color) {
        this.graphics = getUnitGraphics(radius, color);
        this.x = x;
        this.y = y;
        this.dx = 0;
        this.dy = 0;
        this.radius = radius;
        this.speed = DEFAULT_SPEED;
        this.health = health;
    }

    set x(v) { this.graphics.x = v; }
    get x() { return this.graphics.x; }
    set y(v) { this.graphics.y = v; }
    get y() { return this.graphics.y; }

    move() {
        let mag = Math.sqrt(this.dx*this.dx + this.dy*this.dy);
        let vx = this.dx;
        let vy = this.dy;
        if (mag != 0) {
            vx /= mag;
            vy /= mag;
        }
        
        if (mag != 0) {

            // x and y of unit at the end of the frame
            let fx = this.x + vx*this.speed;
            let fy = this.y + vy*this.speed;
            var t = 1/this.speed;

            // create several movement events for a continuous displacement
            while (t <= 1.0) {
                events.push(new EventMovement(this, t, lerp(this.x, fx, t), lerp(this.y, fy, t)));
                t+=1/this.speed;
            }

        }
    }

}