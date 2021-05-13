import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { MainComponent } from './components/main/main.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DataService } from './services/data.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        HttpClientTestingModule,
        FontAwesomeModule,
        MatCardModule,
        BrowserAnimationsModule,
        NgbModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        MainComponent,
        AboutMeComponent,
        ExperienceComponent,
        CertificatesComponent,
        ProjectsComponent
      ],
      providers: [
       { provide : DataService,
        useValue : {
          getMyUser: ()=>({name:"Harold",bio:"My Bio"}),
          getAboutMe: ()=>({ parragraph1 : 'Hi, I’m Harold, I’m a Systems Engineer who likes frontend development, that is why I have estudied to develop Angular web apps with responsive designs that could work across all browsers with interfaces that are usable and pleasant for people.',
                      }),
          getExperience: ()=>([
            {
              enterprise: "Grupo TVCable",
              img: "assets/img/tvcable.jfif",
              content: "Intern at Grupo TVCable company, in the Systems area.  In this job, I carried out quality control activities and support in the development of new company plans handling PL / SQL. Also I use SCRUM methodology in this company"
            }]),
          getProjects: ()=> ([
            {
              title: 'Tourism Template',
              url: 'https://haroldmaster.github.io/borradore4f/',
              img: 'assets/img/tourism.PNG',
              principal: true
            }])
        }
      }
      ],
      
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
 
});
