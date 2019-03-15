import { Component } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule
} from "@angular/forms";
import { $ } from "protractor";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  ppattern = "[0-9]{10}";
  postpattern = "[0-9]{6}";
  form = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    title: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [Validators.email, Validators.required]),
    phone: new FormControl("", [
      Validators.required,
      Validators.pattern(this.ppattern)
    ]),
    postcode: new FormControl("", [
      Validators.required,
      Validators.pattern(this.postpattern)
    ]),
    month: new FormControl("", Validators.required),
    day: new FormControl("", Validators.required),
    year: new FormControl("", Validators.required),
    check: new FormControl("", Validators.required),
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
  get phone() {
    return this.form.get("phone");
  }
  get postcode() {
    return this.form.get("postcode");
  }
  get month() {
    return this.form.get("month");
  }
  get day() {
    return this.form.get("day");
  }
  get year() {
    return this.form.get("year");
  }
  get check() {
    return this.form.get("check");
  }
  get password() {
    return this.form.get("password");
  }
  get cpassword() {
    return this.form.get("cpassword");
  }
}
