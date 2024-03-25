import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ArtistService } from './../shared/artist.service';
import { TitleService } from './../shared/title.service';
import { Title } from './../shared/title';
import { Artist } from './../shared/artist';

import { ModalController } from '@ionic/angular';
import { ModalExampleComponent } from './../modal.component';
import { ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
@Component({
	  selector: 'app-make-title',
	    templateUrl: './make-title.page.html',
	      styleUrls: ['./make-title.page.scss'],
})
export class MakeTitlePage implements OnInit {
		  @ViewChild(IonModal) modal: IonModal;

		    message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
		      name: string;
		      myartistid: string;

		        cancel() {
				    this.modal.dismiss(null, 'cancel');
				      }

				        confirm() {
						    this.modal.dismiss(this.name, 'confirm');
						      }

						        onWillDismiss(event: Event) {
								    const ev = event as CustomEvent<OverlayEventDetail<string>>;
								        if (ev.detail.role === 'confirm') {
										      this.myartistid ='${ev.detail.data}';
										      console.log(this.myartistid);
										      this.message = `Hello, ${this.myartistid}!`;
										          }
											    }

	  titleForm: FormGroup;
	    Titles: any = [];
	    Artists: any = [];
	     async openModal() {
		         const modal = await this.modalCtrl.create({
				       component: ModalExampleComponent,
			             cssClass: 'selector-modal-artist'
				           });
					       modal.present();

					           const { data, role } = await modal.onWillDismiss();

						       if (role === 'confirm') {
							             this.message = `Hello, ${data}!`;
								     this.myartistid ='${data}';

								       console.log(this.myartistid);
								         }
									   }

	    constructor(
		        private artistService: ArtistService,
			private modalCtrl: ModalController,
		        private titleService: TitleService,
			    private router: Router,
			        public fb: FormBuilder
				  ) {}
				   fetchArtists() {
					       this.artistService
					             .getArtistList()
						           .valueChanges()
							         .subscribe((res) => {
									         console.log(res);
										       });
										         }
				   fetchTitles() {
					       this.titleService
					             .getTitleList()
						           .valueChanges()
							         .subscribe((res) => {
									         console.log(res);
										       });
										         }
											   deleteTitle(id: any) {
												       console.log(id);
												           if (window.confirm('Do you really want to delete?')) {
														         this.titleService.deleteTitle(id);
															     }
															       }
				    ngOnInit() {
					     this.fetchTitles();
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
					         let titleRes = this.titleService.getTitleList();
						     titleRes.snapshotChanges().subscribe((res) => {
							           this.Titles = [];

								         res.forEach((item) => {
										         let a: any = item.payload.toJSON();
											         a['$key'] = item.key;
												         this.Titles.push(a as Title);
													       });
													           });
					        this.titleForm = this.fb.group({
							      name: [''],
							      artist_id: [''],
									      });
									        }
										  formSubmit() {
											  console.log(this.myartistid,this.titleForm.value);
											  this.titleForm.controls['artist_id'].setValue(this.myartistid);
											  console.log(this.myartistid,this.titleForm.value);
											  this.titleForm.controls['artist_id'].patchValue(this.myartistid);
											  console.log(this.myartistid,this.titleForm.value);
											      if (!this.titleForm.valid) {
												            return false;
													        } else {
															      return this.titleService
															              .createTitle(this.titleForm.value)
																              .then((res) => {
																		                console.log(res);
																				          this.titleForm.reset();
																					  this.myartistid="";
																					            this.router.navigate(['/make-title']);
																						            })
																							            .catch((error) => console.log(error));
																								        }
																									  }
}
