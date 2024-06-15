import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'Shopping With Me';
  menuItems = ['Home', 'Shopping Cart'];
 @Input() numberItems: number=0;

}
