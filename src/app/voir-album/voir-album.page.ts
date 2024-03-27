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
	  titres:Albumhavetitle[]=[];
	  monalbumadestitres:any=[];
	  back(){
		    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
		   this.router.navigate(['/tabs/make-album']);
		    });
	  }
	  deleteTitle(id: any) {
		                                                                                                         console.log(id);
															                                                                                                            if (window.confirm('Do you really want to delete?')) {
																													                                                                                                                             this.albumhavetitleService.deleteAlbumhavetitle(id);
								let albumhavetitleRes=this.albumhavetitleService.getAlbumhavetitleList();
																																												                                                                                                                                  }
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
								let albumhavetitleRes = this.albumhavetitleService.getAlbumhavetitleList();
								               albumhavetitleRes.snapshotChanges().subscribe((res1) => {

									  console.log(res1,"mon album a ades titres",this.id);
								var myid="",myres:any;
								//this.monalbumadestitres=res1.filter(x=>x.album_id === this.id);
								this.monalbumadestitres=[];
								res1.forEach((item:any) => {
									//
															     let a: any = item.payload.toJSON();
															     if (a.album_id === this.id){
															                                                                                                      a['$key'] = item.key;
																											                                                                                                               this.monalbumadestitres.push(a as Albumhavetitle);

															     }
								})
								//heythere!!!
								this.monalbumadestitres.map((myres:any) => {
									console.log(myres,"zertyui");
									myid=myres.title_id;

									this.titleService.getTitle(myid).valueChanges().subscribe(res2 => {
									  console.log(res2,"titres");
										myres["title"]=res2.name;
									  myres["name"]=res2.name;
									this.artistService.getArtist(res2.artist_id).valueChanges().subscribe(res3 => {
										myres["artist"]=res3.name;
										//this.titres.push(myres);
									});
										

									});
									return myres;
									});
									//wow!!!!
								          });
								          });

									    }
									      ngOnInit() {
						        this.albumService.getAlbum(this.id);
															      }
}
