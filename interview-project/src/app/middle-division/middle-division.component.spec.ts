import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleDivisionComponent } from './middle-division.component';

describe('MiddleDivisionComponent', () => {
  let component: MiddleDivisionComponent;
  let fixture: ComponentFixture<MiddleDivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleDivisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
