function getBulletGraphics(radius, color) {
    var sprite = new PIXI.Sprite(discTexture);
    sprite.scale.set((radius*2)/sprite.width);
    bulletLayer.addChild(sprite);
    sprite.tint = color;
    sprite.anchor.set(0.5);
    return sprite;
}

function getUnitGraphics(radius, color) {
    var sprite = new PIXI.Sprite(discTexture);
    sprite.scale.set((radius*2)/sprite.width);
    unitLayer.addChild(sprite);
    sprite.tint = color;
    sprite.anchor.set(0.5);
    return sprite;
}

function getWallGraphics(x, y, width, height) {
    var graphics = new PIXI.Graphics();
    graphics.beginFill(0);
    graphics.lineStyle(1, 0);
    graphics.drawRect(x, y, width, height);
    wallLayer.addChild(graphics);
    return graphics;
}

function initTextures() {
    var g = new PIXI.Graphics();
    g.beginFill(0xFFFFFF);
    g.drawCircle(0, 0, 20);
    g.endFill();
    discTexture = g.generateCanvasTexture();
}