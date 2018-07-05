const TIME_FRAME_MS = 1/60 * 1000 // 60 fps -> 1 frame = 100/6 ms

const UNIT_DEFAULT_SPEED = 3;
const UNIT_DEFAULT_HEALTH = 100;

const BULLET_DEFAULT_RADIUS = 3;
const BULLET_DEFAULT_COLOR = 0xFFFF00;
const BULLET_DEFAULT_LIFETIME = 1000; //ms
const BULLET_DEFAULT_SPEED = 5;
const BULLET_DEFAULT_DAMAGE = 10;

const MovableEntityType = {
    bullet : "bullet",
    unit : "unit"
}