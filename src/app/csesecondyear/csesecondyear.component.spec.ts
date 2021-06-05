import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsesecondyearComponent } from './csesecondyear.component';

describe('CsesecondyearComponent', () => {
  let component: CsesecondyearComponent;
  let fixture: ComponentFixture<CsesecondyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsesecondyearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsesecondyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
