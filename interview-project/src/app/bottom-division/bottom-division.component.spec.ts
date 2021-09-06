import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomDivisionComponent } from './bottom-division.component';

describe('BottomDivisionComponent', () => {
  let component: BottomDivisionComponent;
  let fixture: ComponentFixture<BottomDivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomDivisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
