export default interface IStrategy{
    livingRule(livingNeighbors : number) : boolean;
    dyingRule(livingNeighbors : number) : boolean;
    borningRule(livingNeighbors : number) : boolean;
}