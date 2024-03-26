import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// Firebase
 import { AngularFireModule } from '@angular/fire/compat';
 import { AngularFireAuthModule } from '@angular/fire/compat/auth';
 import { AngularFireStorageModule } from '@angular/fire/compat/storage';
 import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
 import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
 import { environment } from '../environments/environment';
//modal
 import { ModalExampleComponent } from './modal.component';
 import { MakeTitlePage } from './make-title/make-title.page';
 import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

 @NgModule({
   declarations: [AppComponent],
     imports: [
         BrowserModule,
             IonicModule.forRoot(),
                 AppRoutingModule,
                     AngularFireModule.initializeApp(environment.firebaseConfig),
                         AngularFireAuthModule,
                             AngularFirestoreModule,
                                 AngularFireStorageModule,
                                     AngularFireDatabaseModule,
                                       ],
				       schemas: [
					         CUSTOM_ELEMENTS_SCHEMA
				       ],
                                         providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
                                           bootstrap: [AppComponent],
                                           })
                                           export class AppModule {}
