import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
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
      ]
      
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  it('should bring user', () => {
    //given
    const service = TestBed.inject(DataService);
    const spy = spyOn(service, 'getMyUser');
    //when
    component.ngOnInit();
    //expect
    expect(spy).toHaveBeenCalled();
  });
  it('should bring aboutMe', () => {
    //given
    const service = TestBed.inject(DataService);
    const spy = spyOn(service, 'getAboutMe');
    //when
    component.ngOnInit();
    //expect
    expect(spy).toHaveBeenCalled();
  });
  it('should bring Experience', () => {
    //given
    const service = TestBed.inject(DataService);
    const spy = spyOn(service, 'getExperience');
    //when
    component.ngOnInit();
    //expect
    expect(spy).toHaveBeenCalled();
  });
  it('should bring Projects', () => {
    //given
    const service = TestBed.inject(DataService);
    const spy = spyOn(service, 'getProjects');
    //when
    component.ngOnInit();
    //expect
    expect(spy).toHaveBeenCalled();
  });
});
