import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectvasComponent } from './directvas.component';

describe('DirectvasComponent', () => {
  let component: DirectvasComponent;
  let fixture: ComponentFixture<DirectvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
