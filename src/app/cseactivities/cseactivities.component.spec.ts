import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CseactivitiesComponent } from './cseactivities.component';

describe('CseactivitiesComponent', () => {
  let component: CseactivitiesComponent;
  let fixture: ComponentFixture<CseactivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CseactivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CseactivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
