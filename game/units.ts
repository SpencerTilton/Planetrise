abstract class Unit extends ex.Actor implements SelectableObject {
    health:number;          // how much damage can be taken. Unit dies once health is 0
    healthRegin:number;     // rate at which health regenerates over time
    mana:number;            // abilities use mana
    manaRegin:number;       // rate at which mana reginerates
    armor:number;           // reduces damage by x%, but not more than y
    attackDamage:number;    // damage of each attack
    attackSpeed:number;     // rate of attacks
    moveSpeed:number;       // speed of normal movement
    isHeroUnit:boolean;     // determines if hero unit. can only have 1 hero unit at a time

    public abstract onInitialize(engine: ex.Engine);

    // see selectableObjects.ts
    Controlls() {
        
    }
}

class WorkerUnit extends Unit {


    public onInitialize(engine: ex.Engine){

    }

    // see selectableObjects.ts
    Controlls() {

    }
}