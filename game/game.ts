/// <reference path="../node_modules/excalibur/dist/excalibur.d.ts" />

// var game = new ex.Engine({
//     width: 800,
//     height: 600,
// });

class Game extends ex.Engine {
    constructor() {
        super({ width: 1920, height: 1080, /*displayMode: DisplayMode.FullScreen*/ });
    }
}

// create an asset loader
var loader = new ex.Loader();
var resources = {

    /* include resources here */
    //txPlayer: new ex.Texture("assets/tex/player.png")

};

// queue resources for loading
for (var r in resources) {
    loader.addResource(resources[r]);
}

// uncomment loader after adding resources
var game = new Game();
game.start(/* loader */).then(() => {

    // start your game!

});