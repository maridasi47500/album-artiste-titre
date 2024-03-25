import { Injectable } from '@angular/core';
import { Artist } from '../shared/artist';
import {
	  AngularFireDatabase,
	    AngularFireList,
	      AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({
	  providedIn: 'root',
})
export class ArtistService {
	  artistListRef: AngularFireList<any>;
	    artistRef: AngularFireObject<any>;
	      constructor(private db: AngularFireDatabase) {}
	      // Create
	         createArtist(artist: Artist) {
	             return this.artistListRef.push({
	                   name: artist.name,
	                                   });
	                                     }
	                                       // Get Single
	                                         getArtist(id: string) {
	                                             this.artistRef = this.db.object('/artist/' + id);
	                                                 return this.artistRef;
	                                                   }
	                                                     // Get List
	                                                       getArtistList() {
	                                                           this.artistListRef = this.db.list('/artist');
	                                                               return this.artistListRef;
	                                                                 }
	                                                                   // Update
	                                                                     updateArtist(id: any, artist: Artist) {
	                                                                         return this.artistRef.update({
	                                                                               name: artist.name,
	                                                                                               });
	                                                                                                 }
	                                                                                                   // Delete
	                                                                                                     deleteArtist(id: string) {
	                                                                                                         this.artistRef = this.db.object('/artist/' + id);
	                                                                                                             this.artistRef.remove();
	                                                                                                               }
	                                                                                                               }
