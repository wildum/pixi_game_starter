function getWallGraphics(x, y, width, height) {
    var graphics = new PIXI.Graphics();
    graphics.beginFill(0);
    graphics.lineStyle(1, 0);
    graphics.drawRect(x, y, width, height);
    wallLayer.addChild(graphics);
    return graphics;
}

class Wall {

    constructor(x, y, width, height) {
        this.graphics = getWallGraphics(x, y, width, height);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    set x(v) { this.graphics.x = v; }
    get x() { return this.graphics.x; }
    set y(v) { this.graphics.y = v; }
    get y() { return this.graphics.y; }
    set width(v) { this.graphics.width = v; }
    get width() { return this.graphics.width; }
    set height(v) { this.graphics.height = v; }
    get height() { return this.graphics.height; }

}