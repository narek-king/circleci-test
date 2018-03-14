import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { Router } from "@angular/router";

@Component({
  selector: 'ztt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ztt';

  constructor(translate: TranslateService, private router: Router) {
    translate.use("en");
   /* TODO if should_show_no_offers
    render partial: "layouts/no_offers"
    */
   router.navigate(['/home']).then(() => console.log('navigating to home'));

  }
}
