import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { AlbumService } from './../shared/album.service';
@Component({
	  selector: 'app-edit-album',
	    templateUrl: './edit-album.page.html',
	      styleUrls: ['./edit-album.page.scss'],
})
export class EditAlbumPage implements OnInit {
	  updateAlbumForm: FormGroup;
	    id: any;
	      constructor(
		          private albumService: AlbumService,
			      private actRoute: ActivatedRoute,
			          private router: Router,
				      public fb: FormBuilder
				        ) {
						    this.id = this.actRoute.snapshot.paramMap.get('id');
						        this.albumService.getAlbum(this.id).valueChanges().subscribe(res => {
								      this.updateAlbumForm.setValue(res);
								          });
									    }
									      ngOnInit() {
										          this.updateAlbumForm = this.fb.group({
												        name: [''],
														        })
															    console.log(this.updateAlbumForm.value)
															      }
															        updateForm() {
																	    this.albumService.updateAlbum(this.id, this.updateAlbumForm.value)
																	          .then(() => {
																			          this.router.navigate(['/tabs/make-album']);
																				        })
																					      .catch(error => console.log(error));
																					        }
}
