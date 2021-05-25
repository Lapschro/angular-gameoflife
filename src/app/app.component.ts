import { Component } from '@angular/core';
import Board from 'src/lib/Board';
import Cell from 'src/lib/Cell';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gol-angular';
  board : Board;
  onAuto : boolean;

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

  constructor(){
    this.board = new Board(40,40, true);
    this.onAuto = false;
  }
}
