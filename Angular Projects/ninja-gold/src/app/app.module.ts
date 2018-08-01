import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComzeroComponent } from './comzero/comzero.component';
import { ComoneComponent } from './comone/comone.component';
import { ComtwoComponent } from './comtwo/comtwo.component';

import { GoldDataService } from './gold-data.service';

@NgModule({
  declarations: [AppComponent,ComzeroComponent,ComoneComponent,ComtwoComponent],
  imports: [BrowserModule],
  providers: [GoldDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
