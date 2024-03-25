import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ArtistService } from './../shared/artist.service';
@Component({
	  selector: 'app-edit-artist',
	    templateUrl: './edit-artist.page.html',
	      styleUrls: ['./edit-artist.page.scss'],
})
export class EditArtistPage implements OnInit {
	  updateArtistForm: FormGroup;
	    id: any;
	      constructor(
		          private artistService: ArtistService,
			      private actRoute: ActivatedRoute,
			          private router: Router,
				      public fb: FormBuilder
				        ) {
						    this.id = this.actRoute.snapshot.paramMap.get('id');
						        this.artistService.getArtist(this.id).valueChanges().subscribe(res => {
								      this.updateArtistForm.setValue(res);
								          });
									    }
									      ngOnInit() {
										          this.updateArtistForm = this.fb.group({
												        name: [''],
														        })
															    console.log(this.updateArtistForm.value)
															      }
															        updateForm() {
																	    this.artistService.updateArtist(this.id, this.updateArtistForm.value)
																	          .then(() => {
																			          this.router.navigate(['/tabs/make-artist']);
																				        })
																					      .catch(error => console.log(error));
																					        }
}
