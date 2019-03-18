import { Component } from "@angular/core";

@Component({
  selector: "pm-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.scss"]
})
export class FooterComponent {
  dateObj = new Date();
}
