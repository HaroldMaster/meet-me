import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { AboutMeComponent } from '../about-me/about-me.component';
import { CertificatesComponent } from '../certificates/certificates.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        NgbModule,
        NgbCarouselModule,
        BrowserAnimationsModule
      ],
      declarations: [
        MainComponent,
        AboutMeComponent,
        ExperienceComponent,
        CertificatesComponent,
        ProjectsComponent
      ],
    })
    .compileComponents();
  });

  
  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    component.about = {
      parragraph1 : 'Hi, I’m Harold, I’m a Systems Engineer who likes frontend development, that is why I have estudied to develop Angular web apps with responsive designs that could work across all browsers with interfaces that are usable and pleasant for people.',
    }
    component.experience = [
      {
        enterprise: "Grupo TVCable",
        img: "assets/img/tvcable.jfif",
        content: "Intern at Grupo TVCable company, in the Systems area.  In this job, I carried out quality control activities and support in the development of new company plans handling PL / SQL. Also I use SCRUM methodology in this company"
      }]  ;
    component.haroldGit = of({name:"Harold",bio:"My Bio"});
    component.projects = [
      {
        title: 'Tourism Template',
        url: 'https://haroldmaster.github.io/borradore4f/',
        img: 'assets/img/tourism.PNG',
        principal: true
      }]
    fixture.detectChanges();
  });

  it('should create',  () => {
    expect(component).toBeTruthy();
  });
  it('should have 4 inputs defined',  () => {
    expect(component.about).toBeDefined();
    expect(component.experience).toBeDefined();
    expect(component.haroldGit).toBeDefined();
    expect(component.projects).toBeDefined();
  });
});
