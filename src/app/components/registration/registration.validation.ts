import {AbstractControl,ValidationErrors} from '@angular/forms';
 export function passwordValidation(control:AbstractControl): ValidationErrors | null
 {
     const password=control.value;
     const smallch= /[a-z]+/;
     const capsch= /[A-Z]+/;
     const specialch= /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
     if(!smallch.test(password)){
         return {pswValidation:true, errorMessage:'must have one lowercase letter'};
     }
     else if(!capsch.test(password)){
        return {pswValidation:true, errorMessage:'must have one uppercase letter'};
     }
     else if(!specialch.test(password)){
        return {pswValidation:true, errorMessage:'must have one special character'};
     }
     return null;
 }