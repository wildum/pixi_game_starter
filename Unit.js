var DEFAULT_SPEED = 10;

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
        this.x += vx;
        this.y += vy;
    }

}