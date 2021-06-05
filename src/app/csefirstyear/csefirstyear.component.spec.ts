import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsefirstyearComponent } from './csefirstyear.component';

describe('CsefirstyearComponent', () => {
  let component: CsefirstyearComponent;
  let fixture: ComponentFixture<CsefirstyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsefirstyearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsefirstyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
