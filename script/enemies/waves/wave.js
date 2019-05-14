class Wave {
    enemies;
    description;
    timeUntilWave;
    countdown;
    time;

    constructor() {
        this.time = new Date().getSeconds();
    }

    waveCountdown() {
        if (timeNow != this.time) this.countdown--;
        if (this.countdown == 0) Wave.callNextWave();
    }

    static callNextWave() {
        wave = waves[waveNo++];
    }
}

var waves = [
    {
        enemies: [
            //{enemyType: }
        ],
        description: "",
        timeUntilWave: 0
    }
];