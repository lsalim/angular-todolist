export class Note {
  description: string;
  date: Date;
  done: boolean;
  reference: string;

  constructor(description: string) {
    this.description = description;
    this.date = new Date;
    this.done = false;
    this.reference = Math.random().toString(36).substring(7);
  }
}
