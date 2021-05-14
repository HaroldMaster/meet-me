import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data.service';

import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should recive the projects', () => {
    expect(component.projects).toBeDefined();
  });
  it('should change the button text', () => {
    //given
    component.view=false;
    component.projects = [
      {
        title: 'Tourism Template',
        url: 'https://haroldmaster.github.io/borradore4f/',
        img: 'assets/img/tourism.PNG',
        principal: true
      }]
    const button = fixture.debugElement.query(By.css('#button-projects'));
    //when
    button.nativeElement.dispatchEvent(new Event('click'));

    expect(button.nativeElement.innerHTML).toEqual("View Less")
  });
});
