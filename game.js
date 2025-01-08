const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

let balloon;
let pumpKey;

function preload() {
    this.load.image('balloon', 'assets/Symbol 100001.png'); 
    this.load.image('pump', 'assests/Symbol 28.png'); 
}

function create() {
    balloon = this.add.image(400, 300, 'balloon').setScale(0.1);
    pumpKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    balloon.setInteractive().on('pointerdown', burstBalloon, this);
}

function update() {
    if (Phaser.Input.Keyboard.JustDown(pumpKey)) {
        balloon.setScale(balloon.scaleX + 0.1, balloon.scaleY + 0.1);
        if (balloon.scaleX > 1) {
            balloon.setVelocityX(Phaser.Math.Between(-200, 200));
            balloon.setVelocityY(Phaser.Math.Between(-200, 200));
        }
    }
}

function burstBalloon() {
    balloon.destroy();
}
