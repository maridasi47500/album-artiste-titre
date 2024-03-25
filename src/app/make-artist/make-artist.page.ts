import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ArtistService } from './../shared/artist.service';
import { Artist } from './../shared/artist';
@Component({
	  selector: 'app-make-artist',
	    templateUrl: './make-artist.page.html',
	      styleUrls: ['./make-artist.page.scss'],
})
export class MakeArtistPage implements OnInit {
	  artistForm: FormGroup;
	    Artists: any = [];

	    constructor(
		        private artistService: ArtistService,
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
											   deleteArtist(id: any) {
												       console.log(id);
												           if (window.confirm('Do you really want to delete?')) {
														         this.artistService.deleteArtist(id);
															     }
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
					        this.artistForm = this.fb.group({
							      name: ['']
									      });
									        }
										  formSubmit() {
											      if (!this.artistForm.valid) {
												            return false;
													        } else {
															      return this.artistService
															              .createArtist(this.artistForm.value)
																              .then((res) => {
																		                console.log(res);
																				          this.artistForm.reset();
																					            this.router.navigate(['/make-artist']);
																						            })
																							            .catch((error) => console.log(error));
																								        }
																									  }
}
