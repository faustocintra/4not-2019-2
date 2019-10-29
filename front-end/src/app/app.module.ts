import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './ui/header/header.component';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';
import { FooterComponent } from './ui/footer/footer.component';
import { ProfessorListComponent } from './professor/professor-list/professor-list.component';
import { ConfirmDlgComponent } from './ui/confirm-dlg/confirm-dlg.component';
import { MatDialogModule } from '@angular/material';
import { ProfessorFormComponent } from './professor/professor-form/professor-form.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent,
    FooterComponent,
    ProfessorListComponent,
    ConfirmDlgComponent,
    ProfessorFormComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule
  ],
  entryComponents: [
    ConfirmDlgComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
