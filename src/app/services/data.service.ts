import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url : string = "https://api.github.com/users/HaroldMaster";
  private aboutMe: {[key:string]:string} = {
    parragraph1 : 'Hi, I’m Harold, I’m a Systems Engineer who likes frontend development, that is why I have estudied to develop Angular web apps with responsive designs that could work across all browsers with interfaces that are usable and pleasant for people.',
    parragraph2 : 'I am a person who likes learn new tecnologies and that is why I have been studied some courses in Udemy like Typescript, Sass and Css, Angular, Javascript and more. Also I like help other people and that is why I have been doing tutorials about several things in github using github pages.',
    parragraph3 : 'My professional life as a developer started building websites for small businesses with Wordpress where I learned several complementary skills such as Digital Marketing, SEO and others, also I have worked with Databases, Infraestructure and recently I was working doing banking software using Javascript, Java, SQL Databases and SCRUM Metghodology.',
    parragraph4 : 'Right now, I’m excited about front end web development and I hope becoming better each day with new challenges and goals to meet.'
  };
  private experience: Array<{[key:string]:string}>= [
    {
      enterprise: "Grupo TVCable",
      img: "assets/img/tvcable.jfif",
      content: "Intern at Grupo TVCable company, in the Systems area.  In this job, I carried out quality control activities and support in the development of new company plans handling PL / SQL. Also I use SCRUM methodology in this company"
    },
    {
      enterprise: "PACO",
      img: "assets/img/paco.png",
      content: "Developer analyst at PACO comercial company. I managed the billing system developed in Java with PostgreSQL database, also handling stored procedures in the SQL Server database."
    },
    {
      enterprise: "ClearMinds",
      img: "assets/img/clearminds.jfif",
      content: "Software Developer at Clearminds company. I worked in banking software consulting services where I used Scrum Methodology and tools such as Angular, Javascript, Java, Sql Server as well as the company's own tools."
    },
    {
      enterprise: "Imprenta Mariscal",
      img:  "assets/img/imprenta.png",
      content: "Intern at Imprenta Mariscal industry, in the area of Systems and Databases. I carried out activities such as network management, computer and printer maintenance, user support, backup management, database management, among others."
    }
  ];

  private projects: Array<{[key:string]:string | boolean}> = [
    {
      title: 'Tourism Template',
      url: 'https://haroldmaster.github.io/borradore4f/',
      img: 'assets/img/tourism.PNG',
      principal: true
    },
    {
      title: 'Ecuadorian Futbol Teams (Using API Rest)',
      url: 'https://haroldmaster.github.io/LigaPro/',
      img: 'assets/img/futbol.PNG',
      principal: true
    },
    {
      title: 'Code Verificator (Using Jest (TDD), Storybooks and Figma Template)',
      url: 'https://haroldmaster.github.io/verifyCode/',
      img: 'assets/img/codeVerificator.PNG',
      principal:true
    },
    {
      title: 'Calculator (Using Jest and Storybooks)',
      url: 'https://haroldmaster.github.io/calculator/',
      img: 'assets/img/calculator.PNG'
    },
    {
      title: 'Git Tutorial',
      url: 'https://haroldmaster.github.io/Tutorial-Git/',
      img: 'assets/img/gitTutorial.PNG'
    },
    {
      title: 'GitHub Tutorial',
      url: 'https://haroldmaster.github.io/Tutorial-Github/',
      img: 'assets/img/githubTutorial.PNG'
    },
    {
      title: 'Javascript Methods',
      url: 'https://haroldmaster.github.io/Tips-y-metodos-utiles-de-Javascript/',
      img: 'assets/img/javascript.PNG'
    },
    {
      title: 'Animations with Sass',
      url: 'https://haroldmaster.github.io/sass-and-css/',
      img: 'assets/img/sassAnimations.PNG'
    }
    ,
    {
      title: 'Animations with JQery',
      url: 'https://haroldmaster.github.io/animaciones-eventos-jquery/',
      img: 'assets/img/jquery.PNG'
    },
    {
      title: 'Formulary using DOM',
      url: 'https://haroldmaster.github.io/formulario-solo-con-DOM-validado/',
      img: 'assets/img/form.PNG'
    },
    {
      title: 'Using Fetch (Starwars API)',
      url: 'https://haroldmaster.github.io/fetch/',
      img: 'assets/img/fetch.PNG'
    },
    {
      title: 'Prank',
      url: 'https://haroldmaster.github.io/prank-propuesta/',
      img: 'assets/img/prank.PNG'
    }
    
  ];

  constructor(private _http : HttpClient) { }
   getMyUser(){
    return this._http.get(this.url);
   }
   getAboutMe(){
     return this.aboutMe;
   }
   getExperience(){
     return this.experience;
   }
   getProjects(){
     return this.projects;
   }
}
