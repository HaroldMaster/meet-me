import {  Component, Inject, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit{
  @Input()
  experience : Array<{[key:string]:string}> = [];
  view : boolean = false;


  constructor() { }

  ngOnInit(): void {

  }
  changeView(){
  this.view = !this.view;
   let change =  document.getElementById("content__experience-3");
   let changeButton =  document.getElementById("experience__button");
   if(changeButton){
    if(change){
      if(this.view){
       changeButton.innerHTML = "View Less"
       change.classList.add("show");
      }
      else{
       changeButton.innerHTML = "View More"
       change.classList.remove("show");
      }
    }
   }
  }
}
