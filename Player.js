class Player {
    
    constructor(unit) {
        this.unit = unit;
        this.set_keys();
    }

    set_keys() {

        // https://developer.mozilla.org/fr/docs/Web/API/KeyboardEvent/keyCode
        let left = keyboard(81),
            up = keyboard(90),
            right = keyboard(68),
            down = keyboard(83);

        left.press = () => {
            if (right.isDown) {
                unit.dx = 0;
            } else {
                unit.dx = -unit.speed;
            }
        };
        left.release = () => {
            if (!right.isDown) {
                unit.dx = 0;
            } else {
                unit.dx = unit.speed;
            }
        };

        up.press = () => {
            if (down.isDown) {
                unit.dy = 0;
            } else {
                unit.dy = -unit.speed;
            }
        };
        up.release = () => {
            if (!down.isDown) {
                unit.dy = 0;
            } else {
                unit.dy = unit.speed;
            }
        };

        right.press = () => {
            if (left.isDown) {
                unit.dx = 0;
            } else {
                unit.dx = unit.speed;
            }
        };
        right.release = () => {
            if (!left.isDown) {
                unit.dx = 0;
            } else {
                unit.dx = -unit.speed;
            }
        };

        down.press = () => {
            if (up.isDown) {
                unit.dy = 0;
            } else {
                unit.dy = unit.speed;
            }
        };
        down.release = () => {
            if (!up.isDown) {
                unit.dy = 0;
            } else {
                unit.dy = -unit.speed;
            }
        };

    }

}