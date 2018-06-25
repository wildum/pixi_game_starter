class Event {

    constructor(unit, t) {
        this.unit = unit;
        this.t = t;
    }

}

class EventMovement extends Event {

    constructor(unit, t, x, y) {
        super(unit, t);
        this.x = x;
        this.y = y;
    }

    play() {
        this.unit.x = this.x;
        this.unit.y = this.y;
    }

}

// sort events with time
function time_sort(o1, o2) {
    return ((o1.t < o2.t) ? -1 : ((o1.t > o2.t) ? 1 : 0));
}

function play_events() {
    events.sort(time_sort);
    var t = 0;

    // a frame is splitted in 100 unit of t
    while (t <= 1.0) {

        // play events if their time has come
        while (events.length > 0 && events[0].t >= t) {
            events[0].play();
            events.shift();
        }
        // time flies
        t+=0.01;
    }
}