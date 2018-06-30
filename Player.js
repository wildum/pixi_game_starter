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
                unit.dx = -1;
            }
        };
        left.release = () => {
            if (!right.isDown) {
                unit.dx = 0;
            } else {
                unit.dx = 1;
            }
        };

        up.press = () => {
            if (down.isDown) {
                unit.dy = 0;
            } else {
                unit.dy = -1;
            }
        };
        up.release = () => {
            if (!down.isDown) {
                unit.dy = 0;
            } else {
                unit.dy = 1;
            }
        };

        right.press = () => {
            if (left.isDown) {
                unit.dx = 0;
            } else {
                unit.dx = 1;
            }
        };
        right.release = () => {
            if (!left.isDown) {
                unit.dx = 0;
            } else {
                unit.dx = -1;
            }
        };

        down.press = () => {
            if (up.isDown) {
                unit.dy = 0;
            } else {
                unit.dy = 1;
            }
        };
        down.release = () => {
            if (!up.isDown) {
                unit.dy = 0;
            } else {
                unit.dy = -1;
            }
        };

        app.stage.hitArea = new PIXI.Rectangle(0, 0, app.screen.width, app.screen.height);
        app.stage.interactive = true;
        app.stage.pointerdown = function (e) {
            unit.shoot();
        }

    }
    

}