import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-sumary',
  templateUrl: './sumary.component.html',
  styleUrl: './sumary.component.css'
})
export class SumaryComponent {
 @Input() fee:Number =0;
 @Input() total:number=0;
 @Input() subtotal:number=0;
 @Input() discount:number = 0;
}
