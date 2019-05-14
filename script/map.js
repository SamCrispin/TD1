var map = {
    sizeX: 10,
    sizeY: 10,
    data: [
        [0,2,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0],
        [0,1,4,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0],
        [0,1,4,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,1,1,3],
        [0,0,0,0,0,0,0,0,0,0]
    ]
};

var cells = [
    {
        //Nothing tbh
    },
    {   //path
        class: "mapPath",
        onClick: null,
    },
    {   //start
        class: "mapStart",
        onClick: null,
    },
    {   //end
        class: "mapEnd",
        onClick: null,
    },
    {   //turret spot
        class: "mapTurretSpot",
        onClick: displayTowerOptions,
    }
];

function displayTowerOptions() {

}
