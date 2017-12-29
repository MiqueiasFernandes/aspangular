import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainComponent } from './layouts/main/main.component';

import {
  MatToolbarModule,
  MatSortModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatDialogModule,
  MatIconModule,
  MatSliderModule,
  MatTabsModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatListModule,
  MatMenuModule,
  MatRadioModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatGridListModule,
  MatSelectModule,
  MatStepperModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatPaginatorModule,
  MatInputModule,
  MatDatepickerModule,
  MatTableModule
} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  MatSortModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatDialogModule,
  MatIconModule,
  MatSliderModule,
  MatTabsModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatListModule,
  MatMenuModule,
  MatRadioModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatGridListModule,
  MatSelectModule,
  MatStepperModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatPaginatorModule,
  MatInputModule,
  MatDatepickerModule,
  MatTableModule
  ],
  exports: [
    MatToolbarModule,
  MatSortModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatDialogModule,
  MatIconModule,
  MatSliderModule,
  MatTabsModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatListModule,
  MatMenuModule,
  MatRadioModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatGridListModule,
  MatSelectModule,
  MatStepperModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatPaginatorModule,
  MatInputModule,
  MatDatepickerModule,
  MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
