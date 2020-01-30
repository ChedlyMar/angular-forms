import { Component } from '@angular/core';

@Component({
    selector: "nav-bar",
    templateUrl:"./nav-bar.component.html",
    styleUrls:["./nav-bar.component.less"]
})

export class NavBarComponent {
    animate=false;
    animatHamburger():void{
        this.animate=!this.animate;
    }
     

        
        
    
}