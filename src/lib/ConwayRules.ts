import IStrategy from "./Strategy";

export default class Conway implements IStrategy{
    livingRule(livingNeighbors: number): boolean {
        return livingNeighbors == 2 || livingNeighbors == 3;
    }
    dyingRule(livingNeighbors: number): boolean {
        return livingNeighbors < 2 || livingNeighbors > 3
    }
    borningRule(livingNeighbors: number): boolean {
        return livingNeighbors == 3;
    }
}