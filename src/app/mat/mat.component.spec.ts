import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatComponent } from './mat.component';

describe('MatComponent', () => {
  let component: MatComponent;
  let fixture: ComponentFixture<MatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatComponent]
    });
    fixture = TestBed.createComponent(MatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
