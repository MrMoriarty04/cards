import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from "./card/card";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  posts=[
    {
      title:"Neet Tree",
      imageUrl:"/tree.jpeg",
      userName:"nature",
      content:"I saw this awesome tree during my hike today."
    },
    {
      title:"Snowy Mountain",
      imageUrl:"/mountain.jpeg",
      userName:"mountainlover",
      content:"Here is a picture of a very wonderfull snowy mountain."
    },
    {
      title:"Mountain Biking",
      imageUrl:"/biking.jpeg",
      userName:"biking1222",
      content:"I did some biking today."
    },
    {
      title:"Mountain Biking",
      imageUrl:"/biking.jpeg",
      userName:"biking1222",
      content:"I did some biking today."
    }
  ];

}
