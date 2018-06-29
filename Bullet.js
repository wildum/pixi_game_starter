const BULLET_DEFAULT_RADIUS = 3;
const BULLET_DEFAULT_COLOR = 0xFFFF00;
const BULLET_DEFAULT_LIFETIME = 1000; //ms
const BULLET_DEFAULT_SPEED = 5;


function getBulletGraphics(radius, color) {
    var sprite = new PIXI.Sprite(discTexture);
    sprite.scale.set((radius*2)/sprite.width);
    bulletLayer.addChild(sprite);

    sprite.tint = color;
    sprite.anchor.set(0.5);
    return sprite;
}

class Bullet extends MovableEntity {

    constructor(x, y, t, radius, color, orientation) {
        super(x, y);
        this.graphics = getBulletGraphics(radius, color);
        this.t = t;
        this.radius = radius;
        this.color = color;
        this.graphics.x = x;
        this.graphics.y = y;
        this.speed = BULLET_DEFAULT_SPEED;
    }

    set x(v) { if (this.graphics)this.graphics.x = v; }
    get x() { return this.graphics.x; }
    set y(v) { if (this.graphics)this.graphics.y = v; }
    get y() { return this.graphics.y; }
    set rotation(v) {if (this.graphics)this.graphics.rotation = v;}
    get rotation() {return this.graphics.rotation;}

    move() {

        // x and y of unit at the end of the frame
        let fx = this.x + Math.cos(this.rotation)*this.speed;
        let fy = this.y + Math.sin(this.rotation)*this.speed;
        var t = 1/this.speed;

        // create several movement events for a continuous displacement
        while (t <= 1.0) {
            events.push(new EventMovement(this, t, lerp(this.x, fx, t), lerp(this.y, fy, t)));
            t+=1/this.speed;
        }

    }

    destroy() {

    }

}

class DefaultBullet extends Bullet {
    constructor(x, y, orientation) {
        super(x, y, (performance.now() + BULLET_DEFAULT_LIFETIME), BULLET_DEFAULT_RADIUS, BULLET_DEFAULT_COLOR, orientation);
    }
}

function update_bullets() {
    for (var i = bullets.length-1; i >= 0; i--) {
        if (bullets[i].t - performance.now() < 0) {
            dead_bullets.push(bullets[i]);
            bulletLayer.removeChild(bullets[i].graphics);
            bullets.splice(i, 1);
        } else {
            bullets[i].move();
        }
    }
}