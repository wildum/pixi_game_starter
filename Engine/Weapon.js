class Weapon {

    constructor() {}

    shoot () {}

}

class DefaultWeapon extends Weapon {

    constructor() {
        super();
    }

    shoot (rotation, x, y) {
        var bullet = BulletFactory.createDefaultBullet(x, y, rotation);
        bullets.push(bullet);
    }

}