class Square extends Enemy {

    constructor() {
        super();
        this.health = 50;
        this.speed = 10;
        this.armour = armourLevels.NONE;
        this.magicResist = armourLevels.NONE;
        this.colour = "red";
    }
}