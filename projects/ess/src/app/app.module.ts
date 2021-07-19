
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedAppModule } from 'projects/shared/src/app/app.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    
    AppRoutingModule,
    SharedAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
