  
import { moduleMetadata } from '@storybook/angular';
import { ExperienceComponent } from './experience.component';
import {MatCardModule} from '@angular/material/card';


export default {
    title: 'Experience',
    component: ExperienceComponent,
    decorators: [
      moduleMetadata({
        imports: [
            MatCardModule
        ],
        providers: [],
        declarations: [
            
        ]
      }),
    ],
    };

export const mainCard = () => ({
      component: ExperienceComponent,
      props: {
        experience:  [
            {
              enterprise: "Grupo TVCable",
              img: "assets/img/tvcable.jfif",
              content: "Intern at Grupo TVCable company, in the Systems area.  In this job, I carried out quality control activities and support in the development of new company plans handling PL / SQL. Also I use SCRUM methodology in this company"
            }
        ]
      },
});