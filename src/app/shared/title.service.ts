import { Injectable } from '@angular/core';
import { Title } from '../shared/title';
import {
	  AngularFireDatabase,
	    AngularFireList,
	      AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({
	  providedIn: 'root',
})
export class TitleService {
	  titleListRef: AngularFireList<any>;
	    titleRef: AngularFireObject<any>;
	      constructor(private db: AngularFireDatabase) {}
	      // Create
	         createTitle(title: Title) {
	             return this.titleListRef.push({
	                   name: title.name,
	                   artist_id: title.artist_id,
	                   filename: title.filename,
	                                   });
	                                     }
	                                       // Get Single
	                                         getTitle(id: string) {
	                                             this.titleRef = this.db.object('/title/' + id);
	                                                 return this.titleRef;
	                                                   }
	                                                     // Get List
	                                                       getTitleList() {
	                                                           this.titleListRef = this.db.list('/title');
	                                                               return this.titleListRef;
	                                                                 }
	                                                                   // Update
	                                                                     updateTitle(id: any, title: Title) {
	                                                                         return this.titleRef.update({
	                                                                               name: title.name,
	                                                                                               });
	                                                                                                 }
	                                                                                                   // Delete
	                                                                                                     deleteTitle(id: string) {
	                                                                                                         this.titleRef = this.db.object('/title/' + id);
	                                                                                                             this.titleRef.remove();
	                                                                                                               }
	                                                                                                               }
