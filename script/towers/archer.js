class ArcherTower extends Tower {
    constructor() {
        super();
        this.cost = 90;
        this.upgrades = [];
        this.range = 50;
        this.fireRate = 2;
        this.minDamage = 3;
        this.maxDamage = 7;
        this.damageType = damageTypes.PHYSICAL;
    }
}