let Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle;

let app = new Application({ 
    width: 800, 
    height: 450,
    transparent: false, 
    resolution: 2,
    backgroundColor: 0xFFFFFF
  }
);

app.stage.hitArea = new PIXI.Rectangle(0, 0, app.screen.width, app.screen.height);
app.stage.interactive = true;

var gameLayer = new PIXI.Container();

app.stage.addChild(gameLayer);

var unitLayer = new PIXI.Container();
var wallLayer = new PIXI.Container();
var bulletLayer = new PIXI.Container();

gameLayer.addChild(unitLayer);
gameLayer.addChild(wallLayer);
gameLayer.addChild(bulletLayer);