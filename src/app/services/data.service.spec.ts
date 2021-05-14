import { fakeAsync, getTestBed, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpService: HttpTestingController;
  let injector: TestBed;

  beforeEach(() => {
    injector = getTestBed();
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
    httpService = injector.get(HttpTestingController);
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return an user Observable',(doneFn)=>{
   const url : string = "https://api.github.com/users/HaroldMaster";
   const user = {
    "name": "Harold Flores",
    "bio": "I'm a developer who wants to learn and help other people  ⚡ 🚀 🤖 "
  }
  const user2 = {
    "name": "Bryan Flores",
    "bio": "I'm an Engineer "
  }
     service.getMyUser().subscribe(data =>{
      expect(data).toEqual(user);
      // expect(data).toEqual(user2); // the test fails because it must be equals
       doneFn();  
     })
     const req = httpService.expectOne({method: 'GET', url: url});
     req.flush(user);
  }
  );
  it('should return an about me object', ()=>{
    //given
    //when
    let about =service.getAboutMe();
    //expect
    expect(typeof(about)).toEqual('object')
  });
  it('should return an experience object', ()=>{
    //given
    //when
    let experience =service.getExperience();
    //expect
    expect(typeof(experience)).toEqual('object')
  });
  it('should return a projects object', ()=>{
    //given
    //when
    let projects =service.getProjects();
    //expect
    expect(typeof(projects)).toEqual('object')
  });

});
