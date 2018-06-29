// 60 fps -> 1 frame = 100/6 ms
const TIME_FRAME_MS = 1/60 * 1000

class Event {

    constructor(entity, t) {
        this.entity = entity;
        this.t = t;
    }

}

class EventMovement extends Event {

    constructor(entity, t, x, y) {
        super(entity, t);
        this.x = x;
        this.y = y;
    }

    play() {

        // if no collision move entitys
        if (!check_wall_collisions(this.x, this.y, this.entity.radius)
            && !check_units_collisions(this.entity.id, this.x, this.y, this.entity.radius)) {
            this.entity.x = this.x;
            this.entity.y = this.y;
        }

    }

}

// sort events with time
function time_sort(o1, o2) {
    return ((o1.t < o2.t) ? -1 : ((o1.t > o2.t) ? 1 : 0));
}

function play_events() {

    events.sort(time_sort);

    let t = performance.now();
    let start_of_frame = t;
    let end_of_frame = t + TIME_FRAME_MS;

    // a frame is splitted in 100 entity of t
    while (t <= end_of_frame) {

        // play events if their time has come
        while (events.length > 0 && start_of_frame + TIME_FRAME_MS*events[0].t <= t) {
            events[0].play();
            events.shift();
        }
        // time flies
        t = performance.now();
    }

}