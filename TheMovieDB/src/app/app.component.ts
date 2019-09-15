import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() Title = "Default"
  @Input() Rating = 0;
  @Input() ShortDescription: "Default"
  @Input() Runtime = 0;
  @Input() ReleaseDate = "00/00/0000"
  @Input() MovieThumbnail = ""

}
