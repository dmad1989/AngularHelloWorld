import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'For Special Girl:';
  text = 'Alina i love you';
  show: Boolean = false;

  onSelect(isshow: Boolean): void {
    this.show = !isshow;
  }

}
