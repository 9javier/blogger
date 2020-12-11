import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'HeaderComponent',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() name:String;
  @Input() departament:String;
  @Input() role:String;
  

  constructor() { }

  ngOnInit(): void {
  }

}
