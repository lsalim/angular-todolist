import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../core/models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @Input() notes: Note[];

  constructor() { }

  ngOnInit() {
  }

  checked(noteToRemove: Note) {
    /*let notes = JSON.parse(sessionStorage.getItem("_notes"));
    console.error("Notes before " + notes.length)

    let note = notes.filter((res) => res.reference === noteToRemove.reference);
    notes.pop(note);
    console.error("Notes after " + notes.length)

    sessionStorage.setItem("_notes", JSON.stringify(notes));
    this.notes = notes;*/
  }
}
