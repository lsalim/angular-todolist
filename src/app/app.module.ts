import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NotesComponent } from './notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    AddNoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [ NotesComponent, AddNoteComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
