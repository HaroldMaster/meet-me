import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input()
  projects !: Array<{[key:string]:string | boolean}>;
  view : boolean = false;
  constructor() { }

  ngOnInit(): void {
    console.log("Projects",this.projects)
  }
  viewMoreProjects(){
    this.view = !this.view;
    let button = document.getElementById("button-projects");
    if(this.view){
      if(button) button.innerHTML="View Less"
      this.projects.map(e=>{
        e.principal =true;
      })
    }
    else {
      if(button) button.innerHTML="View More";
      this.projects.forEach((element,index)=>{
        if(index>=3) element.principal=false;
      })
    }
    
  }

}
