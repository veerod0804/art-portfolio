import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art-card',
  templateUrl: './art-card.component.html',
  styleUrls: ['./art-card.component.scss']
})
export class ArtCardComponent implements OnInit {

  glass1: string = 'Angled Bottle';
  glass2: string = 'Blue Sandblasted Vase';
  glass3: string = 'Mistake';

  constructor() { }

  ngOnInit(): void {
  }
  


}
