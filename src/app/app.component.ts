import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './css/land1.component.css',
    './css/land2.component.css'
  ]
})
export class AppComponent implements OnInit {
  title = 'victor-portfolio';
  sideIcon: any = "<\\>"

  homeBackgroundVideo: any = document.getElementsByClassName("home-land1-background-video")
  whoBackgroundVideo: any = document.getElementsByClassName("who-land2-background-video")

  ngOnInit() {
    this.homeBackgroundVideo.play()
    this.whoBackgroundVideo.play()
  }
}
