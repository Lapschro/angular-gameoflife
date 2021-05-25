
export default class Cell{
    index : number;
    state : boolean;

    
    public get State() : string {
        return this.state ? "cell" : "dead-cell";
    }
    
    constructor(i : number, state: boolean){
        this.index = i;
        this.state = state;
    }
}