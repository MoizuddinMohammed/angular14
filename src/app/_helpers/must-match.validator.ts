import { AbstractControl, FormGroup } from "@angular/forms";
export function ConfirmPasswordValidator(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    let control = formGroup.controls[controlName];
    let matchingControl = formGroup.controls[matchingControlName]
    //console.log(matchingControl);
      if ( matchingControl.errors) {
        return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmPasswordValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

