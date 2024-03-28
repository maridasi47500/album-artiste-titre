import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TitleService } from './../shared/title.service';
import { AlbumService } from './../shared/album.service';
import { AlbumhavetitleService } from './../shared/albumhavetitle.service';
import { Albumhavetitle } from './../shared/albumhavetitle';
import { Album } from './../shared/album';
import { ModalController } from '@ionic/angular';
import { MestitresPage } from './../mestitres/mestitres.page';
import { ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Item } from './../types';

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
	  selector: 'app-make-album',
	    templateUrl: './make-album.page.html',
	      styleUrls: ['./make-album.page.scss'],
})
export class MakeAlbumPage implements OnInit {
	myfilelist:FileList;
	// File upload task
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
	 Mestitres:string[] = [];
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
																																																																					                                                                              this.modalfruit.dismiss();
																																																																														                                                                                 }

																																																																																										              Titles: Item[] = [{"text":"hey","value":"hey"}];
	        @ViewChild('modalfruit', { static: true }) modalfruit!: IonModal;

		          selectedFruitsText = '0 Items';
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
	    Albumhavetitles: any = [];

	    constructor(
		     private afs: AngularFirestore,
		         private afStorage: AngularFireStorage,
		        private modalCtrl: ModalController,
		        private titleService: TitleService,
		        private albumhavetitleService: AlbumhavetitleService,
		        private albumService: AlbumService,
			    private router: Router,
			        public fb: FormBuilder
				  ) {  this.isFileUploading = false;
				      this.isFileUploaded = false;
				      // Define uploaded files collection
				           this.filesCollection = afs.collection<imgFile>('imagesCollection');
				               this.files = this.filesCollection.valueChanges();}
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
												         this.Albumhavetitles.push(a as Albumhavetitle);
													 console.log(a);
													       });
													           });
					         let titleRes = this.titleService.getTitleList();
						     titleRes.snapshotChanges().subscribe((res) => {
							           this.Titles = [];
								         res.forEach((item) => {
										         let b: any = {};
										         let a: any = item.payload.toJSON();
											         b['value'] = item.key;
											         b['text'] = a.name;
												         this.Titles.push(b as Item);
													 console.log(b);
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
					        this.albumForm = this.fb.group({
							      name: [''],
							      filename: ['']
									      });
									        }
										  formSubmit() {
											      if (!this.albumForm.valid) {
												            return false;
													        } else {
															      return this.albumService
															              .createAlbum(this.albumForm.value)
																              .then((res) => {
																		                console.log(res,"album ID ");
																				this.uploadImage(this.myfilelist);
																				          this.albumForm.reset();
																					  var albumid:string=String(res.key);
																					  var mestitres=this.Mestitres;

																					  this.Mestitres = [];
																					  this.selectedFruitsText = this.formatData(this.Mestitres);
																					  console.log("mes titres")
																					  for (var i = 0;i<mestitres.length;i++){
																						  //ajouter chaque album ont 1 titre
															       this.albumhavetitleService
															              .createAlbumhavetitle({$key: this.makeid(20),"album_id":albumid,"title_id":mestitres[i]});
																					  }

																					            this.router.navigate(['/tabs/make-album']);
																						            })
																							            .catch((error) => console.log(error));
																								        }
																									  }
uploadMyImage(event: FileList) {
	this.myfilelist=event;
	console.log(this.myartistid,this.albumForm.value);
	    var file: any = event.item(0);

	      this.albumForm.controls['filename'].patchValue(String(new Date().getTime())+"_"+file.name);

}
  uploadImage(event: FileList) {
	      const file: any = event.item(0);
	        // Image validation
	           if (file.type.split('/')[0] !== 'image') {
	                 console.log('File type is not supported!');
	                       return;
	                           }
	                               this.isFileUploading = true;
	                                   this.isFileUploaded = false;
	                                       this.imgName = file.name;
	                                           // Storage path
	                                             const fileStoragePath = 'filesStorage/'+this.albumForm.value.filename;
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
