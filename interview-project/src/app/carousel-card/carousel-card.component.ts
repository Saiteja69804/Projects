import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.scss']
})
export class CarouselCardComponent implements OnInit {

  @Input() cardName;
  @Input() imageUrl;
  @Input() iconUrl;

  constructor() { }

  ngOnInit(): void {}

}
