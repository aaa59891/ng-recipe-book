import { Component, Output, EventEmitter } from '@angular/core';
import { NavPageRoute } from './navPageRoute.enum';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    @Output('navRoute') navRoute = new EventEmitter<NavPageRoute>();
    navPageRoute = NavPageRoute;

    onChangePage(target: NavPageRoute){
        this.navRoute.emit(target);
    }
}