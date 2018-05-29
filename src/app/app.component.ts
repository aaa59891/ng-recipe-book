import { Component } from '@angular/core';
import { NavPageRoute } from './components/header/navPageRoute.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    currentRoute: NavPageRoute;
    navPageRoute = NavPageRoute;

    onNavRoute(route: NavPageRoute){
        this.currentRoute = route;
    }
}
