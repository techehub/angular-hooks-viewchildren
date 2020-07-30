import { Component, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { MessageComponent } from './message/message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages: any;
    ngOnInit() {
        this.messages = [
          'Hello vijeesh',
          'how are you ? ',

      ];
    }

    @ViewChildren(MessageComponent) messageViewChildren: QueryList<MessageComponent>;
    constructor(private cd: ChangeDetectorRef) {
    }

    ngAfterViewInit() {
        console.log(this.messageViewChildren);
        this.messageViewChildren.forEach((item) => { item.message = item.message.toUpperCase(); });
        this.cd.detectChanges();
    }
}
