import { Component, OnInit } from "@angular/core";

@Component({
  selector: "navbar-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "navbar";

  ngOnInit(): void {
    window.addEventListener("single-spa:before-routing-event", (event: any) => {
      const detail = event.detail;

      // console.log("***DETAIL***", detail);
      if (detail.newUrl.includes("app1") && detail.oldUrl.includes("app2")) {
        console.log("CANCELLED");
        detail.cancelNavigation();
      }
    });
  }
}
