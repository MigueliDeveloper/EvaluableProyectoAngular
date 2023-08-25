import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JefeComponent } from './jefe.component';

describe('JefeComponent', () => {
  let component: JefeComponent;
  let fixture: ComponentFixture<JefeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JefeComponent]
    });
    fixture = TestBed.createComponent(JefeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
