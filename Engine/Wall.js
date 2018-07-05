class Wall {

    constructor(x, y, width, height) {
        this.graphics = getWallGraphics(x, y, width, height);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

}

function check_wall_collisions(x, y, radius) {
    for (var i = 0; i < walls.length; i++) {
        if (x + radius > walls[i].x
            && x - radius < walls[i].x + walls[i].width
            && y + radius > walls[i].y
            && y - radius < walls[i].y + walls[i].height) {
                return true;
        }
    }
    return false;
}