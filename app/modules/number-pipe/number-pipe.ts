import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'convertToNumber'})

export class ConvertToNumberPipe implements PipeTransform {
  transform(value: string): number {
    return parseFloat(value);
  }
}