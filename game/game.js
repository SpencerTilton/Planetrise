var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Building = /** @class */ (function (_super) {
    __extends(Building, _super);
    function Building() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // See selectableObjects.ts
    Building.prototype.Controlls = function () {
    };
    return Building;
}(ex.Actor));
/// <reference path="../node_modules/excalibur/dist/excalibur.d.ts" />
// var game = new ex.Engine({
//     width: 800,
//     height: 600,
// });
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        return _super.call(this, {
            width: 1920,
            height: 1080,
            displayMode: ex.DisplayMode.Fixed,
            backgroundColor: ex.Color.Gray,
            pointerScope: ex.Input.PointerScope.Document
        }) || this;
    }
    Game.prototype.start = function () {
        //this.add("testScene", new TestScene());
        return _super.prototype.start.call(this);
    };
    return Game;
}(ex.Engine));
// create an asset loader
var loader = new ex.Loader();
var resources = {};
// queue resources for loading
for (var r in resources) {
    loader.addResource(resources[r]);
}
// uncomment loader after adding resources
var game = new Game();
game.start().then(function () {
    // start your game!
});
var MainMenu = /** @class */ (function (_super) {
    __extends(MainMenu, _super);
    function MainMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // start-up logic, called once
    MainMenu.prototype.onInitialize = function (engine) { };
    // each time the scene is entered (Engine.goToScene)
    MainMenu.prototype.onActivate = function () { };
    // each time the scene is exited (Engine.goToScene)
    MainMenu.prototype.onDeactivate = function () { };
    return MainMenu;
}(ex.Scene));
var TestScene = /** @class */ (function (_super) {
    __extends(TestScene, _super);
    function TestScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // start-up logic, called once
    TestScene.prototype.onInitialize = function (engine) { };
    // each time the scene is entered (Engine.goToScene)
    TestScene.prototype.onActivate = function () { };
    // each time the scene is exited (Engine.goToScene)
    TestScene.prototype.onDeactivate = function () { };
    return TestScene;
}(ex.Scene));
var Unit = /** @class */ (function (_super) {
    __extends(Unit, _super);
    function Unit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // see selectableObjects.ts
    Unit.prototype.Controlls = function () {
    };
    return Unit;
}(ex.Actor));
var WorkerUnit = /** @class */ (function (_super) {
    __extends(WorkerUnit, _super);
    function WorkerUnit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WorkerUnit.prototype.onInitialize = function (engine) {
    };
    // see selectableObjects.ts
    WorkerUnit.prototype.Controlls = function () {
    };
    return WorkerUnit;
}(Unit));
