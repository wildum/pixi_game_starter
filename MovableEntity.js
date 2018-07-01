const MovableEntityType = {
    bullet : "bullet",
    unit : "unit"
}

class MovableEntity extends Vector {

    constructor(id, x, y) {
        super(x, y);
        this.id = id;
        this.dx = 0;
        this.dy = 0;
        this.speed = 0;
        this.rotation = 0;
    }

}