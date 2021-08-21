import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styleUrls: ['./increaser.component.css']
})
export class IncreaserComponent implements OnInit{

  @Input('value') progress!: number;
  @Input() btnClass: string = 'btn-primary'

  @Output() outputValue: EventEmitter<number> = new EventEmitter();

  ngOnInit(){
    this.btnClass = `btn ${this.btnClass}`
  }


  changeValue(value: number){
    
    if( this.progress > 100 && this.progress >= 0 ) {
      this.progress = 100;
      this.outputValue.emit(this.progress)
      return; 
    }
    
    if( this.progress <= 0 && this.progress < 0 ) {
      this.progress = 0;
      this.outputValue.emit(this.progress)
      return ;
    }
    this.progress = this.progress + value;
    this.outputValue.emit(this.progress)
  }

  onChange(newValue:number){

    if( newValue >= 100 ){
      this.progress = 100
    }else if(newValue <= 0){
      this.progress = 0;
    }else{
      this.progress = newValue
    }
    this.outputValue.emit(this.progress)
  }
}
