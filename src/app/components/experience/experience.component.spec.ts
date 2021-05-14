import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatCardModule} from '@angular/material/card';
import { By } from '@angular/platform-browser';
import { ExperienceComponent } from './experience.component';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceComponent ],
      imports: [MatCardModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have an Experience array', () => {
    component.ngOnInit();
    expect(component.experience).toBeDefined();
  });
  it('should change the class', () => {
    //given
    component.experience=[
      {},
      {},
      {},
      {}
    ];
    component.ngOnInit();
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('#experience__button'));
    const div = fixture.debugElement.query(By.css('#content__experience-3'));
    //when
    button.nativeElement.dispatchEvent(new Event('click'));
    //expect
    expect(div.nativeElement.className).toEqual("content__experience-3 show")

    //given
  /*  component.document.body.innerHTML = `
    <div id="content__experience-3">Hola</div>
    <button id="experience__button" (click)="changeView()">View More</button>
  `;*/
    /*component.view=false;
    const button = fixture.debugElement.query(By.css('#experience__button'));
    const div = fixture.debugElement.query(By.css('#content__experience-3'));
    //when
    button.nativeElement.dispatchEvent(new Event('click'));

    expect(button).toEqual("View Less")
    /*component.view=false;
    /*const button = <HTMLInputElement>component.document.getElementById("experience__button");
    let div = <HTMLDivElement>component.document.getElementById("content__experience-3");
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(div).toEqual("View Less")*/


  });
});
