import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
	      {
		          path: 'home',
			      loadChildren: () => import('./../home/home.module').then( m => m.HomePageModule)
			        },
	      {
		          path: 'make-artist',
			      loadChildren: () => import('./../make-artist/make-artist.module').then( m => m.MakeArtistPageModule)
			        },
				  {
					      path: 'edit-artist/:id',
					          loadChildren: () => import('./../edit-artist/edit-artist.module').then( m => m.EditArtistPageModule)
						    },
						      {
							          path: 'hey',
								      loadChildren: () => import('./../modal.module').then( m => m.ModalPageModule)
								        },
									  {
										      path: 'mestitres',
										          loadChildren: () => import('./../mestitres/mestitres.module').then( m => m.MestitresPageModule)
											    },
									  {
										      path: 'make-title',
										          loadChildren: () => import('./../make-title/make-title.module').then( m => m.MakeTitlePageModule)
											    },
											      {
												          path: 'make-album',
													      loadChildren: () => import('./../make-album/make-album.module').then( m => m.MakeAlbumPageModule)
													        },
											      {
												          path: 'edit-album/:id',
													      loadChildren: () => import('./../edit-album/edit-album.module').then( m => m.EditAlbumPageModule)
													        },
											      {
												          path: 'voir-album/:id',
													      loadChildren: () => import('./../voir-album/voir-album.module').then( m => m.VoirAlbumPageModule)
													        },
											      {
												          path: 'edit-title/:id',
													      loadChildren: () => import('./../edit-title/edit-title.module').then( m => m.EditTitlePageModule)
													        },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
