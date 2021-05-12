import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  user !: Observable<any>;
  about !: {[key:string]:string};
  experience !: Array<{[key:string]:string}>;
  projects !: Array<{[key:string]:string | boolean}>;
  constructor(private _datos: DataService ){
  }

  ngOnInit(){
    this.user = this._datos.getMyUser();
    this.about = this._datos.getAboutMe();
    this.experience = this._datos.getExperience();
    this.projects = this._datos.getProjects();
  }

}
