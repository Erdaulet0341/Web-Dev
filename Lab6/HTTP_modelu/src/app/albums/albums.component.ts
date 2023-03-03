import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Albums } from '../albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})

export class AlbumsComponent implements OnInit{

  albums:Albums[]

  constructor(private albumsService: AlbumsService){
    this.albums = []
  }

  ngOnInit(){
    this.albumsService.getAlbums().subscribe(data => this.albums = data)
  }


  deleteAlbume(item:Albums){
    console.log(item)
  }
}
