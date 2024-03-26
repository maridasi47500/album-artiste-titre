import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { TitleService } from './../shared/title.service';
import { Title } from './../shared/title';
import { ArtistService } from './../shared/artist.service';
import { Artist } from './../shared/artist';
import { ModalController } from '@ionic/angular';
import { ModalExampleComponent } from './../modal.component';
import { ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
@Component({
	  selector: 'app-edit-title',
	    templateUrl: './edit-title.page.html',
	      styleUrls: ['./edit-title.page.scss'],
})
export class EditTitlePage implements OnInit {
	@ViewChild(IonModal) modal: IonModal;
	  updateTitleForm: FormGroup;
	  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
	                        name: string;
				                      myartistid: string;
	    id: any;
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
																																																																															   this.artistService.getArtist(this.myartistid).valueChanges().subscribe(res => {
																																																																																                                                                        this.message = `artist: ${res.name}!`;

																																																																																									                         });
																																																																																										                                                                                           }
																																																																																																					                                                                                               }
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
			      private actRoute: ActivatedRoute,
			          private router: Router,
				      public fb: FormBuilder
				        ) {
						    this.id = this.actRoute.snapshot.paramMap.get('id');
						        this.titleService.getTitle(this.id).valueChanges().subscribe(res => {
								      this.updateTitleForm.setValue(res);
								          });
									    }
									      ngOnInit() {
										          this.updateTitleForm = this.fb.group({
												        name: [''],
												        artist_id: [''],
														        })
															    console.log(this.updateTitleForm.value)
															      }
															        updateForm() {
																	if (this.myartistid){
																	console.log(this.myartistid,this.updateTitleForm.value);
																	                                                                                          this.updateTitleForm.controls['artist_id'].setValue(this.myartistid);
																												                                                                                            console.log(this.myartistid,this.updateTitleForm.value);
																																							                                                                                              this.updateTitleForm.controls['artist_id'].patchValue(this.myartistid);
																																																		                                                                                                console.log(this.myartistid,this.updateTitleForm.value);
																}
																	    this.titleService.updateTitle(this.id, this.updateTitleForm.value)
																	          .then(() => {
																			          this.router.navigate(['/tabs/make-title']);
																				        })
																					      .catch(error => console.log(error));
																					        }
}
