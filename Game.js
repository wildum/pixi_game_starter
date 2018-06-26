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

var gameLayer = new PIXI.Container();

app.stage.addChild(gameLayer);

var unitLayer = new PIXI.Container();
var wallLayer = new PIXI.Container();

gameLayer.addChild(unitLayer);
gameLayer.addChild(wallLayer);

var discTexture;
function initTextures() {
    var g = new PIXI.Graphics();
    g.beginFill(0xFFFFFF);
    g.drawCircle(0, 0, 20);
    g.endFill();
    discTexture = g.generateCanvasTexture();
}
initTextures();

let state;
let player;
let unit;
let events;
let walls;

function setup() {

  events = [];
  walls = [];

  unit = new Unit(400, 200, 50, 10, 0xFF0000);
  player = new Player(unit);
  walls.push(new Wall(100, 50, 200, 5));

  state = play;
 
  //Start the game loop 
  app.ticker.add(delta => gameLoop(delta));
}

//60 fps
function gameLoop(delta){
  state(delta);
}

function play(delta) {
  unit.move();
  play_events();
  events.length = 0;
}

document.getElementById("canvasZone").appendChild(app.view);

setup()