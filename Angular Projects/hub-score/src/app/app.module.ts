import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FindComponentComponent } from './find-component/find-component.component';
import { ShowComponentComponent } from './show-component/show-component.component';

import { LookUpService } from './look-up.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent,FindComponentComponent,ShowComponentComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [LookUpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
