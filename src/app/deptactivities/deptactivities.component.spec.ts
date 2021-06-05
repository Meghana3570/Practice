import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptactivitiesComponent } from './deptactivities.component';

describe('DeptactivitiesComponent', () => {
  let component: DeptactivitiesComponent;
  let fixture: ComponentFixture<DeptactivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptactivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptactivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
