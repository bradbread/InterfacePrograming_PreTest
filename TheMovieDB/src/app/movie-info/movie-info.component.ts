import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  @Input() Rating = 0;
  @Input() Runtime = 0;
  @Input() ReleaseDate = "00/00/0000"
  constructor() { }

  ngOnInit() {  }

}
