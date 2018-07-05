initTextures();

function setup() {

  events = [];
  walls = [];
  units = [];
  bullets = [];
  dead_default_bullets = [];
  dead_default_bullets_ids = new Set();

  unit = new Unit(id_entities++, 400, 200, 10, 0xFF0000);
  player = new Player(unit);

  units.push(unit);
  units.push(new Unit(id_entities++, 600, 200, 10, 0xFF0000));
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
  update_bullets();
  update_units();
  play_events();
  events.length = 0;
}

document.getElementById("canvasZone").appendChild(app.view);

setup()