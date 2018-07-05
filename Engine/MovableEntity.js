class MovableEntity extends Vector {

    constructor(id, x, y) {
        super(x, y);
        this.id = id;
        this.dx = 0;
        this.dy = 0;
        this.speed = 0;
        this.rotation = 0;
    }

    create_move_events(fx, fy) {
        var t = 1/this.speed;
        // create several movement events for a continuous displacement
        while (t <= 1.0) {
            events.push(new EventMovement(this, t, lerp(this.x, fx, t), lerp(this.y, fy, t)));
            t+=1/this.speed;
        }
    }

}