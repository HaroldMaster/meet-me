import { Component, ViewChild } from '@angular/core';
import {
  NgbCarousel
} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
})
export class CertificatesComponent {
  images = [
    'angularBasic',
    'cssSass',
    'typescriptCertificate',
    'angularTest',
    'degree',
    'English',
    'html5',
    'Java',
    'sql',
    'Google',
    'BPMN',
  ].map((n) => `assets/img/${n}.PNG`);

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  /*togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent | any) {
    console.log('entro')
    console.log('entro', this.unpauseOnArrow)
    console.log('entro', slideEvent.paused)
    console.log('entro', slideEvent.source)
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      console.log('entro2')
      this.togglePaused();
      console.log('paused?', this.paused)
    }
    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      console.log('entro3')
      this.togglePaused();
      console.log('paused2?', this.paused)
    }
  }*/
}
