  
import { moduleMetadata } from '@storybook/angular';
import { ProjectsComponent } from './projects.component';


export default {
    title: 'Projects',
    component: ProjectsComponent,
    decorators: [
      moduleMetadata({
        imports: [
        ],
        providers: [],
        declarations: [
            
        ]
      }),
    ],
    };

export const mainCard = () => ({
      component: ProjectsComponent,
      props: {
        projects:  [
            {
                title: 'Tourism Template',
                url: 'https://haroldmaster.github.io/borradore4f/',
                img: 'assets/img/tourism.PNG',
                principal: true
              }
        ]
      },
});