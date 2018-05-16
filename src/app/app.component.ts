import { Component } from '@angular/core';
import { MusicService } from './services/music.service';
import { Music } from './model/music';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  musics: Music[];

  constructor(private musicService: MusicService){

    this.musicService.getMusics("bruno").subscribe((musics) => {
      
      console.log(musics);
       
    })
  }


  

  
}
