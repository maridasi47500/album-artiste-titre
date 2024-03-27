import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { AlbumService } from './../shared/album.service';
import { AlbumhavetitleService } from './../shared/albumhavetitle.service';
import { TitleService } from './../shared/title.service';
import { Albumhavetitle } from './../shared/albumhavetitle';
import { Album } from './../shared/album';
import { ModalController } from '@ionic/angular';
import { MestitresPage } from './../mestitres/mestitres.page';
import { ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Item } from './../types';
@Component({
	  selector: 'app-edit-album',
	    templateUrl: './edit-album.page.html',
	      styleUrls: ['./edit-album.page.scss'],
})
export class EditAlbumPage implements OnInit {
	 makeid(length:any) {
		                     var result = '';
				                             var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
							                                 var charactersLength = characters.length;
											                                 let counter = 0;
															                                     while (counter < length) {
																				                                                       result += characters.charAt(Math.floor(Math.random() * charactersLength));
																										                                                               counter += 1;
																																	                                                                   }
																																									                                                                   return result;
																																																	           }
		          private formatData(data: string[]) {
				                       if (data.length === 1) {
							                                          const fruit = this.Titles.find((fruit: any) => fruit.value === data[0]);
												                                     if(fruit){
																	                                              return fruit.text;
																						                                         }
																											                                              }

																																                                                       return `${data.length} items`;
																																						                                                          }

																																													                                                       fruitSelectionChanged(fruits: string[]) {
																																																				                                                                        this.Mestitres = fruits;
																																																													                                                                     this.selectedFruitsText = this.formatData(this.Mestitres);
																																																																					                                                                              this.modalfruit1.dismiss();
																																																																														                                                                                 }

																																																																																										              Titles: Item[] = [{"text":"hey","value":"hey"}];
	        @ViewChild('modalfruit1', { static: true }) modalfruit1!: IonModal;

		          selectedFruitsText = '0 Items';
	  updateAlbumForm: FormGroup;
	    Albums: any[] = [];
	    Albumhavetitles: any[] = [];
	    Mestitres: string[] = [];
	    id: any;
	      constructor(
		        private modalCtrl: ModalController,
		        private titleService: TitleService,
		        private albumhavetitleService: AlbumhavetitleService,
		        private albumService: AlbumService,
			    private router: Router,
			      private actRoute: ActivatedRoute,
				      public fb: FormBuilder
				        ) {
						    this.id = this.actRoute.snapshot.paramMap.get('id');
						        this.albumService.getAlbum(this.id).valueChanges().subscribe(res => {
								      this.updateAlbumForm.setValue(res);
								          });
									    }
				   fetchAlbums() {
					       this.titleService
					             .getTitleList()
						           .valueChanges()
							         .subscribe((res:any) => {
									         console.log(res);
										       });
								 }

				   fetchAlbumhavetitles() {

					       this.albumhavetitleService
					             .getAlbumhavetitleList()
						           .valueChanges()
							         .subscribe((res:any) => {
									         console.log(res);
										       });
										         }
				   fetchTitles() {

					       this.albumService
					             .getAlbumList()
						           .valueChanges()
							         .subscribe((res:any) => {
									         console.log(res);
										       });
										         }
											   deleteAlbum(id: any) {
												       console.log(id);
												           if (window.confirm('Do you really want to delete?')) {
														         this.albumService.deleteAlbum(id);
															     }
															       }
									      ngOnInit() {
					     this.fetchAlbums();
					     this.fetchAlbumhavetitles();
					     this.fetchTitles();
					         let albumhavetitleRes = this.albumhavetitleService.getAlbumhavetitleList();
						     albumhavetitleRes.snapshotChanges().subscribe((res) => {
							           this.Albumhavetitles = [];
								         res.forEach((item) => {
										         let a: any = item.payload.toJSON();
											         a['$key'] = item.key;
												 if (a.album_id === this.id){
												         this.Albumhavetitles.push(a as Albumhavetitle);
												 }
													 console.log(a);
													       });

					         let titleRes = this.titleService.getTitleList();
						     titleRes.snapshotChanges().subscribe((res) => {
							           this.Titles = [];
								         res.forEach((item) => {
										         let b: any = {};
										         let a: any = item.payload.toJSON();
											         b['value'] = item.key;
											         b['text'] = a.name;
												 if (!this.Albumhavetitles.some(x=>x.album_id === this.id && x.title_id === b.value)){
												         this.Titles.push(b as Item);
												 }
													 console.log(b);
													       });
													           });
													           });
					         let albumRes = this.albumService.getAlbumList();
						     albumRes.snapshotChanges().subscribe((res) => {
							           this.Albums = [];
								         res.forEach((item) => {
										         let a: any = item.payload.toJSON();
											         a['$key'] = item.key;
												         this.Albums.push(a as Album);
													       });
													           });
										          this.updateAlbumForm = this.fb.group({
												        name: [''],
														        })
															    console.log(this.updateAlbumForm.value)
															      }
															        updateForm() {
																	    this.albumService.updateAlbum(this.id, this.updateAlbumForm.value)
																	          .then(() => {
																					  var albumid:string=String(this.id);
																					  var mestitres=this.Mestitres;

																					  this.Mestitres = [];
																					  this.selectedFruitsText = this.formatData(this.Mestitres);
																					  console.log("mes titres")
																					  for (var i = 0;i<mestitres.length;i++){
																						  //ajouter chaque album ont 1 titre
															       this.albumhavetitleService
															              .createAlbumhavetitle({$key: this.makeid(20),"album_id":albumid,"title_id":mestitres[i]});
																					  }
																				  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
																					                     this.router.navigate(['/tabs/make-album']);
																							                         });
																				        })
																					      .catch(error => console.log(error));
																					        }
}
