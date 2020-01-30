import { Component } from '@angular/core';

@Component({
    selector: "side-menu-bar",
    templateUrl: "./side-menu-bar.component.html",
    styleUrls: ["./side-menu-bar.component.less"]
})

export class SideMenuBarComponent{
        

        
    dashboardOpen=true;
    pageOpen = false;
    applicationOpen=false;
    elementsOpen=false;
    componentsOpen=false;
    tableOpen=false;
    elemntFOpen=false;
    widgetsOpen=false;
    
    toggleDashboard():void{
        this.dashboardOpen=!this.dashboardOpen;
        this.pageOpen = false;
        this.applicationOpen=false;
        this.elementsOpen=false;
        this.componentsOpen=false;
        this.tableOpen=false;
        this.elemntFOpen=false;
        this.widgetsOpen=false;
    }

    togglePage():void{
            this.pageOpen=!this.pageOpen;
            this.dashboardOpen = false;
            this.applicationOpen=false;
            this.elementsOpen=false;
            this.componentsOpen=false;
            this.tableOpen=false;
            this.elemntFOpen=false;
            this.widgetsOpen=false;
    }

    toggleAplication():void{
            this.applicationOpen=!this.applicationOpen;
            this.dashboardOpen = false;
            this.pageOpen=false;
            this.elementsOpen=false;
            this.componentsOpen=false;
            this.tableOpen=false;
            this.elemntFOpen=false;
            this.widgetsOpen=false;
    }

    toggleElements():void{
            this.elementsOpen=!this.elementsOpen;
            this.dashboardOpen = false;
            this.pageOpen=false;
            this.applicationOpen=false;
            this.componentsOpen=false;
            this.tableOpen=false;
            this.elemntFOpen=false;
            this.widgetsOpen=false;
    }

    toggleComponents():void{
            this.componentsOpen=!this.componentsOpen;
            this.dashboardOpen = false;
            this.pageOpen=false;
            this.applicationOpen=false;
            this.elementsOpen=false;
            this.tableOpen=false;
            this.elemntFOpen=false;
            this.widgetsOpen=false;
    }

    toggleTables():void{
        this.tableOpen=!this.tableOpen;
        this.dashboardOpen = false;
        this.pageOpen=false;
        this.applicationOpen=false;
        this.elementsOpen=false;
        this.componentsOpen=false;
        this.elemntFOpen=false;
        this.widgetsOpen=false;
    }

    toggleFElements():void{
            this.elemntFOpen=!this.elemntFOpen;
            this.dashboardOpen = false;
            this.pageOpen=false;
            this.applicationOpen=false;
            this.elementsOpen=false;
            this.componentsOpen=false;
            this.tableOpen=false;
            this.widgetsOpen=false;
    }

    toggleWidgets():void{
            this.widgetsOpen=!this.widgetsOpen;
            this.dashboardOpen = false;
            this.pageOpen=false;
            this.applicationOpen=false;
            this.elementsOpen=false;
            this.componentsOpen=false;
            this.tableOpen=false;
            this.elemntFOpen=false;
    }


}