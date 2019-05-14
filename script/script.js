var wave, waveNo = 0,
    timeNow,
    enemyList = [],
    turretsAvailable = [1, 2, 3, 4];

function setup() {
    renderMap();
    wave = waves[waveNo];
    setInterval(gameLoop, 10);
}

function renderMap() {
    var div, mapData;
    id("map").style.width = map.sizeX * 20 + "px";
    id("map").style.height = map.sizeY * 20 + "px";
    for (var i = 0; i < map.sizeY; i++) {
        for (var j = 0; j < map.sizeX; j++) {
            mapData = map.data[i][j];
            if (mapData == 0) continue;
            div = document.createElement("DIV");
            div.classList.add("mapCell", cells[mapData].class);
            div.id = "mapCell" + i + "," + j;
            div.style.top = (i * 20) + "px";
            div.style.left = (j * 20) + "px";
            div.onclick = cells[mapData].onClick;
            id("map").appendChild(div);
            if (mapData == 4) buildTowerOptions(i, j);
        }
    }
}

function gameLoop() {
    timeNow = new Date().getSeconds();
    moveEnemies();
    //shootTurrets
    //render
}

function moveEnemies() {

}

function id(divId) {
    return document.getElementById(divId);
}

window.onload = setup;