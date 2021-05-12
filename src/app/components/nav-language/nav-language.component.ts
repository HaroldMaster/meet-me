import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-language',
  templateUrl: './nav-language.component.html',
  styleUrls: ['./nav-language.component.scss']
})
export class NavLanguageComponent implements OnInit {

  language : any;
  constructor() { }

  ngOnInit(): void {
    this.language = localStorage.getItem('lang') || 'en'
  }
  changeLanguage(language:any){
    localStorage.setItem('lang',language.value);
     window.location.reload();
    console.log(localStorage.getItem('lang'));
  }
}
