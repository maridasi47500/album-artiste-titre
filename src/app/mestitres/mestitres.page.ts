import { Component,OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { ArtistService } from './../shared/artist.service';
import { TitleService } from './../shared/title.service';
import { Title } from './../shared/title';
import { Artist } from './../shared/artist';
import { AppComponent } from './../app.component';
import { MakeTitlePage } from './../make-title/make-title.page';

import { ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
	  selector: 'app-mestitres-example',
	    templateUrl: 'mestitres.page.html',
})
export class MestitresPage implements OnInit {
	Artists: any = [];
	                  @ViewChild(IonModal) modal: IonModal;

			                      message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
					                            name: string;


	    constructor(private artistService: ArtistService,private modalCtrl: ModalController) {}

	      cancel() {
		          return this.modalCtrl.dismiss(null, 'cancel');
			    }

			      confirm() {
				          return this.modalCtrl.dismiss(this.name, 'confirm');
					    }
					    fetchArtists() {
						                                                   this.artistService
												                                                        .getArtistList()
																			                                                           .valueChanges()
																										                                                                    .subscribe((res) => {
																																			                                                                                     console.log(res);
																																													                                                                                            });
																																																								                                                                                             }
																																																																			      ngOnInit() {
																																																																										                                                this.fetchArtists();
																																																																																                                                 let artistRes = this.artistService.getArtistList();
																																																																																						                                                      artistRes.snapshotChanges().subscribe((res) => {
																																																																																													                                                                         this.Artists = [];

																																																																																																						                                                                          res.forEach((item) => {
																																																																																																																                                                                                           let a: any = item.payload.toJSON();
																																																																																																																											                                                                                                    a['$key'] = item.key;
																																																																																																																																							                                                                                                             this.Artists.push(a as Artist);
																																																																																																																																																				                                                                                                                    });
																																																																																																																																																																		                                                                                                                       });
																																																																			      }
}

