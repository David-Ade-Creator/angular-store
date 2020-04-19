import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
  selector:'[appConfirmEqualValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ConfirmEqualValidatorDirective,
    multi: true
  }]
})
export class ConfirmEqualValidatorDirective implements Validator {
     validate(passwordGroup: AbstractControl):{[key:string]: any} | null{
         const passwordField = passwordGroup.get('password');
         const cpasswordField = passwordGroup.get('cpassword');
         if (passwordField && cpasswordField && passwordField.value !== cpasswordField.value) {
           return { 'notEqual': true };
         }
         return null;
     }
}
