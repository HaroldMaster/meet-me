import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input()
  haroldGit !: Observable<any>;
  @Input()
  about !: {[key:string]:string};
  @Input()
  experience !: Array<{[key:string]:string}>;
  @Input()
  projects !: Array<{[key:string]:string | boolean}>;
  ngOnInit(): void {
  }
 
}
