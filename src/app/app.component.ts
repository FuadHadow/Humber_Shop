import { Component, OnInit } from '@angular/core'; 
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./component/header/header.component";
import { CartComponent } from './component/cart/cart.component';  
import { HomeComponent } from './component/home/home.component'; 
import { ApiService } from './service/api.service'; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})       

export class AppComponent {
  
  title = 'Humber-Shop';
}
