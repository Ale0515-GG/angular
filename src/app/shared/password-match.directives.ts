import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const repPassword = control.get('repPassword');

    if (!password || !repPassword) {
        return null;
    }

    return password.value === repPassword.value ? null : { passwordMismatch: true }
  }
