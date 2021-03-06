import { Component, OnInit } from '@angular/core';
import { Note } from './core/models/note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notes: Note[];
  // completed: Note[];

  ngOnInit() {
    this.notes = JSON.parse(sessionStorage.getItem("_notes"));
    // this.completed = this.notes.filter((res) => res.done == true)
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

