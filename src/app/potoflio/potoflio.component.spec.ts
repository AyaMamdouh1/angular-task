import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotoflioComponent } from './potoflio.component';

describe('PotoflioComponent', () => {
  let component: PotoflioComponent;
  let fixture: ComponentFixture<PotoflioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotoflioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotoflioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
