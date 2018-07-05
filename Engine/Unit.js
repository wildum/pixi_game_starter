class Unit extends MovableEntity {

    constructor(id, x, y, radius, color) {
        super(id, x, y);
        this.graphics = getUnitGraphics(radius, color);
        this.graphics.x = x;
        this.graphics.y = y;
        this.radius = radius;
        this.speed = UNIT_DEFAULT_SPEED;
        this.health = UNIT_DEFAULT_HEALTH;
        this.weapon = new DefaultWeapon();
        this.type = MovableEntityType.unit;
    }

    set x(v) { if (this.graphics)this.graphics.x = v; }
    get x() { return this.graphics.x; }
    set y(v) { if (this.graphics)this.graphics.y = v; }
    get y() { return this.graphics.y; }
    set rotation(v) {if (this.graphics)this.graphics.rotation = v;}
    get rotation() {return this.graphics.rotation;}
      
    update_orientation() {
        var dist_X = app.renderer.plugins.interaction.mouse.global.x - this.x;
        var dist_Y = app.renderer.plugins.interaction.mouse.global.y - this.y;
        this.rotation = Math.atan2(dist_Y,dist_X);
    }

    move() {
        let mag = Math.sqrt(this.dx*this.dx + this.dy*this.dy);
        let vx = this.dx;
        let vy = this.dy;
        
        if (mag != 0) {
            vx /= mag;
            vy /= mag;
            // x and y of unit at the end of the frame
            let fx = this.x + vx*this.speed;
            let fy = this.y + vy*this.speed;
            super.create_move_events(fx, fy);
        }
    }

    take_damage(damage) {
        this.health -= damage;
        this.graphics.tint = 0xFFFF00;
    }
    
    shoot(){
        this.weapon.shoot(this.rotation, this.x+Math.cos(this.rotation)*20, this.y+Math.sin(this.rotation)*20);
    }

}

function remove_unit(index) {
    unitLayer.removeChild(units[index].graphics);
    units.splice(index, 1);
}

function update_units() {
    for (var i = units.length-1; i >= 0; i--) {
        if (units[i].health <= 0) {
            remove_unit(i);
        } else {
            units[i].update_orientation();
            units[i].move();
        }
    }
}

function check_units_collisions(entity, x, y) {
    for (var i = 0; i < units.length; i++) {
        if (entity.id != units[i].id && squareDist(x, y, units[i].x, units[i].y) < Math.pow(entity.radius + units[i].radius, 2)) {
                if (entity.type == "bullet")
                    units[i].take_damage(entity.damage);
                return true;
        }
    }
    return false;
}