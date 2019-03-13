import { Component } from "@angular/core";
import { NgbTabsetConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-toggle",
  templateUrl: "./toggle.component.html",
  styleUrls: ["./toggle.component.css"],
  providers: [NgbTabsetConfig]
})
export class ToggleComponent {
  constructor(config: NgbTabsetConfig) {
    // customize default values of tabsets used by this component tree
    config.justify = "center";
    config.type = "pills";
  }
}
