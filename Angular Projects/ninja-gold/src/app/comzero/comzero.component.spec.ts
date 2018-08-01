import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComzeroComponent } from './comzero.component';

describe('ComzeroComponent', () => {
  let component: ComzeroComponent;
  let fixture: ComponentFixture<ComzeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComzeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComzeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
