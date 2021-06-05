import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from './data.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data: any[],...args: any[]): any[] {
    var b=args[1];

    if(!data||!b){
      return data;
    }
    else{
      if(isNaN(args[1])===false){
        return data.filter(obj=>obj[args[0]]==b);
      }
      else{
        return data.filter(obj=>obj[args[0]].toLowerCase().indexOf(b.toLowerCase())!==-1);
      }
    }

  }

}
