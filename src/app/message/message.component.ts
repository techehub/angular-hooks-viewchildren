import { Component, OnInit, Input, ViewChildren, QueryList, ChangeDetectorRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message: string;



  ngOnInit(): void {
  }

}
