class Tower {
    cost;
    upgrades;
    range;
    fireRate;
    minDamage;
    maxDamage;
    damageType;
}

function buildTowerOptions(y, x) {
    var div;
    for (let i = 0; i < turretsAvailable.length; i++) {
        div = document.createElement("div");
        if (i == 0) {
            div.style.left = -20 + "px";
            div.style.top = -20 + "px";
        } else if (i == 1) {
            div.style.left = 20 + "px";
            div.style.top = -20 + "px";
        } else if (i == 2) {
            div.style.left = -20 + "px";
            div.style.top = 20 + "px";
        } else {
            div.style.left = 20 + "px";
            div.style.top = 20 + "px";
        }
        div.className = "towerOption";

        id(`mapCell${y},${x}`).appendChild(div);
    }
}