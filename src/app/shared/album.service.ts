import { Injectable } from '@angular/core';
import { Album } from '../shared/album';
import {
	  AngularFireDatabase,
	    AngularFireList,
	      AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({
	  providedIn: 'root',
})
export class AlbumService {
	  albumListRef: AngularFireList<any>;
	    albumRef: AngularFireObject<any>;
	      constructor(private db: AngularFireDatabase) {}
	      // Create
	         createAlbum(album: Album) {
	             return this.albumListRef.push({
	                   name: album.name,
	                                   });
	                                     }
	                                       // Get Single
	                                         getAlbum(id: string) {
	                                             this.albumRef = this.db.object('/album/' + id);
	                                                 return this.albumRef;
	                                                   }
	                                                     // Get List
	                                                       getAlbumList() {
	                                                           this.albumListRef = this.db.list('/album');
	                                                               return this.albumListRef;
	                                                                 }
	                                                                   // Update
	                                                                     updateAlbum(id: any, album: Album) {
	                                                                         return this.albumRef.update({
	                                                                               name: album.name,
	                                                                                               });
	                                                                                                 }
	                                                                                                   // Delete
	                                                                                                     deleteAlbum(id: string) {
	                                                                                                         this.albumRef = this.db.object('/album/' + id);
	                                                                                                             this.albumRef.remove();
	                                                                                                               }
	                                                                                                               }
