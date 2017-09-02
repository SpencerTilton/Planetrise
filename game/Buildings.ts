abstract class Building extends ex.Actor implements SelectableObject {
    health:number;          // how much damage can be taken. Unit dies once health is 0
    healthRegin:number;     // rate at which health regenerates over time
    mana:number;            // abilities use mana
    manaRegin:number;       // rate at which mana reginerates
    armor:number;           // reduces damage by x%, but not more than y

    // See selectableObjects.ts
    Controlls() {

    }
}