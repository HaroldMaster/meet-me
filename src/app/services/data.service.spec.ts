import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return an user object', ()=>{
    //given
    //when
    let git =service.getMyUser();
    //expect
    expect(typeof(git)).toEqual('object')
  });
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
