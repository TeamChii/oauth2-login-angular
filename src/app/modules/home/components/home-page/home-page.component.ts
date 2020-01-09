import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  objSystems =  {
    systemName : String,
    systemUrl : String
  };
  systems = [
    {'systemName' : "WEB ONLINE", 'systemUrl': "/webonline?code=D7DF8S"},
    {'systemName' : "SYSTEM1", 'systemUrl': "/"},
    {'systemName' : "SYSTEM2", 'systemUrl': "/"},
    {'systemName' : "SYSTEM3", 'systemUrl': "/"},
  ]
  constructor() { }

  ngOnInit() {



  }

}
