import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Albums } from '../albums';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit{
  routingPath: string
  album: Albums;
  albums: Albums[]

  constructor(private route: ActivatedRoute,
              private service: AlbumsService,
              private router: Router){
    this.albums = []
    this.album = {} as Albums
    this.routingPath=''
  }

  ngOnInit(){
    this.service.getAlbums().subscribe(data => this.albums = data)
    let id = Number(this.route.snapshot.paramMap.get('id'))
    this.service.getAlbum(id).subscribe(i => this.album = i)
    this.routingPath = "/albums/"+id.toString()
  }

  back(){
    this.router.navigate(['/albums'])
  }
}
