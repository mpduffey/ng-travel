import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'minToHrs'})

export class MinutesToHoursPipe implements PipeTransform {
  transform(value: string): number {
    let output: string;
		if(value < 60){
        output = value + 'm';        
    }
    else if(value%60==0){
        output = (value-value%60)/60 + 'h';        
    }
    else{
         output = ((value-value%60)/60 + 'h' + ' ' + value%60 + 'm');
    }
		return output;
  }
}