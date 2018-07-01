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
var bulletLayer = new PIXI.Container();

gameLayer.addChild(unitLayer);
gameLayer.addChild(wallLayer);
gameLayer.addChild(bulletLayer);

var discTexture;
function initTextures() {
    var g = new PIXI.Graphics();
    g.beginFill(0xFFFFFF);
    g.drawCircle(0, 0, 20);
    g.endFill();
    discTexture = g.generateCanvasTexture();
}
initTextures();

var id_entities = 0;

let state;
let player;
let units;
let unit;
let events;
let walls;
let bullets;
let dead_default_bullets_ids;
let dead_default_bullets;

function setup() {

  events = [];
  walls = [];
  units = [];
  bullets = [];
  dead_default_bullets = [];
  dead_default_bullets_ids = new Set();

  unit = new Unit(id_entities++, 400, 200, 50, 10, 0xFF0000);
  player = new Player(unit);

  units.push(unit);
  units.push(new Unit(id_entities++, 600, 200, 50, 10, 0x00FF00));
  walls.push(new Wall(200, 100, 200, 10));

  state = play;
 
  //Start the game loop 
  app.ticker.add(delta => gameLoop(delta));
}

//60 fps
function gameLoop(delta){
  state(delta);
}

function play(delta) {
  update_units();
  update_bullets();
  play_events();
  events.length = 0;
}

document.getElementById("canvasZone").appendChild(app.view);

setup()