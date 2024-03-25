import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlbumService } from './../shared/album.service';
import { Album } from './../shared/album';
import { ModalController } from '@ionic/angular';
import { MestitresPage } from './../mestitres/mestitres.page';
import { ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
@Component({
	  selector: 'app-make-album',
	    templateUrl: './make-album.page.html',
	      styleUrls: ['./make-album.page.scss'],
})
export class MakeAlbumPage implements OnInit {
	             async openModal() {
			                              const modal = await this.modalCtrl.create({
							                                             component: MestitresPage,
												                                          cssClass: 'selector-modal-titre'
																	                                             });
																						                                                    modal.present();

																												                                                       const { data, role } = await modal.onWillDismiss();

																																		                                                              if (role === 'confirm') {
																																										                                                                           this.message = `Hello, ${data}!`;
																																																			                                                                        this.myartistid ='${data}';

																																																												                                                                       console.log(this.myartistid);
																																																																				                                                                                }
																																																																														                                                                           }
	 message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
	                       name: string;
			                             myartistid: string;


																																							                                                         onWillDismiss(event: Event) {
																																															                                                                     const ev = event as CustomEvent<OverlayEventDetail<string>>;
																																																							                                                                             if (ev.detail.role === 'confirm') {
																																																																	                                                                                           this.myartistid ='${ev.detail.data}';
																																																																												                                                                                         console.log(this.myartistid);
																																																																																							                                                                                       this.message = `Hello, ${this.myartistid}!`;
																																																																																																	                                                                                                 }
																																																																																																													                                                                                             }
	  albumForm: FormGroup;
	    Albums: any = [];

	    constructor(
		        private modalCtrl: ModalController,
		        private albumService: AlbumService,
			    private router: Router,
			        public fb: FormBuilder
				  ) {}
				   fetchAlbums() {
					       this.albumService
					             .getAlbumList()
						           .valueChanges()
							         .subscribe((res) => {
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
					         let albumRes = this.albumService.getAlbumList();
						     albumRes.snapshotChanges().subscribe((res) => {
							           this.Albums = [];
								         res.forEach((item) => {
										         let a: any = item.payload.toJSON();
											         a['$key'] = item.key;
												         this.Albums.push(a as Album);
													       });
													           });
					        this.albumForm = this.fb.group({
							      name: ['']
									      });
									        }
										  formSubmit() {
											      if (!this.albumForm.valid) {
												            return false;
													        } else {
															      return this.albumService
															              .createAlbum(this.albumForm.value)
																              .then((res) => {
																		                console.log(res);
																				          this.albumForm.reset();
																					            this.router.navigate(['/make-album']);
																						            })
																							            .catch((error) => console.log(error));
																								        }
																									  }
}
