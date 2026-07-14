const config = {
    type: Phaser.AUTO,

    parent: "prototype-container",

    width: 800,
    height: 600,

    backgroundColor: "#31343a",

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    scene: {
        create,
        update
    }
};

new Phaser.Game(config);

let player;
let cursors;
let destination;
let message;
let hasEnteredDestination = false;

function create() {
    this.add.text(24, 20, "Code Block Party — Navigation Prototype", {
        fontFamily: "Arial",
        fontSize: "26px",
        color: "#ffffff"
    });

    this.add
