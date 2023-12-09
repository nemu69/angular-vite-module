import { Component, inject } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appService = inject(AppService);

  constructor() {
    console.log(this.appService.getHello());
  }
}
