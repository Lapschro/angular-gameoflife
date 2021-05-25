import Cell from "./Cell";
import Conway from "./ConwayRules";
import IStrategy from "./Strategy";

export default class Board{
    cells : Cell[];
    width : number;
    height : number;

    currentStrategy : IStrategy;

    wrapAround : boolean

    constructor(width : number, height : number, wrap : boolean = false){
        this.width = width;
        this.height = height;
        this.wrapAround = wrap;

        this.cells = [];
        for(let i = 0; i < height * width; i++){
            this.cells[i] = new Cell(i, false);
        }

        this.currentStrategy = new Conway();
    }

    flipCell(idx : number){
        this.cells[idx].state = !this.cells[idx].state;
    }

    iterate(){
        let nextState : boolean[] = [];

        for(let i = 0; i < this.height; i++){
            for (let j = 0; j < this.width; j++){
                let liveNeighbors = this.countNeighbors(i,j);
                if(this.getAt(i,j).state){
                    if(this.currentStrategy.dyingRule(liveNeighbors)){
                        nextState[i*this.width + j] = false;
                    }
                    if(this.currentStrategy.livingRule(liveNeighbors)){
                        nextState[i * this.width + j] = true;
                    }
                }else{
                    if(this.currentStrategy.borningRule(liveNeighbors)){
                        nextState[i * this.width + j] = true;
                    }else{
                        nextState[i * this.width + j] = false;
                    }
                }
            }
        }

        nextState.forEach((state, idx) => {
            this.cells[idx].state = state;
        });
    }

    private getAt(y : number, x : number) : Cell{
        return this.cells[y * this.width + x];
    }

    private countNeighbors(y : number, x : number){
        let count = 0;
        for(let i = y -1; i <= y + 1; i++){
            for(let j = x - 1; j <= x + 1; j++){
                if(i == y && j == x){
                    continue;
                }
                if(this.wrapAround){
                    if(this.getAt((i + this.height)%this.height, (j + this.width) % this.width).state){
                        count++;
                    }
                }else{
                    if(i < 0 || i >= this.height || j < 0 || j >= this.width){
                        continue;
                    }
                    if(this.getAt(i,j).state){
                        count++;
                    }
                }
            }
        }
        return count;
    }
}