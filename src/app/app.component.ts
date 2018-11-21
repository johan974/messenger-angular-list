import {Component, OnInit} from '@angular/core';
import {Chat} from "./chat.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  chats: Chat[] = [];
  ngOnInit() {
    for( let i = 0; i < 5; i++) {
      this.createAndAddChat( 'me', 'My message ' + i);
      this.createAndAddChat( 'you', 'Your message ' + i);
    }
  }
  createAndAddChat(who: string, content: string) {
    const chatMsg = new Chat();
    chatMsg.who = who;
    chatMsg.content = content;
    chatMsg.time = this.formatAMPM(new Date());
    this.chats.push(chatMsg);
  }

  formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
}
