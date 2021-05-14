import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { CertificatesComponent } from './certificates.component';

describe('CertificatesComponent', () => {
  let component: CertificatesComponent;
  let fixture: ComponentFixture<CertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        CertificatesComponent
      ],
      imports: [
        NgbModule,
        NgbCarouselModule
    ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have images defined', () => {
    expect(component.images).toBeDefined();
  });
  /*it('should change pause state', () => {
    //given
    component.paused = true
    //when
    component.togglePaused();
    expect(component.paused).toEqual(false);
  });*/
  /*it('should call togglePaused and pause', () => {
    //given
    component.unpauseOnArrow = true;
    fixture.detectChanges();
    const slide : any = {prev: "ngb-slide-3", current: "ngb-slide-4", direction: "left", paused: true, source: "arrowRight"};
    const componentSpy = spyOn(component, 'togglePaused');
    //when
    component.onSlide(slide);
    expect(componentSpy).toHaveBeenCalled();
    fixture.detectChanges();
    expect(component.paused).toEqual(true);
  });*/
});
