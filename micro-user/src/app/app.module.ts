import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { RegistrationService } from './registration/registration.service';
import { HttpClientModule } from '@angular/common/http';
import { StompConfig, StompService } from '@stomp/ng2-stompjs';
import { stompConfig } from './registration/stomp.config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatDatepicker,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatOptionModule,
  MatSlideToggleModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule
  ],
  providers: [RegistrationService,
    StompService,
    {
      provide: StompConfig,
      useValue: stompConfig
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
