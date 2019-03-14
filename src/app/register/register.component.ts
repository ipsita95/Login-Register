import { Component } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule
} from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  form = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    title: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", Validators.required),
    cpassword: new FormControl("", Validators.required)
  });
  get name() {
    return this.form.get("name");
  }
  get title() {
    return this.form.get("title");
  }
  get email() {
    return this.form.get("email");
  }
  get password() {
    return this.form.get("password");
  }
  get cpassword() {
    return this.form.get("cpassword");
  }
}
