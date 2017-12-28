
import { FormControl } from '@angular/forms';

export class EmailValidator {

  static isValid(control: FormControl){
    const re = /^\w+([\+\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(control.value);

    if (re){
      return null;
    }

    return {
      "invalidEmail": true
    };

  }
}
