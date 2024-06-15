import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

   @Output() productForm = new EventEmitter();
  submitForm(form: any) {
   
     this.productForm.emit(form);
  }
}
