import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators , FormGroup } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.signupForm = this.formBuilder.group({
          userType: ['', Validators.required],
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          gender : ['', Validators.required],
          Pnumber : ['', [Validators.required, Validators.minLength(10)]],
          password: ['', [
              Validators.required,
              Validators.minLength(8)
          ]],
          cpassword: ['', [
              Validators.required,
              Validators.minLength(8)
          ]],
      }, { validator: this.pwdMatchValidator

  });

}
pwdMatchValidator(frm: FormGroup) {
  return frm.get('password').value === frm.get('cpassword').value
     ? null : {'mismatch': true};
}

get f() { return this.signupForm.controls; }

onSubmit() {
  this.submitted = true;
  console.log(this.signupForm);
  // stop here if form is invalid
  if (this.signupForm.invalid) {
      return;
  }
  alert(JSON.stringify(this.signupForm.value));
  console.log(this.signupForm.value);
  // alert(' User Email - ' + this.signupForm.value.email + ' User Password - ' + this.signupForm.value.password);
  // console.log(' User Email - ' + this.signupForm.value.email + ' User Password - ' + this.signupForm.value.password );
}


}
