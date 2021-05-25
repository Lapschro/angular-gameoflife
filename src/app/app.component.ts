import { Component } from '@angular/core';
import Board from 'src/lib/Board';
import Cell from 'src/lib/Cell';
import Conway from 'src/lib/ConwayRules';
import HighLifeRules from 'src/lib/HighLifeRules';
import SeedRule from 'src/lib/SeedRule';
import IStrategy from 'src/lib/Strategy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gol-angular';
  board : Board;
  onAuto : boolean;
  currentStrategy : string;

  strategies : {
    [key : string] : IStrategy 
  };

  flipState(idx : number){
    this.board.flipCell(idx);
  }

  iterate(){
    this.board.iterate();
  }

  timeoutHanlder(){
    if(this.onAuto){
      this.iterate();
      setTimeout(this.timeoutHanlder.bind(this), 33);
    }
  }

  changeAuto(){
    this.onAuto = !this.onAuto;
    console.log(this.onAuto);
    if(this.onAuto){ 
      setTimeout(this.timeoutHanlder.bind(this), 33);
    }
  }

  changeRule(next : string){
    console.log(next);
    
    this.board.setStrategy(this.strategies[next]);
  }

  constructor(){
    this.onAuto = false;
    
    this.strategies = {
      "Conway" : new Conway(),
      "Highlife" : new HighLifeRules(),
      "Seed" : new SeedRule()
    };
    
    this.board = new Board(40,40, true, this.strategies["Conway"]);
    this.currentStrategy = "Conway";
  }
}
