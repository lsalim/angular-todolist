import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../core/models/note';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html'
})
export class AddNoteComponent implements OnInit {
  notes: Note[];

  constructor() { }

  ngOnInit() {
  }

  saveNote(note: string) {
    if (!sessionStorage.getItem("_notes")) {
      this.notes = new Array;
      this.pushNote(note);
    }
    else {
      this.notes = JSON.parse(sessionStorage.getItem("_notes"))
      this.pushNote(note);
    }
  }

  pushNote(note: string) {
    this.notes.push(new Note(note));
    sessionStorage.setItem("_notes", JSON.stringify(this.notes))
  }
}
