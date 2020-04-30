import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interactive-Poetry-Board';

  toggle(to: string): void {
    // This is not the best way to do this.
    let toElement: HTMLElement = document.getElementById(to);
    let fromElement: HTMLElement;
    toElement.classList.remove('hidden');
    if (to == 'about-and-credits') {
      fromElement = document.getElementById('puzzle');
    }
    else {
      fromElement = document.getElementById('about-and-credits');
    }
    fromElement.classList.add('hidden');
  }

}
