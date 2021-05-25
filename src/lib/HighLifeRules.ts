import IStrategy from "./Strategy";

export default class HighLifeRules implements IStrategy{
    livingRule(livingNeighbors: number): boolean {
        return livingNeighbors == 2 || livingNeighbors == 3;
    }
    dyingRule(livingNeighbors: number): boolean {
        return !this.livingRule(livingNeighbors);
    }
    borningRule(livingNeighbors: number): boolean {
        return livingNeighbors == 3 || livingNeighbors == 6;
    }
}