import { Injectable } from '@angular/core';
import { Albumhavetitle } from '../shared/albumhavetitle';
import {
	  AngularFireDatabase,
	    AngularFireList,
	      AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({
	  providedIn: 'root',
})
export class AlbumhavetitleService {
	  albumhavetitleListRef: AngularFireList<any>;
	    albumhavetitleRef: AngularFireObject<any>;
	      constructor(private db: AngularFireDatabase) {}
	      // Create
	         createAlbumhavetitle(albumhavetitle: Albumhavetitle) {
	             return this.albumhavetitleListRef.push({
	                   title_id: albumhavetitle.title_id,
	                   album_id: albumhavetitle.album_id,
	                                   });
	                                     }
	                                       // Get Single
	                                         getAlbumhavetitle(id: string) {
	                                             this.albumhavetitleRef = this.db.object('/albumhavetitle/' + id);
	                                                 return this.albumhavetitleRef;
	                                                   }
	                                                     // Get List
	                                                       getAlbumhavetitleList() {
	                                                           this.albumhavetitleListRef = this.db.list('/albumhavetitle');
	                                                               return this.albumhavetitleListRef;
	                                                                 }
	                                                                   // Update
	                                                                     updateAlbumhavetitle(id: any, albumhavetitle: Albumhavetitle) {
	                                                                         return this.albumhavetitleRef.update({
	                                                                               album_id: albumhavetitle.album_id,
	                                                                               title_id: albumhavetitle.title_id,
	                                                                                               });
	                                                                                                 }
	                                                                                                   // Delete
	                                                                                                     deleteAlbumhavetitle(id: string) {
	                                                                                                         this.albumhavetitleRef = this.db.object('/albumhavetitle/' + id);
	                                                                                                             this.albumhavetitleRef.remove();
	                                                                                                               }
	                                                                                                               }
