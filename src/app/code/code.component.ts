import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrl: './code.component.css'
})
export class CodeComponent {
  @Output() OnClick = new EventEmitter();
  getCode(getCode:string) {
    this.OnClick.emit(getCode);
  }
}
