import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedByMeMoviesComponent } from './added-by-me-movies.component';

describe('AddedByMeMoviesComponent', () => {
  let component: AddedByMeMoviesComponent;
  let fixture: ComponentFixture<AddedByMeMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedByMeMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedByMeMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
