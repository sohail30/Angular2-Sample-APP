import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string , gender: string): string {
if(gender.toLowerCase()=='male  '){
  return "MR."+value;
}
else
{
  return "Miss."+value;
}

   
  }

}
