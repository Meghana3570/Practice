import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcefirstyearComponent } from './ecefirstyear.component';

describe('EcefirstyearComponent', () => {
  let component: EcefirstyearComponent;
  let fixture: ComponentFixture<EcefirstyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcefirstyearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcefirstyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
