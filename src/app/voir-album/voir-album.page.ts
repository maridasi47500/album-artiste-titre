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
import { ViewChild,AfterViewInit } from '@angular/core';
import { ElementRef,Directive, Input} from '@angular/core';
@Component({
	  selector: 'app-voir-album',
	    templateUrl: './voir-album.page.html',
	      styleUrls: ['./voir-album1.page.scss','./voir-album.page.scss'],
})
export class VoirAlbumPage implements OnInit {
	ionViewDidLeave(){
		this.stop()
	}
        progressValue:any="0";
	        @ViewChild('musicContainer') musiccont: ElementRef;
		        musicElmt: any;
			        checkVolume(dir:any = null) {
					                  if (dir) {
								                                const currentVolume = Math.floor(this.musicElmt.volume * 10) / 10;
												                                  if (dir === "+" && currentVolume < 1) {
																	                                                  this.musicElmt.volume += 0.1;
																							                                                      } else if (dir === "-" && currentVolume > 0) {
																														                                                                        this.musicElmt.volume -= 0.1;
																																							                                                                      }
																																															      this.musicElmt.muted = currentVolume <= 0;

																																															       }

																																															          this.changeButtonState("mute");

																																																     }

																																																        playVideo(filename:any){

																																																		           this.musicElmt.src="https://firebasestorage.googleapis.com/v0/b/album-cfe29.appspot.com/o/filesStorage%2F"+filename+"?alt=media";
																																																			                                                                                          }

																																																														     alterVolume= (dir:any) => {

																																																															                  this.checkVolume(dir);
																																																																	                                                                                         };

																																																																												    myprogress($ev:any){

																																																																													               const pos =

																																																																															                              ($ev.pageX - $ev.target.offsetLeft - $ev.target.offsetParent.offsetLeft) /

																																																																																		                                 $ev.target.offsetWidth;

																																																																														                    this.musicElmt.currentTime = pos * this.musicElmt.duration;

																																																																																       }
																																																																																               ngAfterViewInit(){
																																																																																		                         console.log("hello there");
																																																																																					                  this.musicElmt = this.musiccont.nativeElement.getElementsByTagName('audio')[0];
																																																																																							                    console.log("heythere");
																																																																																									                      console.log("heythere",this.musicElmt);
																																																																																											              }
																																																																																												              playpause(){
																																																																																														                      if (this.musicElmt.paused || this.musicElmt.ended) {
																																																																																																	                                  this.musicElmt.play();
																																																																																																					                                } else {
																																																																																																										                                          this.musicElmt.pause();
																																																																																																															                                              }
																																																																																																																				              }
																																																																																																																					      stop(){
																																																																																																																						                      this.musicElmt.pause();
																																																																																																																								                      this.pause();
																																																																																																																										                      this.musicElmt.currentTime=0;
																																																																																																																												                      this.progressValue="0";
																																																																																																																														                      this.changeButtonState("playpause");
																																																																																																																																              }
																																																																																																																																	              dataStatePlay:any="fake"; //visible or hidden
																																																																																																																																		              dataStateMute:any="fake"; //visible or hidden
																																																																																																																																		                      videopaused:any=true;
																																																																																																																																		                              videoended:any=false;
																																																																																																																																		                                      videomuted:any=false;
																																																																																																																																		                                              hey:any=[this.videopaused,this.videoended,this.videomuted];
																																																																																																																																		                                                      pause(){
																																																																																																																																		                                                                      for (var i = 0;i<this.hey.length;i++){
																																																																																																																																		                                                                                              this.hey[i]=false;
																																																																																																																																		                                                                                                              }
																																																																																																																																		                                                                                                                              this.videopaused=true;
																																																																																																																																		                                                                                                                                              this.changeButtonState("playpause");
																																																																																																																																		                                                                                                                                                      }
																																																																																																																																		                                                                                                                                                              mute(){
																																																																																																																																		                                                                                                                                                                              for (var i = 0;i<this.hey.length;i++){
																																																																																																																																		                                                                                                                                                                                                      this.hey[i]=false;
																																																																																																																																		                                                                                                                                                                                                                      }
																																																																																																																																		                                                                                                                                                                                                                                      this.videomuted=true;
																																																																																																																																		                                                                                                                                                                                                                                              }
																																																																																																																																																															              ended(){
																																																																																																																																																																	                      for (var i = 0;i<this.hey.length;i++){
																																																																																																																																																																				                              this.hey[i]=false
																																																																																																																																																																							                      }
																																																																																																																																																																									                      this.videopaused=true;
																																																																																																																																																																											                      this.videoended=true;
																																																																																																																																																																													              }
																																																																																																																																																																														              play(){
																																																																																																																																																																																                      this.videopaused=false;
																																																																																																																																																																																		                      this.changeButtonState("playpause");
																																																																																																																																																																																				              }
																																																																																																																																																																																					              muteOk() {
																																																																																																																																																																																							                        if (this.musicElmt.muted === true) {
																																																																																																																																																																																											                            // Play/Pause button
																																																																																																																																																																																											                                      this.dataStateMute= "mute";
																																																																																																																																																																																											                                                                           this.musicElmt.muted=false;
																																																																																																																																																																																											                                                                                             }else {
																																																																																																																																																																																											                                                                                                                                  this.dataStateMute= "unmute";
																																																																																																																																																																																											                                                                                                                                                                       this.musicElmt.muted=true;
																																																																																																																																																																																											                                                                                                                                                                                                                                      }
																																																																																																																																																																																											                                                                                                                                                                                                                                              }
																																																																																																																																																																																											                                                                                                                                                                                                                                                      voldown(){
																																																																																																																																																																																											                                                                                                                                                                                                                                                                      this.musicElmt.volume=this.musicElmt.volume - 5/100;
																																																																																																																																																																																											                                                                                                                                                                                                                                                                              }
																																																																																																																																																																																											                                                                                                                                                                                                                                                                                      volinc(){
																																																																																																																																																																																											                                                                                                                                                                                                                                                                                                      this.musicElmt.volume=this.musicElmt.volume + 5/100;
																																																																																																																																																																																											                                                                                                                                                                                                                                                                                                              }

																																																																																																																																																																																																																																              changeButtonState(type:any) {
																																																																																																																																																																																																																																		                        if (type === "playpause") {
																																																																																																																																																																																																																																						                            // Play/Pause button
																																																																																																																																																																																																																																						                                if (this.videopaused || this.videoended) {
																																																																																																																																																																																																																																						                                                                     this.dataStatePlay= "play";
																																																																																																																																																																																																																																						                                                                                                              } else {
																																																																																																																																																																																																																																						                                                                                                                                                   this.dataStatePlay= "pause";
																																																																																																																																																																																																																																						                                                                                                                                                                                                      }
																																																																																																																																																																																																																																						                                                                                                                                                                                                                                                           } else if (type === "mute") {
																																																																																																																																																																																																																																						                                                                                                                                                                                                                                                                                                                    // Mute button
																																																																																																																																																																																																																																						                                                                                                                                                                                                                                                                                                                                                         this.dataStateMute= this.videomuted ? "unmute" : "mute";
																																																																																																																																																																																																																																						                                                                                                                                                                                                                                                                                                                                                                                                                        }
																																																																																																																																																																																																																																						                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       }
																																																																																																																																																																																																																																						                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               dataState:any="fake"; //visible or hidden
																																																																																																																																																																																																																																						                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       maxProgress:any=undefined;
																																																																																																																																																																																																																																						                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               playing(){
																																																																																																																																																																																																																																						                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               this.progressValue=this.musicElmt.currentTime;
																																																																																																																																																																																																																																						                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       }
																																																																																																																																																																																																																																						                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               loaded(){
																																																																																																																																																																																																																																						                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               this.maxProgress=this.musicElmt.duration;
																																																																																																																																																																																																																																						                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       }
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
										myres["filename"]=res2.filename;
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
