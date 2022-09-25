import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurbookComponent } from './ourbook.component';

describe('OurbookComponent', () => {
  let component: OurbookComponent;
  let fixture: ComponentFixture<OurbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
