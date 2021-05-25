import IStrategy from "./Strategy";

export default class SeedRule implements IStrategy{
    livingRule(livingNeighbors: number): boolean {
        return false;
    }
    dyingRule(livingNeighbors: number): boolean {
        return true;
    }
    borningRule(livingNeighbors: number): boolean {
        return livingNeighbors == 2;
    }

}