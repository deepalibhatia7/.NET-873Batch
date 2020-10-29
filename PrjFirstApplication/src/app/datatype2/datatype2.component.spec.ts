import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datatype2Component } from './datatype2.component';

describe('Datatype2Component', () => {
  let component: Datatype2Component;
  let fixture: ComponentFixture<Datatype2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Datatype2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Datatype2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
