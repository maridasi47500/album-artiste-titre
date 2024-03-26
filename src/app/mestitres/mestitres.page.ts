import { Component,OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { TitleService } from './../shared/title.service';
import { Title } from './../shared/title';
import { AppComponent } from './../app.component';
import { MakeTitlePage } from './../make-title/make-title.page';

import { ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Item } from './types';

@Component({
	  selector: 'app-mestitres-example',
	    templateUrl: 'mestitres.page.html',
	    styleUrls: ['./mestitres.page.scss'],
})

export class MestitresPage implements OnInit {
	@ViewChild('modalfruit', { static: true }) modalfruit!: IonModal;

	  selectedFruitsText = '0 Items';

	mysearchbarvalue:any="";
	searchbarvalue($ev:any){
		this.mysearchbarvalue=$ev.target.value;
	}
	Mestitres:string[]=[] = [];
	Selectedtitles:string[] = [];
	 private formatData(data: string[]) {
		     if (data.length === 1 && this.Mestitres.length > 0) {
			           const fruit = this.Mestitres.find((fruit: any) => fruit.value === data[0]);
				   if(fruit){
				         return fruit;
				   }
					     }

					         return `${data.length} items`;
						   }

						     fruitSelectionChanged(fruits: string[]) {
							         this.Mestitres = fruits;
								     this.selectedFruitsText = this.formatData(this.Mestitres);
								         this.modalfruit.dismiss();
									   }

	addtitre(myid:any,mytitle:any){
		//this.Mestitres.push(myid)
	}
	Titles: Item[] = [];
	                  @ViewChild(IonModal) modal: IonModal;

			                      message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
					                            name: string;


	    constructor(private titleService: TitleService,private modalCtrl: ModalController) {}
	      cancel() {
		          return this.modalCtrl.dismiss(null, 'cancel');
			    }

			      confirm() {
				          return this.modalCtrl.dismiss(this.name, 'confirm');
					    }
					    fetchTitles() {
						                                                   this.titleService
												                                                        .getTitleList()
																			                                                           .valueChanges()
																										                                                                    .subscribe((res) => {
																																			                                                                                     console.log(res);
																																													                                                                                            });
																																																								                                                                                             }
																																																																			      ngOnInit() {
																																																																										                                                this.fetchTitles();
																																																																																                                                 let titleRes = this.titleService.getTitleList();
																																																																																						                                                      titleRes.snapshotChanges().subscribe((res) => {
																																																																																													                                                                         this.Titles = [];

																																																																																																						                                                                          res.forEach((item) => {
																																																																																																																                                                                                           let b: any = item.payload.toJSON();
																																																																																																																																							    console.log(b);
																																																																																																																                                                                                           let a: any = {};
																																																																																																																											                                                                                                    a['text'] = b.name;

																																																																																																																											                                                                                                    a['value'] = item.key;
																																																																																																																																							                                                                                                             this.Titles.push(a as Item);
																																																																																																																																																				     console.log(a)
																																																																																																																																																				                                                                                                                    });
																																																																																																																																																																		                                                                                                                       });
																																																																			      }
}

