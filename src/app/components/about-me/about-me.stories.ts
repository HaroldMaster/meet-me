  
import { moduleMetadata } from '@storybook/angular';
import { AboutMeComponent } from './about-me.component';


export default {
    title: 'About Me',
    component: AboutMeComponent,
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
      component: AboutMeComponent,
      props: {
        about: {
            parragraph1 : 'Hi, I’m Harold, I’m a Systems Engineer who likes frontend development, that is why I have estudied to develop Angular web apps with responsive designs that could work across all browsers with interfaces that are usable and pleasant for people.',
        }
      },
});