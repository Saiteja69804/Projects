import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle-division',
  templateUrl: './middle-division.component.html',
  styleUrls: ['./middle-division.component.scss']
})
export class MiddleDivisionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards = [
    {
      cardName: "About Agency",
      iconUrl: "/assets/Component 4 – 1.svg",
      imageUrl: "/assets/entrepreneur-593358_1920.png"
    },
    {
      cardName: "Search Engine Optimization",
      iconUrl: "/assets/Component 4 – 1.svg",
      imageUrl: "/assets/home-office-569153_1920.png"
    },
    {
      cardName: "Lead Funnel",
      iconUrl: "/assets/Component 5 – 1.svg",
      imageUrl: "/assets/art-2606134_1920.png"
    }
  ];

}
