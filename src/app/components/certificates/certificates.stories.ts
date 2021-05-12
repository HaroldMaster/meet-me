  
import { moduleMetadata } from '@storybook/angular';
import { CertificatesComponent } from './certificates.component';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    NgbCarousel,
    NgbSlideEvent,
    NgbSlideEventSource,
  } from '@ng-bootstrap/ng-bootstrap';

export default {
    title: 'Certificates',
    component: CertificatesComponent,
    decorators: [
      moduleMetadata({
        imports: [
            NgbModule,
            NgbCarouselModule,
            BrowserAnimationsModule
        ],
        providers: [],
        declarations: [
        ]
      }),
    ],
    };

export const mainCard = () => ({
      component: CertificatesComponent,
      props: {
         

      },
});