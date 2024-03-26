import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { AlbumService } from './../shared/album.service';
import { Album } from './../shared/album';
import { AlbumhavetitleService } from './../shared/albumhavetitle.service';
import { TitleService } from './../shared/title.service';
import { ArtistService } from './../shared/artist.service';
import { Albumhavetitle } from './../shared/albumhavetitle';
import { Title } from './../shared/title';
import { Artist } from './../shared/artist';
@Component({
	  selector: 'app-voir-album',
	    templateUrl: './voir-album.page.html',
	      styleUrls: ['./voir-album.page.scss'],
})
export class VoirAlbumPage implements OnInit {
	  voirAlbumForm: FormGroup;
	  monalbum:Album;
	  titres:Title[]=[];
	  monalbumadestitres:any=[];
	  back(){
		    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
		   this.router.navigate(['/tabs/make-album']);
		    });
	  }
	    id: any;
	      constructor(
		          private albumhavetitleService: AlbumhavetitleService,
		          private albumService: AlbumService,
		          private artistService: ArtistService,
		          private titleService: TitleService,
			      private actRoute: ActivatedRoute,
			          private router: Router,
				      public fb: FormBuilder
				        ) {
						    this.id = this.actRoute.snapshot.paramMap.get('id');
						        this.albumService.getAlbum(this.id).valueChanges().subscribe(res => {
									  console.log(res,"album");

								      this.monalbum=res;
						        this.albumhavetitleService.getAlbumhavetitleList().valueChanges().subscribe(res1 => {
									  console.log(res1,"mon album a ades titres",this.id);
								var myid="";
								this.monalbumadestitres=res1.filter(x=>x.album_id === this.id);
								this.titres=[];
								for(var i = 0;i<this.monalbumadestitres.length;i++){
									//
									myid=this.monalbumadestitres[i].title_id;

									this.titleService.getTitle(myid).valueChanges().subscribe(res2 => {
									  console.log(res2,"titres");
									this.artistService.getArtist(res2.artist_id).valueChanges().subscribe(res3 => {
										res2["artistname"]=res3.name;
										this.titres.push(res2);
									});
										

									});
								}
								          });
								          });

									    }
									      ngOnInit() {
															      }
}
