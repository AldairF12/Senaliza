import { Component } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  guia: string = "";
  title = 'senhaliza';

  isSideNavCollapsed = false;
  screenWidth = 0;

  ngOnInit(){
    if(typeof localStorage !== 'undefined'){
      if(localStorage.getItem("id") !== null){
        this.guia = "logeado";
      }else{ 
        this.guia = "landing-page"; 
      }
    }
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  habilitarContenido(){
    this.guia = "logeado";
  }

  habilitarLogearse(){
    this.guia = "logearse";
  }

  habilitarRegistrarse(){
    this.guia = "registrarse";
  }

  habilitarLandingPage(){
    this.guia = "landing-page";
  }
}
