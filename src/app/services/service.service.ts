import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  data = {
    "op1": { "value": "001" },
    "op2": { "value": "002" },
    "op3": { "value": "003" },
    "op4": { "value": "004" },
    "op5": {
      "op6": { "value": "011" },
      "op7": { "value": "012" },
      "op10": {
        "op11": { "value": "101" },
        "op12": { "value": "101" },
        "op14": {
          "op15": { "value": "101" },
          "op16": { "value": "101" },
          "op17": { "value": "101" }
        },
        "op13": { "value": "101" }
      },
      "op8": { "value": "013" },
      "op9": { "value": "014" }
    }
  }



  constructor() { }

  getData(): Observable<object> {
    return of(this.data);
  }
}
