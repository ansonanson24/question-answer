import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'question-answer';
  question = true;
  text = "Why was the JavaScript developer sad?";
  btnText = "Answer";

  onQuestion() {
    if (this.question == true) {
      //change text
      this.text = "Why was the JavaScript developer sad?" + "\n" + "Because he didnt Node how to Express himself!";
      //change button text 
      this.btnText = "Again!";
      this.question = false;
    } else {
      //change text
      this.text = "Why was the JavaScript developer sad?";
      //change button text
      this.btnText = "Answer";
      this.question = true;
    }
  }
}
