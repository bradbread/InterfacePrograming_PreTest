import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-info-component',
  templateUrl: './movie-info-component.component.html',
  styleUrls: ['./movie-info-component.component.css']
})
export class MovieInfoComponentComponent implements OnInit {
  @Input() Title = "Dragon Movie";
  @Input() Rating = 6.5;
  @Input() ShortDescription = "A young boy seaks to avenge his father's death at the hands of the dragon warrior.";
  @Input() Runtime = 123;
  @Input() ReleaseDate = "16/09/2019";
  @Input() MovieThumbnail = "./assets/dragonmoviethumb.png";

  constructor() { }

  ngOnInit() {
  }

}
