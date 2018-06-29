class Weapon {

    constructor() {

    }

    shoot () {

    }

}

class DefaultWeapon extends Weapon {

    constructor() {
        super();
    }

    shoot (rotation, x, y) {
        var bullet = new DefaultBullet(x, y, rotation);
        bullet.rotation = rotation;
        bullets.push(bullet);
    }

}