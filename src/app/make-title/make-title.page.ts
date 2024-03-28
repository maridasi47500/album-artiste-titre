import { Component, OnInit } from '@angular/core';

import { AfterViewInit } from '@angular/core';
import { ElementRef,Directive, Input} from '@angular/core';
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

import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import {
	  AngularFireStorage,
	    AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import {
	  AngularFirestore,
	    AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
export interface imgFile {
	  name: string;
	    filepath: string;
	      size: number;
}
@Component({
	  selector: 'app-make-title',
	    templateUrl: './make-title.page.html',
	      styleUrls: ['./make-title1.page.scss','./make-title.page.scss'],
})
export class MakeTitlePage implements OnInit {
	ionViewDidLeave(){
		this.stop()
	}
        progressValue:any="0";
	        @ViewChild('musiqueContainer') musiquecont: ElementRef;
		        musiqueElmt: any;
			        checkVolume(dir:any = null) {
					                  if (dir) {
								                                const currentVolume = Math.floor(this.musiqueElmt.volume * 10) / 10;
												                                  if (dir === "+" && currentVolume < 1) {
																	                                                  this.musiqueElmt.volume += 0.1;
																							                                                      } else if (dir === "-" && currentVolume > 0) {
																														                                                                        this.musiqueElmt.volume -= 0.1;
																																							                                                                      }
																																															      this.musiqueElmt.muted = currentVolume <= 0;

																																															       }

																																															          this.changeButtonState("mute");

																																																     }

																																																        playVideo(filename:any){

																																																		           this.musiqueElmt.src="https://firebasestorage.googleapis.com/v0/b/album-cfe29.appspot.com/o/filesStorage%2F"+filename+"?alt=media";
																																																			                                                                                          }

																																																														     alterVolume= (dir:any) => {

																																																															                  this.checkVolume(dir);
																																																																	                                                                                         };

																																																																												    myprogress($ev:any){

																																																																													               const pos =

																																																																															                              ($ev.pageX - $ev.target.offsetLeft - $ev.target.offsetParent.offsetLeft) /

																																																																																		                                 $ev.target.offsetWidth;

																																																																														                    this.musiqueElmt.currentTime = pos * this.musiqueElmt.duration;

																																																																																       }
																																																																																               ngAfterViewInit(){
																																																																																		                         console.log("hello there");
																																																																																					                  this.musiqueElmt = this.musiquecont.nativeElement.getElementsByTagName('audio')[0];
																																																																																							                    console.log("heythere");
																																																																																									                      console.log("heythere",this.musiqueElmt);
																																																																																											              }
																																																																																												              playpause(){
																																																																																														                      if (this.musiqueElmt.paused || this.musiqueElmt.ended) {
																																																																																																	                                  this.musiqueElmt.play();
																																																																																																					                                } else {
																																																																																																										                                          this.musiqueElmt.pause();
																																																																																																															                                              }
																																																																																																																				              }
																																																																																																																					      stop(){
																																																																																																																						                      this.musiqueElmt.pause();
																																																																																																																								                      this.pause();
																																																																																																																										                      this.musiqueElmt.currentTime=0;
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
																																																																																																																																																																																							                        if (this.musiqueElmt.muted === true) {
																																																																																																																																																																																											                            // Play/Pause button
																																																																																																																																																																																											                                      this.dataStateMute= "mute";
																																																																																																																																																																																											                                                                           this.musiqueElmt.muted=false;
																																																																																																																																																																																											                                                                                             }else {
																																																																																																																																																																																											                                                                                                                                  this.dataStateMute= "unmute";
																																																																																																																																																																																											                                                                                                                                                                       this.musiqueElmt.muted=true;
																																																																																																																																																																																											                                                                                                                                                                                                                                      }
																																																																																																																																																																																											                                                                                                                                                                                                                                              }
																																																																																																																																																																																											                                                                                                                                                                                                                                                      voldown(){
																																																																																																																																																																																											                                                                                                                                                                                                                                                                      this.musiqueElmt.volume=this.musiqueElmt.volume - 5/100;
																																																																																																																																																																																											                                                                                                                                                                                                                                                                              }
																																																																																																																																																																																											                                                                                                                                                                                                                                                                                      volinc(){
																																																																																																																																																																																											                                                                                                                                                                                                                                                                                                      this.musiqueElmt.volume=this.musiqueElmt.volume + 5/100;
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
																																																																																																																																																																																																																																						                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               this.progressValue=this.musiqueElmt.currentTime;
																																																																																																																																																																																																																																						                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       }
																																																																																																																																																																																																																																						                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               loaded(){
																																																																																																																																																																																																																																						                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               this.maxProgress=this.musiqueElmt.duration;
																																																																																																																																																																																																																																						                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       }
	myurl(x:any){
		return "https://firebasestorage.googleapis.com/v0/b/album-cfe29.appspot.com/o/filesStorage/"+x+"?alt=media";
	}
	myfilelist:FileList;
	  fileUploadTask: AngularFireUploadTask;
	  // Upload progress
	     percentageVal: Observable<any>;
	       // Track file uploading with snapshot
	         trackSnapshot: Observable<any>;
	           // Uploaded File URL
	             UploadedImageURL: Observable<string>;
	               // Uploaded image collection
	                 files: Observable<imgFile[]>;
	                   // Image specifications
	                     imgName: string;
	                       imgSize: number;
	                         // File uploading status
	                           isFileUploading: boolean;
	                             isFileUploaded: boolean;
	                               private filesCollection: AngularFirestoreCollection<imgFile>;

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
							       this.artistService.getArtist(data).valueChanges().subscribe(res => {
							             this.message = `artist: ${res.name}!`;
																	                                                                               });

								     this.myartistid =data;

								       console.log(this.myartistid);
								         }
									   }

	    constructor(
		     private afs: AngularFirestore,
		         private afStorage: AngularFireStorage,
		        private artistService: ArtistService,
			private modalCtrl: ModalController,
		        private titleService: TitleService,
			    private router: Router,
			        public fb: FormBuilder
				  ) {this.isFileUploading = false;
				      this.isFileUploaded = false;
				      // Define uploaded files collection
				           this.filesCollection = afs.collection<imgFile>('imagesCollection');
				               this.files = this.filesCollection.valueChanges();}
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
							      filename: [''],
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
																		      this.uploadImage(this.myfilelist);
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


uploadMyImage(event: FileList) {
	this.myfilelist=event;
	console.log(this.myartistid,this.titleForm.value);
	    var file: any = event.item(0);

	      this.titleForm.controls['filename'].patchValue(String(new Date().getTime())+"_"+file.name);

}
uploadImage(event: FileList) {
	    const file: any = event.item(0);
	      // Image validation
	         if (file.type.split('/')[0] !== 'video' && file.type.split('/')[0] !== 'audio') {
	               console.log('File type is not supported!');
	                     return;
	                         }
	                             this.isFileUploading = true;
	                                 this.isFileUploaded = false;
	                                     this.imgName = file.name;
	                                         // Storage path
	                                             const fileStoragePath = 'filesStorage/'+this.titleForm.value.filename;
	                                                 // Image reference
	                                                     const imageRef = this.afStorage.ref(fileStoragePath);
	                                                         // File upload task
	                                                             this.fileUploadTask = this.afStorage.upload(fileStoragePath, file);
	                                                                 // Show uploading progress
	                                                                     this.percentageVal = this.fileUploadTask.percentageChanges();
	                                                                         this.trackSnapshot = this.fileUploadTask.snapshotChanges().pipe(
	                                                                               finalize(() => {
	                                                                                       // Retreive uploaded image storage path
	                                                                                               this.UploadedImageURL = imageRef.getDownloadURL();
	                                                                                                       this.UploadedImageURL.subscribe(
	                                                                                                                 (resp) => {
	                                                                                                                             this.storeFilesFirebase({
	                                                                                                                                           name: file.name,
	                                                                                                                                                         filepath: resp,
	                                                                                                                                                                       size: this.imgSize,
	                                                                                                                                                                                   });
	                                                                                                                                                                                               this.isFileUploading = false;
	                                                                                                                                                                                                           this.isFileUploaded = true;
	                                                                                                                                                                                                                     },
	                                                                                                                                                                                                                               (error) => {
	                                                                                                                                                                                                                                           console.log(error);
	                                                                                                                                                                                                                                                     }
	                                                                                                                                                                                                                                                             );
	                                                                                                                                                                                                                                                                   }),
	                                                                                                                                                                                                                                                                         tap((snap: any) => {
	                                                                                                                                                                                                                                                                                 this.imgSize = snap.totalBytes;
	                                                                                                                                                                                                                                                                                       })
	                                                                                                                                                                                                                                                                                           );
	                                                                                                                                                                                                                                                                                             }
	                                                                                                                                                                                                                                                                                               storeFilesFirebase(image: imgFile) {
	                                                                                                                                                                                                                                                                                                   const fileId = this.afs.createId();
	                                                                                                                                                                                                                                                                                                       this.filesCollection
	                                                                                                                                                                                                                                                                                                             .doc(fileId)
	                                                                                                                                                                                                                                                                                                                   .set(image)
	                                                                                                                                                                                                                                                                                                                         .then((res) => {
	                                                                                                                                                                                                                                                                                                                                 console.log(res);
	                                                                                                                                                                                                                                                                                                                                       })
	                                                                                                                                                                                                                                                                                                                                             .catch((err) => {
	                                                                                                                                                                                                                                                                                                                                                     console.log(err);
	                                                                                                                                                                                                                                                                                                                                                           });
	                                                                                                                                                                                                                                                                                                                                                             }
}
