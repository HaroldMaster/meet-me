import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbCarouselConfig, NgbCarouselModule, NgbModule, NgbSlide } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarousel, NGB_CAROUSEL_DIRECTIVES } from '@ng-bootstrap/ng-bootstrap/carousel/carousel';

import { CertificatesComponent } from './certificates.component';

describe('CertificatesComponent', () => {
  let component: CertificatesComponent;
  let fixture: ComponentFixture<CertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificatesComponent
      /*  NgbSlide,
        NGB_CAROUSEL_DIRECTIVES,
        NgbCarousel */
      ],
      imports: [
       /* NgbModule,
        BrowserAnimationsModule,
        CommonModule*/
    ],
    providers:[
      /*NgbCarouselConfig*/
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
});
