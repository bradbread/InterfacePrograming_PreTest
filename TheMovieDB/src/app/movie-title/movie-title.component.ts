import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-title',
  templateUrl: './movie-title.component.html',
  styleUrls: ['./movie-title.component.css']
})
export class MovieTitleComponent implements OnInit {
  @Input() Title = "Default";
  
  constructor() { }

  ngOnInit() {
  }

}
