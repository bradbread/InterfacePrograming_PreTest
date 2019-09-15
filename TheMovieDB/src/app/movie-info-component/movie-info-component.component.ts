import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-info-component',
  templateUrl: './movie-info-component.component.html',
  styleUrls: ['./movie-info-component.component.css']
})
export class MovieInfoComponentComponent implements OnInit {
  @Input() Title = "Default"
  @Input() Rating = 0;
  @Input() ShortDescription: "Default"
  @Input() Runtime = 0;
  @Input() ReleaseDate = "00/00/0000"
  @Input() MovieThumbnail = ""

  constructor() { }

  ngOnInit() {
  }

}
