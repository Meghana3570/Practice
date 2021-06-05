import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcesecondyearComponent } from './ecesecondyear.component';

describe('EcesecondyearComponent', () => {
  let component: EcesecondyearComponent;
  let fixture: ComponentFixture<EcesecondyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcesecondyearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcesecondyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
