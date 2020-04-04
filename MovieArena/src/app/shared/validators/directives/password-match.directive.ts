import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { passwordMatch } from '../password-match';

@Directive({
  selector: '[appPasswordMatch]',
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: PasswordMatchDirective
    }
  ]
})
export class PasswordMatchDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl) : ValidationErrors {
    return passwordMatch(control);
  }
}
